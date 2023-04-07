import Image from "next/image";
import { useState } from "react";

const Product = () => {

    const [size, setSize] = useState(0)

    const pizza = {
        id: 1,
        img: '/../public/images/pizza.png',
        name: 'HAWAIAN',
        price: [ 1990, 2390, 2790],
        desc: 'Loren ispum dolor sit amet, consectutur adipiscing elit.Loren ispum dolor sit amet, consectutur adipiscing elit. Loren ispum dolor sit amet, consectutur adipiscing elit. Loren ispum dolor sit amet, consectutur adipiscing elit. Loren ispum dolor sit amet, consectutur adipiscing elit.'
    };
    return (
        <div className="flex h-screen items-center" >
            <div className=" flex-1 h-full py-28">
                <div className=" w-4/5 h-4/5 relative">
                    <Image src={pizza.img} alt={pizza.name} fill style={{objectFit: 'contain'}}/>
                </div>
            </div>
            <div className="flex-1 py-28 ">
                <h1 className="relative text-4xl font-medium pb-3">{pizza.name}</h1>
                <span className="text-orange-600 text-2xl border-b-2 border-solid border-orange-600 font-normal relative">KSH {pizza.price[size]}</span>
                <p className="relative py-5"> {pizza.desc}</p>
                <h3 className=" pb-5 font-semibold text-slate-950 ">Choose your size</h3>
                <div className=" flex justify-between w-2/5">
                    <div className=" w-10 h-10 relative cursor-pointer"
                         onClick={()=>setSize(0)}>
                        <Image src='/../public/images/size.png' alt="small pizza size"fill style={{objectFit: 'contain'}}/>
                        <span className="absolute -top-2 -right-5 bg-teal-700 text-white text-xs  rounded-xl px-1 ">Small</span>
                    </div>
                    <div className=" w-12 h-12 relative cursor-pointer"
                         onClick={()=>setSize(1)}>
                        <Image src='/../public/images/size.png' alt="medium pizza size"fill style={{objectFit: 'contain'}}/>
                        <span className="absolute -top-2 -right-5 bg-teal-700 text-white text-xs  rounded-xl px-1 ">Medium</span>
                    </div>
                    <div className=" w-14 h-14 relative cursor-pointer"
                         onClick={()=>setSize(2)}>
                        <Image src='/../public/images/size.png' alt="large pizza size"fill style={{objectFit: 'contain'}}/>
                        <span className="absolute -top-2 -right-5 bg-teal-700 text-white text-xs  rounded-xl px-1 ">Large</span>
                    </div>
                </div>
                <h3 className=" pb-5 font-semibold text-slate-950 ">Choose additional ingredients </h3>
                <div className="flex mb-8">
                    <div className="flex items-center mr-3 text-xs font-medium">
                        <input 
                        type="checkbox" 
                        id="double" 
                        name="double" 
                        className=" w-5 h-5"/>
                        <label htmlFor="double"> Double Ingredients</label>
                    </div>
                    <div className="flex items-center mr-3 text-xs font-medium"> 
                        <input 
                        type="checkbox" 
                        id="cheese" 
                        name="cheese" 
                        className="w-5 h-5"/>
                        <label htmlFor="cheese"> Extra Cheese</label>
                    </div>
                    <div className="flex items-center mr-3 text-xs font-medium">
                        <input 
                        type="checkbox" 
                        id="spicy" 
                        name="spicy" 
                        className="w-5 h-5"/>
                        <label htmlFor="spicy"> Spicy Sauce</label>
                    </div>
                </div>
                <div className=" ">
                        <input 
                        type="number" 
                        defaultValue={1} 
                        className="w-14 h-8 border border-solid"/>
                        <button className=" ml-3 h-8 bg-orange-600 text-white cursor-pointer border-none ">Add to Cart</button>
                    </div>
            </div>

        </div>
    )
}; 
export default Product;