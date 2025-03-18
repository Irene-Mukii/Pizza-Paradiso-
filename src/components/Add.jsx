import { useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";
//import './envConfig.ts'

const Add = ({setClose}) => {
    const [file, setFile] = useState(null)
    const [title, setTitle] = useState(null)
    const [desc, setDesc] = useState(null)
    const [prices, setPrices] = useState([])
    const [extra, setExtra] = useState(null)
    const [extraOption, setExtraOption] = useState([])

    const handleExtraInput = (e) => {
        setExtra({...extra, [e.target.name]: e.target.value})
    }

    const handleExtra = () => {
        setExtraOption((prev)=>[...prev, extra]);
    }

    const changePrice = (e, index)=> {
        const currentPrices = prices;
        currentPrices[index] = e.target.value
        setPrices(currentPrices)
    }

    const handleCreate = async () => {
        const data = new FormData();
        data.append('file', file)
        data.append('upload_preset', 'uploads')
        try{
            const upoloadRes =await axios.post('https://api.cloudinary.com/v1_1/dgiocioqk/image/upload', data)
            console.log(upoloadRes)

            const { url } = upoloadRes.data;
            const newProduct = {
                title, desc, prices, extraOption, image:url
            }
            console.log(newProduct)

            await axios.post(process.env.NEXT_URL+'api/products', newProduct);
            setClose(true)
        }catch(err){
            console.log(err)
        }
    }
    return (
        <div className=" w-screen h-screen bg-gray-800 opacity-95  fixed top-0 p-28 items-center flex justify-center">
            <div className=" flex flex-col justify-center max-w-lg p-14 rounded-sm bg-white relative ">
                <span className=" w-8 h-8 bg-black text-white  rounded-full flex items-center justify-center cursor-pointer absolute -top-3 -right-3" onClick={()=>setClose(true)}> X
                </span>
                <h1 className=" text-xl font-bold">Add a new Pizza</h1>
                <div className='flex flex-col mb-3'>
                    <label className="mb-3 text-sm font-medium">Choose an image</label>
                    <input 
                    className=" border-b border-solid border-gray-400 outline-none"
                    type="file" 
                    onChange={(e)=>setFile(e.target.files[0])} />
                </div>
                <div className='flex flex-col mb-3'>
                    <label className="mb-3 text-sm font-medium">Title</label>
                    <input 
                    className="border-b border-solid border-gray-400 outline-none"
                    type="text" 
                    onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div className='flex flex-col mb-3'>
                    <label className="mb-3 text-sm font-medium">Description</label>
                    <textarea type="text" 
                    onChange={(e)=>setDesc(e.target.value)}/>
                </div>
                <div className='flex flex-col mb-3 '>
                    <label className="mb-3 text-sm font-medium">Prices</label>
                    <div className="flex justify-between">
                    <input 
                    className="border-b border-solid border-gray-400 outline-none w-1/4"
                    type="number" 
                    placeholder="small"
                    onChange={(e)=>changePrice(e,0)}/>
                    <input 
                    className="border-b border-solid border-gray-400 outline-none w-1/4"
                    type="number" 
                    placeholder="medium"
                    onChange={(e)=>changePrice(e,1)}/>
                    <input 
                    className="border-b border-solid border-gray-400 outline-none w-1/4"
                    type="number" 
                    placeholder="large"
                    onChange={(e)=>changePrice(e,2)}/>
                    </div>
                </div>
                <div className="flex flex-col mb-3">
                    <label className='mb-3 text-sm font-medium'> Extra </label>
                   
                    <div className="flex justify-between">
                    <input 
                    className="border-b border-solid border-gray-400 outline-none w-1/4"
                    type="text" 
                    placeholder="item" 
                    name="text"
                    onChange={handleExtraInput}/>
                     <input 
                     className="border-b border-solid border-gray-400 outline-none w-1/4"
                     type="number" 
                     placeholder="price" 
                     name="price"
                    onChange={handleExtraInput}/>
                    <button className="w-1/4"
                    onClick={handleExtra}>
                        Add
                    </button>
                    </div>

                    <div className=" m-3 flex flex-wrap">
                        {extraOption !== null && extraOption.map(option => (
                            <span className=" p-1 text-sm border border-orange-700 bg-white border-solid text-orange-700 mr-1 rounded-md cursor-pointer " key={option.text}>
                                {option.text}
                            </span>
                        ))}
                    </div>
                </div>
                <button 
                className="bg-teal-600 text-white p-3 m-5 w-40 rounded-md font-medium text-center cursor-pointer"
                onClick={()=> handleCreate()}>
                    Create
                </button>
            </div>
            
        </div>
    )
}

export default Add;