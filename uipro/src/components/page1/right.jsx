import React from 'react'
import Card from './card.jsx'
function right( props) {
  console.log(props.user)
  return (
    <div className='bg-gray-50 overflow-x-auto scrollbar-hide w-full p-6 flex flex-nowrap gap-2'>
  { props.user.map((ele,idx) => {
  return <Card id={idx} img={ele.img}  tag={ele.tag} color={ele.color} intro={ele.intro}/>
})}


    </div>
  )
}

export default right