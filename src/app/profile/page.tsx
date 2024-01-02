'use client'

import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'

import { useRouter } from 'next/navigation'

const Profile = () => {

  const router = useRouter();
  // const [data, setData] = useState("no thing");
  const [data, setData] = useState();
  const logout = async () => {
    try {
      await axios.get('/api/users/logout')
      toast.success("Logout Successful")
      router.push('/login')
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  }

  const getUserDetails = async () => {
    const res = await axios.get('/api/users/me')
    console.log(res.data.data._id);
    console.log(res.data.data);


    // setData(res.data.data._id)
    setData(res.data.data)

  }

  // useEffect(() => {
  //   getUserDetails
  // }, []);


  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2' >

      <div className="flex flex-col items-center justify-center h-auto w-80 bg-lime-500 border-2 rounded-lg border-lime-900 my-10 py-10">

        {data && <div className='flex flex-col items-start justify-center '>
          <h4>  <span className='text-black font-bold	' > usernmae:</span>  {(data as any)?.username}  </h4>
          <h4>  <span className='text-black font-bold	' > userId:</span>  {(data as any)?._id}  </h4>
          <h4>  <span className='text-black font-bold	' > email:</span>  {(data as any)?.email}  </h4>

        </div>}


        <hr />
        <p>Profile page</p>
        <h2 className=' rounded bg-green-400' >
          {

            //   data==="no thing"?"No Thing":
            // <Link href={`/profile/${data}`}>{data}</Link>

            // data &&
            // <Link href={`/profile/${data}`}>{data}</Link>

          }

        </h2>
        <hr />
        <button
          onClick={logout}
          className=' mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Logout</button>

        <button
          onClick={getUserDetails}
          className=' mt-4 bg-green-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>GetUser Data</button>
      </div>

    </div>
  )
}

export default Profile