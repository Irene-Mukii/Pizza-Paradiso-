import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from '@paypal/react-paypal-js'
import { useRouter } from "next/router";
import { reset } from "redux/cartSlice";
import axios from "axios";
import OrderDetail from "src/components/OrderDetail";

export default function Cart () {
    const cart = useSelector(state => state.cart );
    console.log(cart.total + 'IM HEEREEEEEEE')
    const [open, setOpen] = useState(false);
    const [cash, setCash]=useState(false)
    //PAYPAL PROPS IN UI
    const amount = cart.total;
    const currency = "USD";
    const style = { layout: 'vertical'}; 

    const dispatch = useDispatch();
    
    
    const router = useRouter();
    

    const createOrder = async (data) => {
        try{             
            const res = await axios.post('http://localhost:3000/api/orders', data)
            console.log(res)
            
            res.status && router.push('/orders/'+res.data._id)
            dispatch(reset())
        }catch(err){
            console.log(err)
        }
    }

    // Custom component to wrap the PayPalButtons and handle currency changes
    const ButtonWrapper = ({ currency, showSpinner }) => {
        // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
        // This is the main reason to wrap the PayPalButtons in a new component
        const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
    
        useEffect(() => {
            dispatch({
                type: "resetOptions",
                value: {
                    ...options,
                    currency: currency,
                },
            });
        }, [currency, showSpinner]);
    
    
        return (<>
                { (showSpinner && isPending) && <div className="spinner" /> }
                <PayPalButtons
                    style={style}
                    disabled={false}
                    forceReRender={[amount, currency, style]}
                    fundingSource="paypal"
                    createOrder={(data, actions) => {
                        return actions.order
                            .create({
                                purchase_units: [
                                    {
                                        amount: {
                                            currency_code: currency,
                                            value: amount,
                                        },
                                    },
                                ],
                            })
                            .then((orderId) => {
                                // Your code here after create the order
                                return orderId;
                            });
                    }}
                    onApprove={ function (data, actions) {
                        return actions.order.capture().then(function(details){
                        const shipping = details.purchase_units[0].shipping;
                        createOrder({
                            customer: shipping.name.full_name,
                            address: shipping.address.address_line_1,
                            total: cart.total,
                            method: 1,
                        });
                        });
                        // Your code here after capture the order
                        
                    }}
                />
            </>
        );
    }

    return (
        <div className=" bg-white h-screen px-10 flex items-center">
            <div className="basis-2/3">
                <table className="w-full border-spacing-5">
                    <tbody className=" ">
                    <tr className=" pb-5 flex justify-between items-center justify-items-end">
                        <th>Product</th>
                        <th>Name</th>
                        <th>Extras</th>
                        <th className=" text-right">Price</th>
                        <th className=" text-right">Quantity</th>
                        <th className=" text-right">Total</th>
                    </tr>
                    {cart.products.map(product => (
                    <tr className=" pb-5 flex justify-between items-center" key={product._id}>
                        <td>
                            <div className=" w-28 h-28 relative">
                            <Image src={product.image} 
                            fill 
                            style={{objectFit: 'cover'}}
                            alt="pizza ordered image"/>
                            </div>
                        </td>
                        <td >
                            <span className=" font-medium text-orange-600 text-2xl">{product.title}</span>
                        </td>
                        <td>
                            {product.extras.map((extra)=>(
                                <span key={extra._id}>{extra.text}, </span>
                            ))}
                            {/* ************************************************extras registering in the cart even if not selected */}
                        </td>
                        <td>
                            <span> {product.price}</span>
                        </td>
                        <td>
                            <span> {product.quantity} </span>
                        </td>
                        <td>
                            <span className=" font-medium text-xl"> $ {product.price * product.quantity}</span>
                        </td>
                    </tr>
                    ))}

                    </tbody>
                </table>
            </div>

            <div className=" basis-1/3 px-8">
                <div className=" max-h-72 w-5/6 bg-gray-700 p-12 pt-3 flex flex-col justify-between text-white items-center">
                    <h2 className="font-bold mb-2">CART TOTAL</h2>
                    <div className=" mr-2">
                        <b>Subtotal:  </b>$ {cart.total}
                    </div>
                    <div className=" mr-2">
                        <b>Discount: </b>$ 0
                    </div>
                    <div className=" mr-2">
                        <b>Total: </b> $ {cart.total}
                    </div>
                    {open ? (
                    <div className=" flex flex-col items-center justify-center">
                        <button
                            className=" h-7 flex flex-col text-teal-600 font-bold cursor-pointer bg-white m-5 rounded-sm px-5"
                            onClick={()=>setCash(true)} 
                        >CASH ON DELIVERY</button>
                        <PayPalScriptProvider
                            options={{
                                "client-id": 'ARj3MiMx_6gMLF31cu2kFBTa5fCq9K97AjWTlB5KKISSUNBxGiKtVQHC6RlULSshCmL1feLEAIyC95Oc',
                                components: "buttons",
                                currency: "USD",
                            }}
                        >
                        <ButtonWrapper
                            currency={currency}
                            showSpinner={false}
                        />
                        </PayPalScriptProvider>
                    </div>) : (
                    <button 
                    className=" h-7 flex flex-col text-orange-600 font-bold cursor-pointer bg-white mt-5 rounded-md px-5" 
                    onClick={()=>setOpen(prev => !prev)}>
                        CHECKOUT NOW
                    </button>)}                 
                </div>    
            </div>
            {cash && (
                <OrderDetail total={cart.total} createOrder={createOrder}/>
            )}
        </div>
    )
};

