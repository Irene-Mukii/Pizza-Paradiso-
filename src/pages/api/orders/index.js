import dbConnect from "util/mongo";
import Order from "models/Order";

const handler = async (req, res) => {
    
    const { method } = req;
    console.log(method+'orders')

    await dbConnect();

    if(method==='GET'){
        try{
            const orders = await Order.find();
            console.log(orders)
            return res.status(201).json(orders)
        }catch(err){
            res.status(500).json(err)
        }

    }
    if(method==='POST'){
        try{
            const order = await Order.create(req.body);
            return res.status(201).json(order)
        }catch(err){
            res.status(500).json(err)
        }

    }
 };

export default handler;