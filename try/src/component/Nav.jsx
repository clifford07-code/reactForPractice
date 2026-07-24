import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='bg-blue-400 py-3 px-5 flex justify-between text-white'>
        <h2 className='font-bold text-3xl '>Online shop</h2>
        <div className='flex gap-10 font-bold text-xl  '>
            <a href="">Cart</a>
            <Link to="/login">Login</Link>
            
        </div>
    </div>
  )
}

export default Nav