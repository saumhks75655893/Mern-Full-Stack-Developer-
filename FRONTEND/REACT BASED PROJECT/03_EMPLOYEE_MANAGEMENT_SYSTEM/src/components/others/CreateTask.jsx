import React, { createContext, useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';
import employees from '../../utils/LocalStorage';

const CreateTask = () => {


  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("")
  const [taskDate, setTaskDate] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("")


  const [newTask, setNewTask] = useState({})
  const data = userData.employees

  function handleSubmit(e) {
    e.preventDefault();

    setNewTask({ taskTitle, taskDate, taskDescription, category, newTask: true, active: false, failed: true, completed: false });

    const data = userData.employees

    data.forEach((elem) => {
      // console.log(elem)
      if (elem.name.toLowerCase().includes(assignTo.toLowerCase())) {
        elem.tasks.push(newTask);
        elem.taskCount.newTask += 1;
      }
    });

    setUserData({ employees: data })


    console.log(data)

    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
  }

  useEffect(() => {
    console.log(data);
  }, [])


  return (
    <div className='w-full bg-white/5 mt-10 rounded-md'>
      <form onSubmit={(e) => handleSubmit(e)} className='flex w-full  justify-between px-10 py-5 '>

        <div className='w-[50%]'>
          <h2 className='text-gray-200 font-medium'>Task Title</h2>
          <input value={taskTitle} className='outline-none border w-[90%] px-2 py-1 mt-1 mb-3 rounded-md text-white' type="text" placeholder='Make a UI design' onChange={(e) => setTaskTitle(e.target.value)} />
          <h2 className='text-gray-200 font-medium'>Date</h2>
          <input value={taskDate} className='outline-none border w-[90%] px-2 py-1 mt-1 mb-3 rounded-md text-white' type="text" placeholder='Make a UI design' type="date" placeholder='dd/mm/yyyy' onChange={(e) => setTaskDate(e.target.value)} />
          <h2 className='text-gray-200 font-medium'>Assign to</h2>
          <input value={assignTo} className='outline-none border w-[90%] px-2 py-1 mt-1 mb-3 rounded-md text-white' type="text" placeholder='Make a UI design' type="text" placeholder='employee name' onChange={(e) => setAssignTo(e.target.value)} />
          <h2 className='text-gray-200 font-medium'>Category</h2>
          <input value={category} className='outline-none border w-[90%] px-2 py-1 mt-1 mb-3 rounded-md text-white' type="text" placeholder='Make a UI design' type="text" placeholder='design, dev, etc' onChange={(e) => setCategory(e.target.value)} />
        </div>

        <div className='w-[40%] flex flex-col'>
          <h2 className='text-gray-200 font-medium'>Description</h2>
          <textarea value={taskDescription} className='outline-none border px-2 py-1 mt-1 mb-3 rounded-md text-white' type="text" placeholder='Make a UI design' name="" id="" cols="30" rows="7" onChange={(e) => setTaskDescription(e.target.value)}></textarea>
          <button className='px-3 py-3 mt-2 bg-emerald-500 font-semibold rounded-xl hover:bg-emerald-600 active:scale-99'>Create Task</button>
        </div>

      </form>

    </div>
  )
}

export default CreateTask
