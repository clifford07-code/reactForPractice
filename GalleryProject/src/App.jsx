import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  const [data, setData] = useState([])
  const [index, setindex] = useState(1)

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=10`
      )
      console.log(response.data)
      setData(response.data)
     
    }

    getData()
  }, [index]) // runs once on page load

  return (
    <div className='bg-black min-h-screen w-full p-5'>
      
      <div className='mt-4 flex flex-wrap gap-3'>
        {data.map((ele) => (
          <div key={ele.id} className='p-1'>
          
            <a href={ele.url}>  <img
              src={ele.download_url}
              alt={ele.author}
              className='h-40 w-40 object-cover rounded-2xl'
            /></a>
            <h2 className='text-white m-3'>{ele.author}</h2>
          </div>
        ))}
      </div>
      <div className='m-3 flex gap-3 justify-center '>
          <button className='p-2 w-25 rounded-2xl bg-amber-300'
          onClick={()=>{
               if (index>1) {
              setindex(index - 1)
            }
          }}>prev</button>
          <h2 className='p-2  rounded-2xl  text-white'>page {index}</h2>
          <button className='p-2 w-25 rounded-2xl text-white bg-amber-300' 
              onClick={()=>{
              
              setindex(index+1)
              }}
          >Next</button>
      </div>
     

    </div>
  
)}

export default App
