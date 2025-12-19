import React from 'react'

import { Bookmark } from "lucide-react";

const card = (prop) => {
  return (
    <div className='card'>
        <div className="top">
            <img src={prop.logo} alt="" />
            <button>save
              <span className='icon-bg '> <Bookmark color="#000000" /></span>
             
            </button>
        </div>
        <div className="center">
        <h3>{prop.name} <span>{prop.date}</span></h3>
        <h2>{prop.post}</h2>
        <div className='tag'>
          <h4>{prop.tag1}</h4>
          <h4>{prop.tag2}</h4>
        </div>
        </div>
        <div className="bottom">
      
          <div>
            <h3>{prop.pay}</h3>
            <p>{prop.location}</p>
          </div>
          <button>apply</button>
        
        </div>
        
    </div>
  )
}

export default card