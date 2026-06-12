import React from 'react'

const NewTask = ({ elem }) => {
  return (
    <div className='w-[300px] bg-blue-500 h-full rounded-xl shrink-0 p-4  transform transition hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none'>
      <div className='flex items-center justify-between'>
        <h1 className='bg-red-500 px-3 py-1 rounded-xl text-sm font-medium'>{elem.category}</h1>
        <h2 className='text-sm font-extralight'>{elem.taskDate}</h2>
      </div>
      <h2 className='font-bold text-2xl mt-5 text-black/60'>{elem.taskTitle}</h2>
      <p className='text-sm mt-3'>{elem.taskDescription}</p>

      <button className='bg-green-800 px-2 py-1 rounded-sm mt-10 w-full'>New Task </button>
    </div>
  )
}

export default NewTask
