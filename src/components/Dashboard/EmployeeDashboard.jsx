import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'

import TAskList from '../TaskList/TaskList'

function EmployeeDashboard({data}) {
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
        <Header changeuser={data} data={data}/>
        <TaskListNumbers data={data}/>
        <TAskList data={data}/>
    </div>
    
  )
}

export default EmployeeDashboard