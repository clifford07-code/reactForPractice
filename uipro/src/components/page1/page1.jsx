import React from 'react'
import Left from './left.jsx'
import Right from './right.jsx'
import Navbar from './navbar.jsx'

const page1 = (props) => {

  return (
    <div className='bg-white h-screen w-full  p-7 gap-2' >
        <Navbar />
      <div className=' flex  gap-2 w-full  h-155'>
           <Left />
      <Right user={props.user}/>
      </div>
     
    </div>
  )
}

export default page1