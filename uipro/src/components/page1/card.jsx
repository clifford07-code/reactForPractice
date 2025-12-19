import React from 'react'
import { ArrowRight } from "lucide-react";

function card(props) {
  console.log(props.tag)
  return (
    <div className='w-80 h-full overflow-hidden relative rounded-4xl shrink-0'>
        <img className='h-full w-full object-cover' src={props.img} alt="" />
        <div className='h-full w-full absolute top-0 left-0 p-8 flex flex-col justify-between'>
          <h2 className='bg-white h-10 w-10  font-bold text-2xl rounded-full text-center '>{props.id+1}</h2>
          <div className='flex flex-col gap-5'>
            <p className='text-gray-100 text-lg'>{props.intro}</p>
            <div className='flex justify-between mt-4'>
               <button style={{background:props.color}}className='  rounded-3xl font-medium py-1 px-7 text-white'>{props.tag}</button>
               <button style={{background:props.color}} className=' p-2 rounded-3xl font-medium text-white  mt-2'><ArrowRight /></button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default card