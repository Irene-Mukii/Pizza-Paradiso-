import Image from "next/image";
import { useState } from "react";


    const  Featured = () => {

    const [index, setIndex] = useState(0);
    const images = [
        '/../public/images/featured.png',
        '/../public/images/featured1.png',
        
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
            <Image src='/../public/images/arrowl.png' className=" hover:cursor-pointer" fill style={{objectFit: 'contain'}} ></Image>
            </div>
            
            {/* image styles wrapper */}
                <div className="flex h-full " style={{width: '300vw', transform: `translateX(${-100*index}vw)`, transition: 'all 1.5s ease-in-out'}}>
                    {/* image1 */}
                    
                        {images.map((img, i)=> (
                            <div className=" relative w-screen h-full" key={i}>
                            <Image src={img}  fill style={{objectFit: 'contain'}} className=" rounded-md" ></Image>
                            </div>
                        ))}
                    
                </div>
            <div className=" top-0 bottom-0 m-auto absolute h-1/5 right-0" style={{width: '10%'}} onClick={()=>handleArrow('r')}>
            <Image src='/../public/images/arrowr.png' className=" hover:cursor-pointer " fill style={{objectFit: 'contain'}}/>
            </div>
        </div>
    )
};
export default Featured;