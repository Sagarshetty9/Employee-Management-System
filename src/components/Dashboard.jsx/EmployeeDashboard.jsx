import React from 'react'
import Header from '../Others.jsx/Header'
import TaskListNumbers from '../Others.jsx/TaskListNumbers'
import Tasklist from '../TaskList/Tasklist'
import AcceptTask from '../TaskList/AcceptTask'

const EmployeeDashboard = ({data, changeUser}) => {
  // console.log(data)
  return (
    
    
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header changeUser= {changeUser} data = {data}/>
        <TaskListNumbers  data = {data}/>
        <Tasklist data = {data}/>
    </div>
  )
}

export default EmployeeDashboard
