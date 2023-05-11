import React from 'react'
import { useLocation } from 'react-router-dom'

const About = () => {
  const location =useLocation()
  return (
    <div>
        <h1>About Page</h1>
        <h2> User Name is == {location.state.name}</h2>
        <h3> Email == {location.state.email}</h3>
        <h3> Password  == {location.state.password}</h3>

    </div>
  )
}

export default About