'use client'

import Link from 'next/link'
import React from 'react'

import { useRouter } from 'next/navigation'
import NavBar from './comp/NavBar';
import Footer from './comp/Footer';



export default function Home() {

  const router = useRouter();



  return (

    <>

    <NavBar/>
     <div className="flex items-center justify-center w-auto min-h-screen ">



<div className="flex flex-row items-start justify-center h-96 w-96 bg-lime-500 border-2 rounded-lg border-lime-900 my-10 py-10">
  
    <h1>Home Page</h1>
    {/* <div className='flex-1 w-64 ' >
    <p>this is the home page</p>
    </div>

    <div className='flex-1 w-32'>

    <button
      className=' mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded'>

        <Link href="/profile">Go To profile page</Link>
      </button>
    </div> */}

    
     </div>


 

</div>

<Footer/>

    
    </>
  )
}
