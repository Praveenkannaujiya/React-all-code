import React from 'react'
import { Navbar ,Nav  } from 'react-bootstrap'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand href='Logo'> Deny </Navbar.Brand>
      <Nav className='mr-auto   linkliye' >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>

      </Nav>
      </Navbar>
    </div>
  )
}

export default Header