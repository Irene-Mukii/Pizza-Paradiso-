import Image from "next/image";
import { useState } from "react";


    const  Featured = () => {

    const [index, setIndex] = useState(0);
    const images = [
        'https://res.cloudinary.com/dgiocioqk/image/upload/v1681038105/featured_xbkajp.png',
        'https://res.cloudinary.com/dgiocioqk/image/upload/v1681038112/featured1_tdz6gu.png',
        
    ];
    const handleArrow = (direction) => {
        direction==='l' ? setIndex( index !== 0 ? index-1 : 2) :
        setIndex(index !== 2 ? index+1 : 0)
    }
    console.log(index)
    return (
        <div className=" flex bg-orange-600 m-0 w-screen overflow-hidden h-screen p-0 
        "> 
            <div className=" top-0 bottom-0 m-auto absolute h-1/5 left-0 z-10" style={{width: '10%'}} onClick={()=>handleArrow('l')}>
            <Image src='https://res.cloudinary.com/dgiocioqk/image/upload/v1681038036/arrowl_usxtku.png' alt="arrow left image" className=" hover:cursor-pointer" fill style={{objectFit: 'contain'}} ></Image>
            </div>
            
            {/* image styles wrapper */}
                <div className="flex h-full " style={{width: '300vw', transform: `translateX(${-100*index}vw)`, transition: 'all 1.5s ease-in-out'}}>
                    {/* image1 */}
                    
                        {images.map((img, i)=> (
                            <div className=" relative w-screen h-full" key={i}>
                            <Image src={img}  fill style={{objectFit: 'contain'}} className=" rounded-md" alt="pizzas on offer" ></Image>
                            </div>
                        ))}
                    
                </div>
            <div className=" top-0 bottom-0 m-auto absolute h-1/5 right-0" style={{width: '10%'}} onClick={()=>handleArrow('r')}>
            <Image src='https://res.cloudinary.com/dgiocioqk/image/upload/v1681038048/arrowr_g0id1p.png' className=" hover:cursor-pointer " alt="arrow right" fill style={{objectFit: 'contain'}}/>
            </div>
        </div>
    )
};
export default Featured;