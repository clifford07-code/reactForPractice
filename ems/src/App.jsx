import React, { useContext,  useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/DashBoard/EmployeeDashboard'
import AdminDashboard from './components/DashBoard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'



const App = () => {
  const [user, setUser] = useState(null)
  const Authdata = useContext(AuthContext)



  

const handleLogin = (email, password) => {
  if (!Authdata) return

  email = email.trim()
  password = password.trim()

  const adminUser = Authdata.admin?.find(
    (a) => a.email === email && a.password === password
  )

  if (adminUser) {
    localStorage.setItem(
      "logedUser",
      JSON.stringify({ role: "admin" })
    )
    setUser({role:"admin"})
    return
  }

  const employeeUser = Authdata.employee?.find(
    (e) => e.email === email && e.password === password
  )

  if (employeeUser) {
    localStorage.setItem(
      "logedUser",
      JSON.stringify({ role: "employee" })
    )
    setUser({role: "employee"})
    return
  }



  alert("Invalid credentials")
}



  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}

      {user === 'admin' && <AdminDashboard />}
      {user === 'employee' && <EmployeeDashboard />}
    </>
  )
}

export default App
