import Image from "next/image";

export default function Cart () {
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
                    <tr className=" pb-5 flex justify-between items-center">
                        <td>
                            <div className=" w-28 h-28 relative">
                            <Image src='/../public/images/pizza.png' 
                            fill 
                            style={{objectFit: 'cover'}}
                            alt="pizza ordered image"/>
                            </div>
                        </td>
                        <td >
                            <span className=" font-medium text-orange-600 text-2xl">HAWAIAN</span>
                        </td>
                        <td>
                            <span> Double Ingridient, Spicy sauce</span>
                        </td>
                        <td>
                            <span> ksh 1990</span>
                        </td>
                        <td>
                            <span> 2 </span>
                        </td>
                        <td>
                            <span className=" font-medium text-xl"> ksh 3980</span>
                        </td>
                    </tr>
                    <tr className=" pb-5 flex justify-between items-center">
                        <td>
                            <div className=" w-28 h-28 relative">
                            <Image src='/../public/images/pizza.png' 
                            fill 
                            style={{objectFit: 'cover'}}
                            alt="pizza ordered image"/>
                            </div>
                        </td>
                        <td >
                            <span className=" font-medium text-orange-600 text-2xl">HAWAIAN</span>
                        </td>
                        <td>
                            <span> Double Ingridient, Spicy sauce</span>
                        </td>
                        <td>
                            <span> ksh 1990</span>
                        </td>
                        <td>
                            <span> 2 </span>
                        </td>
                        <td>
                            <span className=" font-medium text-xl"> ksh 3980</span>
                        </td>
                    </tr>
                    <tr className=" pb-5 flex justify-between items-center">
                        <td>
                            <div className=" w-28 h-28 relative">
                            <Image src='/../public/images/pizza.png' 
                            fill 
                            style={{objectFit: 'cover'}}
                            alt="pizza ordered image"/>
                            </div>
                        </td>
                        <td >
                            <span className=" font-medium text-orange-600 text-2xl">HAWAIAN</span>
                        </td>
                        <td>
                            <span> Double Ingridient, Spicy sauce</span>
                        </td>
                        <td>
                            <span> ksh 1990</span>
                        </td>
                        <td>
                            <span> 2 </span>
                        </td>
                        <td>
                            <span className=" font-medium text-xl"> ksh 3980</span>
                        </td>
                    </tr>
                    <tr className=" pb-5 flex justify-between items-center">
                        <td>
                            <div className=" w-28 h-28 relative">
                            <Image src='/../public/images/pizza.png' 
                            fill 
                            style={{objectFit: 'cover'}}
                            alt="pizza ordered image"/>
                            </div>
                        </td>
                        <td >
                            <span className=" font-medium text-orange-600 text-2xl">HAWAIAN</span>
                        </td>
                        <td>
                            <span> Double Ingridient, Spicy sauce</span>
                        </td>
                        <td>
                            <span> ksh 1990</span>
                        </td>
                        <td>
                            <span> 2 </span>
                        </td>
                        <td>
                            <span className=" font-medium text-xl"> ksh 3980</span>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div className=" basis-1/3 px-8">
                <div className=" max-h-72 w-5/6 bg-gray-700 p-12 pt-3 flex flex-col justify-between text-white">
                    <h2>CART TOTAL</h2>
                    <div className=" mr-2">
                        <b>Subtotal:  </b>ksh 7,960
                    </div>
                    <div className=" mr-2">
                        <b>Discount: </b>ksh 0
                    </div>
                    <div className=" mr-2">
                        <b>Total: </b>ksh 7,960
                    </div>
                    <button className=" h-7 text-orange-600 font-bold cursor-pointer bg-slate-300 mt-5">CHECKOUT NOW</button>
                </div>
                
            </div>
        </div>
    )
};

