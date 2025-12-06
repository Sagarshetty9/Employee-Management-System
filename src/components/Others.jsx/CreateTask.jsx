import React from 'react'
import { useState } from 'react'

const CreateTask = () => {

   const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    const [task, setTask] = useState({})

  const submitHandler = (e) =>{ //start of eventBtn
      e.preventDefault()
      const newTask = {taskTitle, taskDescription, taskDate, category, active:false, newTask: true, failed: false, completed:false}
      setTask(newTask)

      const data = JSON.parse(localStorage.getItem("employees"))

      data.forEach(element => {
          if (asignTo == element.firstName) {
            element.tasks.push(newTask)
            console.log(element)
          }
      });

        setTaskTitle('')
        setTaskDescription('')
        setTaskDate('')
        setAsignTo('')
        setCategory('')
  }//end of eventBtn

   

  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded '>
        <form 
        onSubmit={(e) => {submitHandler(e)}} 
        className='flex flex-wrap w-full items-start justify-between '>

            <div className='w-1/2'>
                <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                <input 
                value={taskTitle}
                onChange={(e) => 
                  setTaskTitle(e.target.value)
                }
                type="text" 
                placeholder='Make a UI design' 
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4'
                />
                </div>

                <div>
                <h3>Date</h3>
                <input type="date" 
                 value={taskDate}
                 onChange={(e) => 
                  setTaskDate(e.target.value)
                }
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4'
                />
               </div>
            
               <div>
                <h3>Assign To</h3>
                <input 
                 value={asignTo}
                onChange={(e) => 
                  setAsignTo(e.target.value)
                }
                type="text" 
                placeholder='Employee Name' 
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4'
                />
               </div>
                
                <div>
                <h3>Catergory</h3>
                <input 
                 value={category}
                 onChange={(e) => 
                  setCategory(e.target.value)
                }
                type="text" 
                placeholder='Design, dev, ETC'
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4'
                 />
                </div>

            </div>
                
                <div className='w-2/5 flex flex-col items-start'>
                <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                <textarea 
                 value={taskDescription}
                onChange={(e) => 
                  setTaskDescription(e.target.value)
                }
                name="" 
                id=""
                className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400'></textarea>
                <button className='bg bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Assign Task</button>
                </div>
        </form>



    </div>
  )
}

export default CreateTask
