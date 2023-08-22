  "use client"

  import axios from "axios"

  import Link from "next/link"

  import React,{useState,useEffect} from "react"

  import { useRouter } from "next/navigation"


  export default function ResetPasswordPage (){

    const router = useRouter()
    const [token, setToken] = useState("");
    const [password, setPassword] = useState('');
    const [confiremedPassword, setConfiremedPassword] = useState('');
    const [buttonDisabled, setButtonDisabled] = useState!(false);

const [loading, setLoading] = useState!(false);

    const [error, setError] = useState(false);


    const ResetUserPassword = async ()=>{

        
            try {

                setLoading(true);
                await axios.post('/api/users/Resetpassword',{token,password});
    
    
                router.push('/login')
            } catch (error:any) {
                setError(true);
            console.log(error.response.data);
            } finally {
                setLoading(false);
            }
     
      
    }

    useEffect(() => {
        const urlToken = window.location.search.split("=")[1];
        setToken(urlToken || "");
    }, []);

    useEffect(() => {
        if(password !== confiremedPassword){
            setButtonDisabled(true);
        }else {
            setButtonDisabled(false);
        }
    }, [password,confiremedPassword]);

 return(
<div className="flex flex-col items-center justify-center min-h-screen py-2" >

 <h2>{loading ? "progress" : ""}</h2>
<input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword( e.target.value)}
            placeholder="password"
            />
<input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="password"
            type="password"
            value={confiremedPassword}
            onChange={(e) => setConfiremedPassword( e.target.value)}
            placeholder="password"
            />

            {password !== confiremedPassword && <p className="bg-red-500" >you must use the same password</p>}
            <button
            onClick={ResetUserPassword}
            disabled={buttonDisabled}
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Reset your password</button>
</div> )
  }