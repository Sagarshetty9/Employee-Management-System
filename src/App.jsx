import { useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import AdminDashboard from './components/Dashboard.jsx/AdminDashboard'
import EmployeeDashboard from './components/Dashboard.jsx/EmployeeDashboard'
import { setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'


function App() {
  const [loggedUserData, setloggedUserData] = useState(null)
  const [user, setUser] = useState(null)  
  const Authdata = useContext(AuthContext)
  // console.log(Authdata.employees )


  useEffect(()=>{
const loginData = localStorage.getItem('loggedIn')
if(loginData){
const userData = JSON.parse(loginData)
setUser(userData.role)
setloggedUserData(userData.data)
}
}, [])


const handleLogin = (email, password) =>{
    if(email == "admin@me.com" && password == "123"){
      setUser("admin")
      localStorage.setItem('loggedIn', JSON.stringify({role:'admin'}))
    }else if(Authdata){
      const employee = Authdata.employees.find((e)=> email == e.email && password == e.password)
      if (employee) {
        setUser("employee")
        setloggedUserData(employee)
        localStorage.setItem('loggedIn', JSON.stringify({role:'employee', data:employee}))
      }
    }else{
      alert("invalid login ")
    }
  }


  return (
    <>
    {!user ? <Login handleLogin = {handleLogin}/> : ''}
    {user == "admin" ? <AdminDashboard  changeUser = {setUser}/> : (user == "employee" ?  <EmployeeDashboard  changeUser = {setUser} data =  {loggedUserData} /> : null)}
      
      {/* <AdminDashboard/> */}
    </>

  )
}

export default App
