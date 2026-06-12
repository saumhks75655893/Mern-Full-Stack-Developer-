import React, { useEffect } from 'react'
import Header from '../others/Header'
import TaskListAnalytics from '../others/TaskListAnalytics'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({ data, changeUser }) => {

  return (
    <div>
      <div className=' p-5 bg-[#1C1C1C] h-screen'>
        <Header changeUser={changeUser} data={data} />
        <TaskListAnalytics data={data} />
        <TaskList data={data} />
      </div>
    </div>
  )
}

export default EmployeeDashboard
