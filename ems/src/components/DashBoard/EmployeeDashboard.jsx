import React from 'react'
import Header from '../../other/Header'
import TaskListNumber from '../../other/TaskListNumber'
import TaskList from '../Task/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='bg-[#303030] text-white p-10 h-screen'>
           <Header/>
           <TaskListNumber/>
           <TaskList/>
    </div>
  )
}

export default EmployeeDashboard