import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

  const [userData, setUserData] = useState({
    employee: null,
    admin: null
  })

  useEffect(() => {
    const data = getLocalStorage()

    if (data) {
      setUserData({
        employee: data.employee || null,
        admin: data.admin || null
      })
    }
  }, [])

  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
  