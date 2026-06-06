import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='mt-5 overflow-x-auto gap-5 flex flex-nowrap h-[55%] w-full  py-5'>
      <div className='w-[300px] bg-emerald-600 h-full rounded-xl shrink-0 p-4 transform transition hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none'>
        <div className='flex items-center justify-between'>
          <h1 className='bg-red-500 px-3 py-1 rounded-xl text-sm font-medium'>High</h1>
          <h2 className='text-sm font-extralight'>20 feb 2026</h2>
        </div>
        <h2 className='font-bold text-2xl mt-5 text-black/60'>Make a Youtube video</h2>
        <p className='text-sm mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore quos nesciunt voluptates voluptas? Possimus, veniam?</p>
      </div>
      <div className='w-[300px] bg-yellow-600 h-full rounded-xl shrink-0 p-4  transform transition hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none'>
        <div className='flex items-center justify-between'>
          <h1 className='bg-red-500 px-3 py-1 rounded-xl text-sm font-medium'>High</h1>
          <h2 className='text-sm font-extralight'>20 feb 2026</h2>
        </div>
        <h2 className='font-bold text-2xl mt-5 text-black/60'>Make a Youtube video</h2>
        <p className='text-sm mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore quos nesciunt voluptates voluptas? Possimus, veniam?</p>
      </div>
      <div className='w-[300px] bg-blue-600 h-full rounded-xl shrink-0 p-4  transform transition hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none'>
        <div className='flex items-center justify-between'>
          <h1 className='bg-red-500 px-3 py-1 rounded-xl text-sm font-medium'>High</h1>
          <h2 className='text-sm font-extralight'>20 feb 2026</h2>
        </div>
        <h2 className='font-bold text-2xl mt-5 text-black/60'>Make a Youtube video</h2>
        <p className='text-sm mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore quos nesciunt voluptates voluptas? Possimus, veniam?</p>
      </div>
      <div className='w-[300px] bg-red-600 h-full rounded-xl shrink-0 p-4  transform transition hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none'>
        <div className='flex items-center justify-between'>
          <h1 className='bg-red-500 px-3 py-1 rounded-xl text-sm font-medium'>High</h1>
          <h2 className='text-sm font-extralight'>20 feb 2026</h2>
        </div>
        <h2 className='font-bold text-2xl mt-5 text-black/60'>Make a Youtube video</h2>
        <p className='text-sm mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore quos nesciunt voluptates voluptas? Possimus, veniam?</p>
      </div>
    </div>
  )
}

export default TaskList
