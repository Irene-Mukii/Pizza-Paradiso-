import Image from "next/image";

const PizzaCard = () => {
    return (
        <div className=" flex flex-col pt-5 pb-10 items-center w-1/4 justify-center cursor-pointer">
            <Image src='/../public/images/pizza.png' width='300' height='300'/>
            <h1 className=" font-bold text-xl text-orange-600 p-2">HAWAIAN</h1>
            <span className=" text-gray-700 p-2">Ksh 1990 </span>
            <p className=" text-center text-gray-900"> Lorem LoremLoremLor emLoremLoremLorem  </p>
        </div>
    )
};

export default PizzaCard