import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

const Login = ()=>{
    const [username, setUsername]= useState(null)
    const [password, setPassword]= useState(null)
    const [error, setError]= useState(false)
    const router = useRouter();

    const handleClick = async () => {
        try{
            console.log({username,password}, process.env.NEXT_URL +'api/login')

            await axios.post(process.env.NEXT_URL +'api/login', { username, password})
            router.push('/admin')
        }catch(err){
            setError(true)
            console.log(err)
        }
    }

    return (
        <div className=" h-screen flex items-center justify-center">
            <div className="flex flex-col">
                <h1 className=" font-bold text-2xl text-center p-2">Admin Dashboard</h1>
                <input 
                    placeholder="username"
                    className=" h-10 mb-5 px-3 border rounded-md"
                    onChange={(e)=>setUsername(e.target.value)}/>
                <input 
                    placeholder="password"
                    type="password"
                    className=" h-10 mb-5 px-3 border rounded-md"
                    onChange={(e)=>setPassword(e.target.value)}/>
                <button onClick={handleClick}
                className=" h-10 mb-5 bg-teal-700 text-white font-semibold cursor-pointer">
                    Sign In
                </button>
                {error && <span className=" text-red-800 text-xl">Wrong Cridentials!</span>}
            </div>
        </div>
    )
};

export default Login;