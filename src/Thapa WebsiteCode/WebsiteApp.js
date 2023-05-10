import React from 'react'
import Navbardeny from './Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './Homepage'
import About from './About'
import Loginform from './Login'
import Calculator from './Calculator'
const WebsiteApp = () => {
  return (
    <div>
        <BrowserRouter>
        <Navbardeny/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
           
            <Route path='/About' element={<About />} />
            <Route path='/Login' element={<Loginform />} />
            <Route path='/Calculator' element={<Calculator />} />
          
        </Routes>
      </BrowserRouter>




    </div>
  )
}

export default WebsiteApp