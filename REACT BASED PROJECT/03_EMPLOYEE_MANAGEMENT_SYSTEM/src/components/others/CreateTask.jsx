import React from 'react'

const CreateTask = () => {

  function handleSubmit(e) {
    e.preventDefault();
    console.log("form submitted")
  }



  return (
    <div className='w-full bg-white/5 mt-10 rounded-md'>
      <form onSubmit={(e) => handleSubmit(e)} className='flex w-full  justify-between px-10 py-5 '>

        <div className='w-[50%]'>
          <h2 className='text-gray-200 font-medium'>Task Title</h2>
          <input className='outline-none border w-[90%] px-2 py-1 mt-1 mb-3 rounded-md text-white' type="text" placeholder='Make a UI design' />
          <h2 className='text-gray-200 font-medium'>Date</h2>
          <input className='outline-none border w-[90%] px-2 py-1 mt-1 mb-3 rounded-md text-white' type="text" placeholder='Make a UI design' type="data" placeholder='dd/mm/yyyy' />
          <h2 className='text-gray-200 font-medium'>Assign to</h2>
          <input className='outline-none border w-[90%] px-2 py-1 mt-1 mb-3 rounded-md text-white' type="text" placeholder='Make a UI design' type="text" placeholder='employee name' />
          <h2 className='text-gray-200 font-medium'>Category</h2>
          <input className='outline-none border w-[90%] px-2 py-1 mt-1 mb-3 rounded-md text-white' type="text" placeholder='Make a UI design' type="text" placeholder='design, dev, etc' />
        </div>

        <div className='w-[40%] flex flex-col'>
          <h2 className='text-gray-200 font-medium'>Description</h2>
          <textarea className='outline-none border px-2 py-1 mt-1 mb-3 rounded-md text-white' type="text" placeholder='Make a UI design' name="" id="" cols="30" rows="7"></textarea>
          <button className='px-3 py-3 mt-2 bg-emerald-500 font-semibold rounded-xl hover:bg-emerald-600 active:scale-99'>Create Task</button>
        </div>

      </form>

    </div>
  )
}

export default CreateTask
