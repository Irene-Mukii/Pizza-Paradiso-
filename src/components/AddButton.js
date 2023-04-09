const AddButton = ({setClose}) => {
    return (
        <div className=" bg-orange-600 text-white p-3 m-5 w-40 rounded-md font-medium text-center cursor-pointer" onClick={()=>setClose(false)}>
            Add New Pizza
        </div>
    )
};
export default AddButton