import React from 'react'

export const Signup = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold'>Signup</h1>
      <form className='flex flex-col gap-4'>
        <input type="text" placeholder='Username' className='border p-2 rounded' />
        <input type="password" placeholder='Password' className='border p-2 rounded' />
        <button type='submit' className='bg-blue-500 text-white p-2 rounded'>Signup</button>
      </form>
    </div>
  )
}
