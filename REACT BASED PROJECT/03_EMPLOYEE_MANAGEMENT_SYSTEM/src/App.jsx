import React, { useContext, useEffect, useState } from 'react'
import Login from './components/auth/Login'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  console.log(user)


  const authData = useContext(AuthContext);

  useEffect(() => {
    setLocalStorage();
  }, [])

  useEffect(() => {

    if (authData) {

      const loggedInUser = localStorage.getItem('loggedInUser');
      if (loggedInUser) {
        setUser(loggedInUser.role);
      }
    }

  }, [authData])

  setLocalStorage();

  function handleLogin(email, password) {

    if (email === "hk@gmail.com" && password === "123") {
      setUser('admin')
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }))
      console.log("Admin logged in");
    } else if (authData && authData?.employees?.find((e) => email === e.emailId && e.password === password)) {
      setUser('employee');
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee" }))
      console.log("User logged in");
    } else {
      alert("Envalid credentials")
    }
  }
  return (
    <div className='mb-5  '>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === 'admin' ? <AdminDashboard /> : ""}
      {user === 'employee' ? <EmployeeDashboard /> : ""}
    </div>
  )
}

export default App
