import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const Tasklist = ({data}) => {
  return (
    <div id='tasklist' className='h-[50%] w[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16'>
      
      {data.tasks.map((elem, index)=>{
          if(elem.active){
            return <AcceptTask key = {index} data = {elem}/>
          }
          if(elem.newTask){
            return <NewTask key={index} data = {elem}/>
          }
           if(elem.failed){
            return <FailedTask key={index} data = {elem}/>
          }
           if(elem.completed){
            return <CompleteTask key={index} data = {elem}/>
          }
      })}

    </div>
  )
}

export default Tasklist
