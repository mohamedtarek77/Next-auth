import React from 'react'

const UserProfile = (props: any) => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2' >

<div className="flex flex-col items-center justify-center h-auto w-auto bg-lime-500 border-2 rounded-lg border-lime-900 my-10 py-10">


        <h1 className='py-5'>Profile</h1>
        <hr />
        <p className='text-4xl' > user Profile Id from MongoDB
          <span className='p-2 rounded bg-orange-200 text-black' >
            {props.params.id}
          </span>
        </p>
      </div>
    </div>
  )
}

export default UserProfile