import React, { useState } from 'react'

const Login = () => {
    const [email, setemail] = useState('')
    const [pass, setpass] = useState('')

    const handleform=(e)=>{
        e.preventDefault()
        console.log(email)
        console.log(pass)
        setemail('')
        setpass('')
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-lg">
        
        <h2 className="text-2xl font-bold text-center mb-6">
          Login
        </h2>

        <form className="space-y-4" onSubmit={(e)=>{
            console.log(e.target.value)
            handleform(e);
          }}>
          
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
            value={email}
            onChange={(e)=>{
                
                setemail(e.target.value)
            }}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
             value={pass}
            onChange={(e)=>{
                
                setpass(e.target.value)
            }}
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Button */}
          <button

          
            type="submit"
            className="w-full bg-blue-400 text-white py-2 rounded-xl hover:bg-gray-800 transition"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  )
}

export default Login
