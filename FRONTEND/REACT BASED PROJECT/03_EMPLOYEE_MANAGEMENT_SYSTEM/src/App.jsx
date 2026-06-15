import React, { useContext, useEffect, useReducer, useState } from 'react'
import Login from './components/auth/Login'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {


  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)


  const [userData, setUserData] = useContext(AuthContext);

  useEffect(() => {
    setLocalStorage();
  }, [])

  useEffect(() => {

    const loggedInUser = localStorage.getItem("loggedInUser")

    if (loggedInUser) {

      const userData = JSON.parse(loggedInUser)
      // console.log(userData.data)
      setUser(userData.role);
      setLoggedInUserData(userData.data)
    }
  }, [])

  // setLocalStorage();

  function handleLogin(email, password) {

    if (userData) {
      const admin = userData?.admin?.find((e) => email === e.emailId && e.password === password);

      if (admin) {
        setUser('admin')
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin", data: admin }))
        console.log("Admin logged in");
      }


    } if (userData) {
      const employee = userData?.employees?.find((e) => email === e.emailId && e.password === password);

      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee)
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: employee }))
        console.log("User logged in");
      }

    } else {
      alert("Invalid credentials")
    }
  }
  return (
    <div className='mb-5   overflow-x-hidden'>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === 'admin' ? <AdminDashboard changeUser={setUser} data={loggedInUserData} /> : ""}
      {user === 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : ""}
    </div>
  )
}

export default App
