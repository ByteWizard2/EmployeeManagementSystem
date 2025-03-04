import React, { useState } from 'react'

function Header({data}) {

  // const [userName, setUserName] = useState('')

  // if(!data){
  //   setUserName('Admin')
  // }else{
  //   setUserName(data.firstName)
  // }

  const logOutuser = ()=>{
    localStorage.setItem('loggedInUser','')
    window.location.reload() 
  }
  return (
    <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-medium'>helow, <br/> <span className='text-3xl font-semibold'>userName 👋</span></h2>
        <button onClick={logOutuser} className='bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header