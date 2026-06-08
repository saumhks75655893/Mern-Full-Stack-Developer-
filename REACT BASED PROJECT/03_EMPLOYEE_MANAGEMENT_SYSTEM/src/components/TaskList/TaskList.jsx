import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
  // console.log(data)
  return (
    <div id='tasklist' className='mt-5 overflow-x-auto gap-5 flex flex-nowrap h-[55%] w-full  py-5'>
      {
        data.tasks.map((elem, i) => {

          if (elem.newTask) {
            return <NewTask key={i} elem={elem} />
          }
          if (elem.active) {
            return <AcceptTask key={i} elem={elem} />
          }
          if (elem.completed) {
            return <CompleteTask key={i} elem={elem} />
          }

          if (elem.failed) {
            return <FailedTask key={i} elem={elem} />
          }


        })
      }
    </div>
  )
}


export default TaskList
