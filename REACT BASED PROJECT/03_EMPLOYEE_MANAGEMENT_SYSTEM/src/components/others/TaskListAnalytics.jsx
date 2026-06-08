import React from 'react'

const TaskListAnalytics = ({ data }) => {
  return (
    <div className='flex screen items-center justify-center gap-5 mt-10 max-[830px]:flex-wrap '>
      <div className='flex flex-col justify-around gap-1 bg-blue-500 w-[45%] px-8 py-6 rounded-xl transform transition hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none'>
        <h1 className='text-3xl font-bold'>{data.taskCount.newTask}</h1>
        <h2 className='text-xl font-semibold'>New Task</h2>
      </div>
      <div className='flex flex-col justify-around gap-1 text-black bg-green-500 w-[45%] px-8 py-6 rounded-xl transform transition hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none'>
        <h1 className='text-3xl font-bold'>{data.taskCount.completed}</h1>
        <h2 className='text-xl font-semibold'>Completed</h2>
      </div>
      <div className='flex flex-col justify-around gap-1 text-black bg-yellow-500 w-[45%] px-8 py-6 rounded-xl transform transition hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none'>
        <h1 className='text-3xl font-bold'>{data.taskCount.active}</h1>
        <h2 className='text-xl font-semibold'>Accepted</h2>
      </div>
      <div className='flex flex-col justify-around gap-1 bg-red-500 w-[45%] px-8 py-6 rounded-xl transform transition hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none'>
        <h1 className='text-3xl font-bold'>{data.taskCount.failed}</h1>
        <h2 className='text-xl font-semibold'>Failed</h2>
      </div>
    </div>
  )
}

export default TaskListAnalytics
