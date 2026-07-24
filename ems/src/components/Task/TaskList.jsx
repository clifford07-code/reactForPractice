import React from 'react'

const TaskList = () => {
  return (
    <div className='flex flex-wrap shrink-0  my-10 gap-8'>
        <div className='bg-yellow-400 h-85 w-85 p-3 rounded-2xl'>
            <div className='flex justify-between '>
                <h3 className='bg-red-500 p-2'>High</h3>
                <h4>20 feb2024</h4>
            </div>
            <div className='pt-4'>
                <h1 className='font-bold text-2xl'>Make a Youtube Video</h1>
                <p className='text-sm pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore fugiat quae magnam ab odit ipsa!</p>
            </div>
        </div>
        <div className='bg-blue-400 h-85 w-85 p-3 rounded-2xl'>
            <div className='flex justify-between '>
                <h3 className='bg-red-500 p-2'>High</h3>
                <h4>20 feb2024</h4>
            </div>
            <div className='pt-4'>
                <h1 className='font-bold text-2xl'>Make a Youtube Video</h1>
                <p className='text-sm pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore fugiat quae magnam ab odit ipsa!</p>
            </div>
        </div>
       <div className='bg-red-400 h-85 w-85 p-3 rounded-2xl'>
            <div className='flex justify-between '>
                <h3 className='bg-red-500 p-2'>High</h3>
                <h4>20 feb2024</h4>
            </div>
            <div className='pt-4'>
                <h1 className='font-bold text-2xl'>Make a Youtube Video</h1>
                <p className='text-sm pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore fugiat quae magnam ab odit ipsa!</p>
            </div>
        </div>
          <div className='bg-green-400 h-85 w-85 p-3 rounded-2xl'>
            <div className='flex justify-between '>
                <h3 className='bg-red-500 p-2'>High</h3>
                <h4>20 feb2024</h4>
            </div>
            <div className='pt-4'>
                <h1 className='font-bold text-2xl'>Make a Youtube Video</h1>
                <p className='text-sm pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore fugiat quae magnam ab odit ipsa!</p>
            </div>
        </div>
    </div>
  )
}

export default TaskList