import { useNavigate } from "react-router"
import React, { useState } from 'react'
import UserTask from "./UserTask";
import { Link } from "react-router-dom";




export default function Login({ setToken }) {

  async function loginUser(credentials) {
    return fetch('http://localhost:2700/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }
//פונקציה זמניית
  const fff = l=>{
    setToken(true)
    const myNav = useNavigate();
    myNav('/user')
return <Link to={'/user'} ></Link>
  }
 

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      {/* onSubmit={handleSubmit} */}
      <form  onSubmit= {fff}  >
       
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}






