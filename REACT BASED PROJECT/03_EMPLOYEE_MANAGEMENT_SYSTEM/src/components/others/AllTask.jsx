import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const authData = useContext(AuthContext)
  const userData = authData.employees

  return (

    <>

      <h1 className='mt-5 font-bold text-5xl mb-9'>Employee Task Details</h1>
      <div id='tasklist' className='flex flex-col h-50 overflow-y-auto w-full bg-[#1C1C1C] mt-5 rounded-sm'>

        <div className='flex h-fit w-full justify-between bg-red-900 font-bold text-red-900 mb-5 py-5 px-6 sticky top-0 left-0'>
          <h2 className="w-1/5 text-white">Employee Name</h2>
          <h3 className="w-1/5 text-center text-white">New Task</h3>
          <h5 className="w-1/5 text-center  text-white">Active Task</h5>
          <h5 className="w-1/5 text-end text-white">Completed</h5>
          <h5 className="w-1/5 text-end text-white">Failed</h5>
        </div>

        <div id='tasklist' className='px-1'>

          {
            userData.map((elem, index) => {
              console.log(elem)
              return (
                <div key={index} className='flex mb-2 h-fit w-full border-2 border-emerald-900 font-bold text-red-900 px-5 py-2 rounded-sm'>
                  <h2 className="w-1/5 text-blue-300">{elem.name}</h2>
                  <h3 className="w-1/5 text-yellow-500 text-center">{elem.taskCount.newTask}</h3>
                  <h5 className="w-1/5  text-fuchsia-700 text-center">{elem.taskCount.active}</h5>
                  <h5 className="w-1/5  text-green-300  text-end pr-7">{elem.taskCount.completed}</h5>
                  <h5 className="w-1/5  text-red-600 text-end pr-5">{elem.taskCount.failed}</h5>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default AllTask
