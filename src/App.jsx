import axios from 'axios'
import React from 'react'
import Home from './components/Home'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import Details from './components/Details'

const App = () => {

    // let resp = axios.get("")

  return (
    <>
 <div class="h-screen w-full flex">
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
 
</div>

  
    </>
  )
}

export default App


// https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg