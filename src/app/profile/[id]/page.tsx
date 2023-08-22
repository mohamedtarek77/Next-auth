import React from 'react'

const UserProfile = (props:any) => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2' >
        
        <h1>Profile</h1>
        <hr/>
        <p className='text-4xl' > user Profile page
        <span className='p-2 rounded bg-orange-200 text-black' >
        {props.params.id}
        </span>
        </p>
    </div>
  )
}

export default UserProfile