import PizzaCard from "./PizzaCard";

const PizzaList = ({pizzaList}) => {
    return (
        <div className="flex flex-col items-center p-5 justify-center">
            
            <h1 className=" font-bold text-2xl p-2"> THE BEST PIZZA IN TOWN</h1>
            <p className=" text-2xl w-3/4 text-gray-800">
                Lorem 
                event - compiled client and server successfully in 173 ms (571 modules)
                event - compiled successfully in 198 ms (521 modules)
                wait  - compiling...
                event - compiled successfully in 152 ms (521 modules)
                wait  - compiling...
                event - compiled successfully in 314 ms (521 modules)
            </p>
            
            <div className=" flex flex-wrap w-full">
                {pizzaList.map((pizza)=>{
                    <PizzaCard key={pizza.id} pizza={pizza}/>
                })}
                
            </div>
        </div>
    )
}

export default PizzaList;