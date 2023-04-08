import Image from "next/image";
import Link from "next/link";

const PizzaCard = ({pizza}) => {
    return (
        <div className=" flex flex-col pt-5 pb-10 items-center w-1/4 justify-center cursor-pointer">
            <Link href={`/product/${pizza.id}`}>
                <Image src={pizza.img} width='300' height='300'/>
            </Link>
            
            <h1 className=" font-bold text-xl text-orange-600 p-2">{pizza.title}</h1>
            <span className=" text-gray-700 p-2">{pizza.prices[0]} </span>
            <p className=" text-center text-gray-900"> {pizza.desc}  </p>
        </div>
    )
};

export default PizzaCard