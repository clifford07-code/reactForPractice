import React from 'react'

const CreateTask = () => {
  return (
    <div>  <form action="" className='flex gap-90 p-5 bg-[#1c1c1c] my-8 rounded-2xl'>
            <div className='w-1/2'>
                <div className='flex flex-col'>
                    <label htmlFor="name" >Task Title</label>
                    <input type="text" className='border-2 border-gray-400 text-white rounded-sm pl-2' placeholder='Enter the task' />
                </div>
                  <div className='flex flex-col mt-5'>
                     <label htmlFor="date">Date</label>
                     <input type="date" placeholder=''className='border-2  border-gray-400 text-white rounded-sm pl-2' />
                </div>
                 <div className='flex flex-col mt-5'>
                    <label htmlFor="assigneto">assigne to </label>
                     <input type="text" placeholder='Emplyee Name'className='border-2 border-gray-400 text-white rounded-sm pl-2' />
                </div>
                  <div className='flex flex-col mt-5'>
                    <label htmlFor="assigneto">assigne to </label>
                      <input type="text" placeholder='Emplyee Name' className='border-2  border-gray-400 text-white rounded-sm pl-2'/>
                </div>
               
                
                
            </div>
            <div className='w-1/2'>
                <div className='flex flex-col'>
                <label htmlFor="discription">Discription</label>
                <textarea name="dis" id="dis" rows="7" cols="30" placeholder='discription' className='border-2  border-gray-400 text-white rounded-sm pl-2'></textarea>
                </div>
                  <button className='bg-green-300 p-3 rounded-2xl w-full font-medium mt-5'>create Task</button>
            </div>
        </form>   </div>
  )
}

export default CreateTask