import React from 'react'

const FailedTask = ({ elem }) => {
  return (
    <div className='relative w-[300px] bg-red-400 h-full rounded-xl shrink-0 p-4  transform transition hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none'>
      <div className='flex items-center justify-between'>
        <h1 className='bg-red-500 px-3 py-1 rounded-xl text-sm font-medium'>{elem.category}</h1>
        <h2 className='text-sm font-extralight'>{elem.taskDate}</h2>
      </div>
      <h2 className='font-bold text-2xl mt-5 text-black/60'>{elem.taskTitle}</h2>
      <p className='text-sm mt-3'>{elem.taskDescription}</p>

      <div className='flex px-2 py-1 mt-10 gap-2'>
        <button className='bg-red-500 px-2 py-1 rounded-sm text-sm w-full '>Task Failed </button>

      </div>
    </div>
  )
}

export default FailedTask
