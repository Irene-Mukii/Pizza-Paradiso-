import { useState } from "react";

const OrderDetail = ({total, createOrder}) => {
    const [customer, setCustomer] = useState('')
    const [address, setAddress] = useState('')

    const handleClick = () => {
        console.log(customer, address, total)
        createOrder({
            customer, address, total, method: 0
        })
    }
    return (

        <div className=" w-screen h-screen absolute flex top-0 left-0 items-center justify-center bg-gray-800 opacity-90"  style={{zIndex: '100'}}>
            <div className=" max-w-lg bg-white flex flex-col p-14 rounded-2xl items-center justify-center opacity-100 mb-4">
                <h1 className=" font-light text-xl p-3">You will pay $12 after delivery</h1>
                <div className="flex flex-col w-full">
                    <label className=" mb-3">Name Surname</label>
                    <input className=" h-10 border rounded border-black p-2" placeholder="John Doe" type="text" onChange={(e)=> setCustomer(e.target.value)}/>
                </div>
                <div className="flex flex-col w-full">
                    <label className=" mb-3">Phone Number</label>
                    <input className=" h-10 border rounded border-black p-2" placeholder="0712345678" type="number" onChange={()=>{}}/>
                </div>
                <div className="flex flex-col w-full">
                    <label className=" mb-3">Address</label>
                    <input className=" justify-items-start h-44 border rounded border-black p-2" placeholder="Ngong road, Sky Horse Appartments, Hs. 2 " type="text" onChange={(e)=> setAddress(e.target.value)}/>
                </div>
                <button onClick={handleClick} className=" bg-teal-600 text-white py-3 px-5 rounded-md mt-4 cursor-pointer text-xl ">Order</button>
            </div>
        </div>
    )
};

export default OrderDetail;