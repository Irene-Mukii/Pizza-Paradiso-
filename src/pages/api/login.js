import cookie from 'cookie'
//import './envConfig.ts'


const handler = (req, res)=>{
    
     if (req.method === 'POST'){
        const {username, password} = req.body;
        
        // console.log(username,password, 'LOGGING HERE !!! ')
        if(username === process.env.NEXT_PUBLIC_ADMIN_USERNAME && password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD){
            res.setHeader('Set-Cookie',cookie.serialize('token', process.env.NEXT_PUBLIC_TOKEN, {
                maxAge: 60 * 60,
                sameSite: 'strict',
                path: '/'
            }));
            
            res.status(200).json('Successful')
        }else {
            res.status(400).json('wrong cridentials')
        }
     }
};
 



export default handler