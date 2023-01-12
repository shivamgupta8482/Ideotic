import React from 'react'
import { Routes,Route } from 'react-router-dom'
import PrivateRoute from '../Context/PrivateRoute'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import SinglePage from './SinglePage'

const AllRoutes = () => {


  return (
    <Routes>
         <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route  path="/:id" element={<PrivateRoute><SinglePage /></PrivateRoute>}></Route>
    
    </Routes>
  )
}

export default AllRoutes