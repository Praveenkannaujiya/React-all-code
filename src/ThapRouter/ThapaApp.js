import React from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Error from './Errorpage'
import Mainhome from './Mainhome'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const ThapaApp = () => {
  return (
    <div>
      <h1>Router App </h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Mainhome/>}>
            <Route index element={<Home/>} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default ThapaApp