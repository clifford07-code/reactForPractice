import React from 'react'

const Header = () => {
  return (
    <div className=' flex justify-between items-center'>
        <h2 className='text-2xl'>Hello <br /> <span className='text-3xl font-bold'>CLifford Fernandes </span > <span className='text-3xl'>👋</span></h2>
        <button className='p-2 bg-red-500'>Log Out</button>
    </div>
  )
}

export default Header