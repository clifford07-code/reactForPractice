import React, { useState } from 'react'

const App = () => {

  const [n, setn] = useState(0)

  const incre =()=>{
      setn(n+1)
  }

  function dec(){
     setn(n-1)
  }
  return (
  <>
    <div className='main'>{n}

    </div>
    <button onClick={incre}>increase</button>
    <button onClick={dec}>decrease</button>
  </>
  )
}

export default App