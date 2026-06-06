import React from 'react'
import Header from '../others/Header'
import TaskListAnalytics from '../others/TaskListAnalytics'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div>
      <div className=' p-5 bg-[#1C1C1C] h-screen'>
        <Header />
        <TaskListAnalytics />
        <TaskList />
      </div>
    </div>
  )
}

export default EmployeeDashboard
