import React from 'react'
import Header from '../../other/Header'
import CreateTask from '../../other/CreateTask'

import AllLishtedTask from '../../other/AllLishtedTask'

const AdminDashboard = () => {
  return (
    <div className='bg-black text-gray-300 p-10 h-screen'>
        <Header/> 
        <CreateTask/>
        <AllLishtedTask/>
        
      
    </div>
  )
}

export default AdminDashboard