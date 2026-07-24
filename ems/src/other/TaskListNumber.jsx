import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='flex gap-8'>
        <div className='bg-red-400 h-40 w-85 mt-10 rounded-2xl p-10 font-bold '>
            <h2 className='text-3xl'>0</h2>
            <h3 className='text-2xl'>New Task</h3>
        </div>
         <div className='bg-green-400 h-40 w-85 mt-10 rounded-2xl p-10 font-bold '>
            <h2 className='text-3xl'>0</h2>
            <h3 className='text-2xl'>New Task</h3>
        </div>
         <div className='bg-blue-400 h-40 w-85 mt-10 rounded-2xl p-10 font-bold  '>
            <h2 className='text-3xl'>0</h2>
            <h3 className='text-2xl'>New Task</h3>
        </div>
         <div className='bg-yellow-400 h-40 w-85 mt-10 rounded-2xl p-10 font-bold'>
           <h2 className='text-3xl'>0</h2>
            <h3 className='text-2xl'>New Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumber