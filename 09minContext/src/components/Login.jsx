import React, {useState,useContext} from 'react'
import UserContext from '../context/UserContext'


function Login() {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const {setUser}=useContext(UserContext)

    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input
         type="text"
         value={username}
         placeholder='username' 
         onChange={(e)=>setUsername(e.target.value)}
           />

        <input 
        type="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='password' />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login

/*
yaah pe normally ek login component banaaya h and using userContext data send kiya h

like third state setUser == yeh userContext jo global data excess krne help krta h waah pe data set krta h
jisse hum ise profile section me yaa kisi component me user --- (defined in userContextProvider ) ke through excess kr skte h 

like setUser({username,password})
 */