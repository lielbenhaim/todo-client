import React, { useState } from 'react'
import Login from './Login'
import UserTask from './UserTask'
import AdminTask from './AdminTask'
import { Route, Routes } from 'react-router-dom';

export default function Leyout() {
  const [token, setToken] = useState();
  if(!token) {
    return <Login setToken={setToken} />
  }
  return (

    <div className="layout">
      <h1>todo</h1>

      <Routes>
        <Route path="/user" element={<UserTask />} />
        <Route path="/admin" element={<AdminTask />} /> 
      </Routes>

    </div>

    // <Login login={setLogin} />



  )
}



