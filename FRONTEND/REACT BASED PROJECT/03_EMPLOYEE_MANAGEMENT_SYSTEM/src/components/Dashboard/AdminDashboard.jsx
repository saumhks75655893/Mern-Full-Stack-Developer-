import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDashboard = ({ data, changeUser }) => {
  // console.log(data)
  return (
    <div className='w-full px-5 py-5'>
      <Header changeUser={changeUser} data={data} />
      <CreateTask />
      <AllTask />
    </div>
  )
}

export default AdminDashboard

