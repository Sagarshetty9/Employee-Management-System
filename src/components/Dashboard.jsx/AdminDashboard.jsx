import React from 'react'
import Header from '../Others.jsx/Header'
import CreateTask from '../Others.jsx/CreateTask'
import AllTasks from '../Others.jsx/AllTasks'


const AdminDashboard = ({changeUser}) => {
  return (
    <div className='h-screen w-full p-7 '>
       <Header changeUser = {changeUser}/>
       <CreateTask/>
       <AllTasks/>
    </div>
  )
}

export default AdminDashboard
