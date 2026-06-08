import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDashboard = ({ data }) => {
  // console.log(data)
  return (
    <div className='w-full px-5 py-5'>
      <Header data={data} />
      <CreateTask />
      <AllTask />
    </div>
  )
}

export default AdminDashboard

