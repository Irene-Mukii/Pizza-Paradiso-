import Image from "next/image";
import axios from "axios";
import {  useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "redux/cartSlice";
//import './envConfig.ts'


const Product = ({pizza}) => {

    const [size, setSize] = useState(0);
    const [price, setPrice] = useState(pizza.prices[0]);
    const [quantity, setQuantity] = useState(1);
    const [extras, setExtras] = useState([]);

    const dispatch = useDispatch();

    const changePrice = (number) => {
        setPrice(price+number);
    };

    const handleSize = (sizeIndex)=>{
        const difference = pizza.prices[sizeIndex] - pizza.prices[size];
        setSize(sizeIndex);
        changePrice(difference)
    };

    const handleChange = (e,option)=>{
        const checked = e.target.checked;

        if(checked){
            changePrice(option.price)
            setExtras(prev=>[...prev, option])
        } else {
            changePrice(-option.price);
            setExtras(extras.filter(extra => extra.id !== option._id));
        }
    };

    const handleClick = () => {
        dispatch(addProduct({...pizza,extras,price,quantity}))
    }

    return (
        <div className="flex h-screen items-center" >
            <div className=" flex-1 h-full py-28">
                <div className=" w-4/5 h-4/5 relative">
                    <Image src={pizza.image} alt={pizza.title} fill style={{objectFit: 'contain'}}/>
                </div>
            </div>
            <div className="flex-1 py-28 ">
                <h1 className="relative text-4xl font-medium pb-3">{pizza.title}</h1>
                <span className="text-orange-600 text-2xl border-b-2 border-solid border-orange-600 font-normal relative">$ {price}</span>
                <p className="relative py-5"> {pizza.desc}</p>
                <h3 className=" pb-5 font-semibold text-slate-950 ">Choose your size</h3>
                <div className=" flex justify-between w-2/5">
                    <div className=" w-10 h-10 relative cursor-pointer"
                         onClick={()=>handleSize(0)}>
                        <Image src='https://res.cloudinary.com/dgiocioqk/image/upload/v1681038219/size_gl7c0i.png' alt="small pizza size"fill style={{objectFit: 'contain'}}/>
                        <span className="absolute -top-2 -right-5 bg-teal-700 text-white text-xs  rounded-xl px-1 ">Small</span>
                    </div>
                    <div className=" w-12 h-12 relative cursor-pointer"
                         onClick={()=>handleSize(1)}>
                        <Image src='https://res.cloudinary.com/dgiocioqk/image/upload/v1681038219/size_gl7c0i.png' alt="medium pizza size"fill style={{objectFit: 'contain'}}/>
                        <span className="absolute -top-2 -right-5 bg-teal-700 text-white text-xs  rounded-xl px-1 ">Medium</span>
                    </div>
                    <div className=" w-14 h-14 relative cursor-pointer"
                         onClick={()=>handleSize(2)}>
                        <Image src='https://res.cloudinary.com/dgiocioqk/image/upload/v1681038219/size_gl7c0i.png' alt="large pizza size"fill style={{objectFit: 'contain'}}/>
                        <span className="absolute -top-2 -right-5 bg-teal-700 text-white text-xs  rounded-xl px-1 ">Large</span>
                    </div>
                </div>
                <h3 className=" pb-5 font-semibold text-slate-950 ">Choose additional ingredients </h3>
                <div className="flex mb-8">
                    {pizza.extraOption.map((option)=>(
                        <div key={option.text} className="flex items-center mr-3 text-xs font-medium">
                        <input 
                        type="checkbox" 
                        id={option.text} 
                        name={option.text} 
                        className=" w-5 h-5"
                        onChange={(e)=>handleChange(e,option)}/>
                        <label htmlFor="double">  {option.text} </label>
                    </div>
                    ))}
                    
                    
                </div>
                <div className=" ">
                        <input 
                        type="number" 
                        defaultValue={1} 
                        className="w-14 h-8 border border-solid"
                        onChange={(e)=> setQuantity(e.target.value)}/>
                        <button 
                            className=" ml-3 h-8 bg-orange-600 text-white cursor-pointer border-none "
                            onClick={handleClick}>
                                Add to Cart</button>
                    </div>
            </div>

        </div>
    )
}; 

export const getServerSideProps = async ({params}) => {
    console.log(params)
    const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}api/products/${params.id}`);
    return {
      props: {
        pizza: res.data
      },
    };
  };
  

export default Product;