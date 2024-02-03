import React from 'react'
import Layout from './componnts/Layout'
import { BrowserRouter } from 'react-router-dom';


export default function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Layout />
      </BrowserRouter>
    </div>
  )
}
