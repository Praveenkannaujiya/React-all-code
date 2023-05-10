import React from 'react'
import Header from './Header'
import Home from './Home'
import About from './About'
import Login from './Login'
import Register from './Register'

import{ BrowserRouter , Routes , Route } from 'react-router-dom'
const EcommerApp = () => {
  return (
    <div>
        <BrowserRouter>
        <Header/>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
        </BrowserRouter>
    </div>
   
  )
}

export default EcommerApp