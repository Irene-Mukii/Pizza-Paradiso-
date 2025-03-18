import axios from "axios";
import { useState } from "react";
//import './envConfig.ts'

const { default: Image } = require("next/image")

 const Index = ({orders, products}) => {

    const [pizzaList, setPizzaList] = useState(products)
    const [orderList, setOrderList] = useState(orders)
    const status = ['preparing', 'on the way', 'delivered']

    const handleDelete = async (id) => {
        try{
            const res = await axios.delete(process.env.NEXT_PUBLIC_URL +'api/products/'+id)
            setPizzaList(pizzaList.filter(pizza=>pizza._id !== id ))
        }catch (err){
            console.log(err)
        }
    };

    const handleStatus = async (id) => {
        const item = orderList.filter(order=> order._id===id)[0];
        const currentStatus = item.status;
        try{
            const res = await axios.put(process.env.NEXT_PUBLIC_URL +'api/orders/'+id, {status: currentStatus+1 })
            setOrderList([
                res.data,
                ...orderList.filter(order=> order._id !== id)
            ])

        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className=" h-screen p-28 flex">
            <div className="basis-1/2">
                <h1>PRODUCTS</h1>
                <table className=" w-full text-left border-spacing-5 ">
                <tbody>
                    <tr>
                        <th>Image</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </tbody>
                <tbody>
                    {pizzaList.map(product => (
                        <tr key={product._id}>
                        <td>
                            <Image
                                src={product.image}
                                width={50}
                                height={50}
                                alt="pizza product image"
                                style={{objectFit: 'cover'}}
                            />
                        </td>
                        <td>{product._id.slice(0,5)}...</td>
                        <td>{product.title}</td>
                        <td>${product.prices[0]}</td>
                        <td>
                            <button className=" text-white p-1 bg-teal-700 cursor-pointer m-5 rounded-sm ">Edit</button>
                            <button className="  text-white p-1 bg-red-700 cursor-pointer rounded-sm" onClick={()=>handleDelete(product._id)}>Delete</button>
                        </td>
                    </tr>
                    ))}
                    
                </tbody>
            </table>
            </div>

            <div className="basis-1/2">
                <h1>ORDERS</h1>
                <table className=" w-full text-left border-spacing-5 ">
                <tbody>
                    <tr>
                        <th>Id</th>
                        <th>Customer</th>
                        <th>Total</th>
                        <th>Payment</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </tbody>
                <tbody>
                    {orderList.map(order => (
                        <tr key={order._id}>
                        <td>{order._id.slice(0,5)}...</td>
                        <td>{order.customer}</td>
                        <td> ${order.total}</td>
                        <td>{order.method === 0 ? (<span>cash</span>) : (<span>paid</span>)}</td>
                        <td>{status[order.status]}</td>
                        <td>
                            <button className=" text-white p-1 bg-green-500 cursor-pointer rounded-sm" onClick={()=>handleStatus(order._id)}>Next Stage</button>
                        </td>
                    </tr>
                    ))}
                    
                </tbody>
            </table>
            </div>
            
        </div>
    )
 };

 export const getServerSideProps = async (ctx)=>{
    const myCookie = ctx.req?.cookies || '';

    if(myCookie.token !== process.env.NEXT_PUBLIC_TOKEN){
        return {
            redirect:{
                destination: '/admin/login',
                permanent: false,
            }
        
        }
    }
     const productRes = await axios.get(process.env.NEXT_PUBLIC_URL +'api/products')
     const orderRes = await axios.get(process.env.NEXT_PUBLIC_URL +'api/orders')

     return {
        props:{
            orders: orderRes.data,
            products: productRes.data
        }
     }
 }

 export default Index;
