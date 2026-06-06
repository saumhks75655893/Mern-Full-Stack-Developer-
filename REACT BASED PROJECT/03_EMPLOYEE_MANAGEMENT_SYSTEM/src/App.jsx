import React, { useEffect } from 'react'
import Login from './components/auth/Login'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'

const App = () => {

  useEffect(() => {
    // setLocalStorage();
    getLocalStorage();
  }, [])

  return (
    <div className='mb-5  '>
      {/* <Login /> */}
      {/* <EmployeeDashboard /> */}
      <AdminDashboard />
    </div>
  )
}

export default App
