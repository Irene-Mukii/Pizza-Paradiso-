import dbConnect from "util/mongo";
import Product from "models/Product";

export default async function handler(req, res) {
    
    const { method, query:{id} } = req;
    console.log(method)
    await dbConnect()

    if (method==='GET'){
        try {
            const products = await Product.findById(id);
            return  res.status(200).json(products);
        }catch(err){
            return res.status(500).json(err)
        }
    }
    if(method==='PUT'){
        try{
            const product = await Product.findByIdAndUpdate(id, req.body, {new:true})
            return res.status(200).json(product)
        }catch(err){
            return res.status(500).json(err)
        }
    }
    if(method==='DELETE'){
        try{
            await Product.findByIdAndDelete(id)
            return res.status(200).json('product succesfully deleted')
        }catch(err){
            return res.status(500).json(err)
        }
    }

  }