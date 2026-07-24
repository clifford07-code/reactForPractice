import React, { useState } from 'react'

const Login = ({handleLogin} ) => {

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const submithandler=(e)=>{
        e.preventDefault()  
        console.log("email",email)
        console.log(password)
        handleLogin(email,password)

        setemail("")
        setpassword("")
    }
  return (
    <div className='bg-black h-screen flex justify-center items-center  ' >
            <div className='text-white border-2 p-20 rounded-2xl border-green-300'> 
                 <form action="" className='flex  flex-col gap-5 items-center' 
                    onSubmit={(e)=>{
                        submithandler(e)
                    }}
                 >
                      <input type="email" required  placeholder='Enter the email' className='p-3 w-60 rounded-3xl  border-2 border-green-300'
                      value={email}
                     onChange={(e)=>{
                        setemail(e.target.value)
                      }}
                      />
                       <input type="password" required name="pass" id="pass" placeholder='Enter the Password' className='p-3 rounded-3xl w-60 border-2 border-green-300'
                       value={password}
                       onChange={(e)=>{
                           setpassword(e.target.value)
                       }}
                       />
                    <button className='bg-green-300 p-3 rounded-2xl w-25 '>Log in</button>
                 </form>
            </div>
    </div>
  )
}

export default Login