import React from 'react'

function Header() {
  return (
    <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-medium'>helow, <br/> <span className='text-3xl font-semibold'>Shaahir👋</span></h2>
        <button className='bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header