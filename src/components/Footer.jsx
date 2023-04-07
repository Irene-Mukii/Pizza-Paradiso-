import Image from "next/image";

const Footer = () => {
    return (
        <div className=" bg-gray-950 flex " style={{height: 'calc(100vh - 100px)'}}>
            <div className=" basis-1/3 relative">
                <Image fill src='/../public/images/bg.png'/>
            </div>
            <div className=" basis-2/3 relative flex p-12 justify-between">
                <div className=" flex-1 pl-0 pr-5 text-3xl text-gray-500">
                    OH YES WE DID! A PERFECT SLICE OF HEAVEN.
                </div>
                <div className=" flex-1 pl-0 pr-5">
                    <h1 className=" text-xl text-orange-400">FIND OUR RESTAURANTS</h1>
                    <p className=" text-gray-300 p-2">Nile drive
                        <br/> Nairobi, 1234
                        <br/> +254 707 123456
                    </p>
                    <p className=" text-gray-300 p-2">Nile drive
                        <br/> Nairobi, 1234
                        <br/> +254 707 123456
                    </p>
                    <p className=" text-gray-300 p-2">Nile drive
                        <br/> Nairobi, 1234
                        <br/> +254 707 123456
                    </p>
                </div>
                <div className="flex-1 pl-0 pr-5"> 
                <h1 className=" text-xl text-orange-400">WORKING HOURS</h1>
                <p className=" text-gray-300 p-2">MON - FRI
                        <br/> 0900 - 2200
                </p>
                <p className=" text-gray-300 p-2">SAT - SUN
                        <br/> 1200 - 2400
                </p>
            </div>
            </div>
            
        </div>
    )
};

export default Footer;