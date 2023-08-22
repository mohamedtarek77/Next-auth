'use client'

import axios from 'axios'
import Link from 'next/link'
import React,{useState} from 'react'
import { toast } from 'react-hot-toast'

import { useRouter } from 'next/navigation'

const Profile = () => {

  const router = useRouter();
  const [data, setData] = useState("no thing");
  const logout =  async ()=>{
      try {
       await axios.get('/api/users/logout')
       toast.success("Logout Successful")
       router.push('/login')
      } catch (error: any) {
        console.log(error.message);
        toast.error(error.message);
      }
  }

const getUserDetails = async ()=>{
  const res = await axios.get('/api/users/me')
  console.log(res.data.data._id);

  setData(res.data.data._id)
}

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2' >
        
        <h1>Profile</h1>
        <hr/>
        <p>Profile page</p>
        <h2 className='p-3 rounded bg-green-400' >{data==="no thing"?"No Thing":
        <Link href={`/profile/${data}`}>{data}</Link>
        }</h2>
        <hr/>
        <button 
        onClick={logout}
        className=' mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Logout</button>

<button 
        onClick={getUserDetails}
        className=' mt-4 bg-green-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>GetUser Data</button>

    </div>
  )
}

export default Profile