import React from 'react'
import Hero from './hero.jsx'
import Arrow from './arrow.jsx'


function left() {
    return (

        

    <div className='bg-white w-[600px] rounded-xl p-5 flex flex-col '>
        <Hero/>
        <div className="flex-1"></div>
        <Arrow/>

    </div>

    )
}

export default left