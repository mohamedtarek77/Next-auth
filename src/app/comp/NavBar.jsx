
'use client'

import React from 'react'


import Link from 'next/link'

import { useRouter } from 'next/navigation'

const NavBar = () => {
    const router = useRouter();

    return (
        <nav className='bg-lime-900'>

            <ul className='flex flex-row items-center justify-center w-auto'>

                <li className='px-4'> <button className='text-white'><Link href="/profile"> profile </Link></button> </li>
                <li className='px-4'> <button className='text-white'><Link href="/"> Home </Link></button> </li>

            </ul>



        </nav>
    )
}

export default NavBar