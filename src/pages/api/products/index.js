import dbConnect from "util/mongo";
import Product from "models/Product";

export default async function handler(req, res) {
    
    const { method } = req;
    console.log(method)
    dbConnect()

    if (method==='GET'){
        try {
            const products = await Product.find();
            return  res.status(200).json(products);
        }catch(err){
            return res.status(500).json(err)
        }
    }
    if(method==='POST'){
        try{
            const product = await Product.create(req.body)
            return res.status(200).json(product)
        }catch(err){
            return res.status(500).json(err)
        }
    }
    if(method==='PUT'){
        try{
            
        }catch(err){
            
        }
    }

  }