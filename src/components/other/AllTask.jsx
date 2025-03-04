import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const authData = useContext(AuthContext)
  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5 h-48 overflow-auto'>
      <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between'>
        <h2>Employee Name</h2>
        <h3>New Task</h3>
        <h5>Active Task</h5>
        <h5>Completed</h5>
        <h5>Failed</h5>
      </div>
      {authData.employees.map(function(elem){
        return <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between'>
        <h2>Employee Name</h2>
        <h3>New Task</h3>
        <h5>Active Task</h5>
        <h5>Completed</h5>
        <h5>Failed</h5>
      </div>
      })}
    </div>
  )
}

export default AllTask
