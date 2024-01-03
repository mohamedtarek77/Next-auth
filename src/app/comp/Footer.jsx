import React from 'react'

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (

    

            <div className='bg-lime-900 flex flex-row items-center justify-center w-auto' >


                <p className='text-white font-bold'>Copyright © {currentYear} AlTarek. All rights reserved.</p>
            </div>

        

    )
}

export default Footer