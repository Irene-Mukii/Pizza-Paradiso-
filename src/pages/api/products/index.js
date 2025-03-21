import dbConnect from "util/mongo";
import Product from "models/Product";
//import './envConfig.ts'

export default async function handler(req, res) {
    
    
    const { method, cookies } = req;

    const token = cookies.token;

    console.log(method)
    await dbConnect()

    if (method==='GET'){
        try {
            const products = await Product.find();
            res.status(200).json(products);
        }catch(err){
            return res.status(500).json(err)
        }
    }
    if(method==='POST'){
        if(!token || token !== process.env.TOKEN){
            return res.status(401).json('Not authenticated')
        }
        try{
            const product = await Product.create(req.body)
            res.status(200).json(product)
        }catch(err){
            res.status(500).json(err)
        }
    }
    if(method==='PUT'){
        try{
            
        }catch(err){
            
        }
    }

  };