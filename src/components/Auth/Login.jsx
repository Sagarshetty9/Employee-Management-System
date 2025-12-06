import React from 'react'
import { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")

    const submitHandler = (e) => {
        handleLogin(email,password)
        e.preventDefault()
        console.log("Email is", email)
         console.log("password is", password)
         setEmail("")
         setpassword("")
        
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20 emerald-600'>
            <form onSubmit={(e)=> {
                submitHandler(e)}} 
                className='flex flex-col justify-center items-center'>

                <input 
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                required 
                value={email}
                type="email" 
                placeholder='Enter your e-mail' 
                className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400 mt-3'
                />

                <input 
                onChange={(e)=>{
                    setpassword(e.target.value)
                }}
                required 
                value={password}
                type="password" 
                placeholder='Enter your password'  
                className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400 mt-3'
                />

                <button 
                className='mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white'>Log-in</button>

            </form>
        </div>
    </div>
  )
}

export default Login
