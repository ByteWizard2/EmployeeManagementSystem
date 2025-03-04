import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import TAskList from './components/TaskList/TAskList'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {
   
  const[user, setUser] = useState(null)
  const[LoggedInUserData, setLoggedInUserData]  = useState(null)
  const authData = useContext(AuthContext)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')

    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  },[])
  

  const  handleLogin=(email, password)=>{
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }else if(authData){
      const employee =  authData.employees.find((e)=>email == e.email && e.password== password)
      if(employee){
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
      }
  
    }
    else{
      alert("invalid credentials")
    }
  }



  return (
    <div>
      {!user ? <Login handleLogin={handleLogin}/>: ""}
      {user=='admin' ?<AdminDashboard/>: (user == 'employee'?<EmployeeDashboard data={LoggedInUserData}/>:null)}
    </div>
  )
}

export default App
