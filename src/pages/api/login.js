import cookie from 'cookie'


const handler = (req, res)=>{
    
     if (req.method === 'POST'){
        const {username, password} = req.body;
        
        console.log(username,password)
        if(username === process.env.NEXTADMIN_USERNAME && password === process.env.NEXTADMIN_PASSWORD){
            res.setHeader('Set-Cookie',cookie.serialize('token', process.env.NEXTTOKEN, {
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