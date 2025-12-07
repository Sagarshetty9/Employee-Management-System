import React from 'react'
import { useState } from 'react'

const Header = ({data, changeUser}) => {
  const displayName = data?.firstName ?? (localStorage.getItem('loggedIn') ? JSON.parse(localStorage.getItem('loggedIn')).role === 'admin' ? 'Admin' : 'Employee' : 'User')

  const logOutUser = () =>{
    localStorage.setItem("loggedIn", '')
    changeUser('')
    // window.location.reload()
  }

  return (
    
    <div className='flex justify-between items-end'>

      <h1 className='text-2xl font-medium'>Hello,<br /><span className='text-3xl font-semibold'>{displayName} 👋</span> </h1>
      <button 
      onClick={logOutUser}
      className='bg-red-500 text-lg px-5 py-2 rounded-sm font-medium text-white cursor-pointer hover:bg-red-300'>Log out</button>
    </div>
  )
}

export default Header
