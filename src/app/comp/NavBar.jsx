
'use client'

import React from 'react'


import Link from 'next/link'

import { useRouter } from 'next/navigation'

const NavBar = () => {
    const router = useRouter();

    return (
        <nav className='bg-lime-400'>

            <button>

                <Link href="/profile"> profile </Link>

            </button>

        </nav>
    )
}

export default NavBar