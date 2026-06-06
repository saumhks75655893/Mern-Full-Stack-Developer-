import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDashboard = () => {
  return (
    <div className='w-full px-5 py-5'>
      <Header />
      <CreateTask />
      <AllTask />
    </div>
  )
}

export default AdminDashboard

