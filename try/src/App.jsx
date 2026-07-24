import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'
import Nav from './component/nav'
import { Routes, Route } from 'react-router-dom'
import Login from './component/login'

const App = () => {
  const [product, setProduct] = useState([])
  const [islogin, setislogin] = useState(false)

  useEffect(() => {
    islogin?
  
    
  }, )
  

  useEffect(() => {
    const handleApi = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products')
        setProduct(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    handleApi()
  }, [])

  return (


    <div className="min-h-screen bg-gray-100">
      <Nav />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1 className="text-2xl font-bold text-center mb-8 mt-8">
                Fake Store Products
              </h1>

              <div className="flex flex-wrap justify-center gap-6 p-6">
                {product.map(item => (
                  <Card key={item.id} product={item} />
                ))}
              </div>
            </>
          }
        />

        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
