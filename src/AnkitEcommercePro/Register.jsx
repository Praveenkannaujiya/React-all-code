import React, { useState  } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')


   const navigate=useNavigate()


  const submitbtn =()=>{
   
    navigate('/about' , {state :{name:name , email:email, password:password}})
  }


  return (
    <div className='col-sm-4 offset-sm-4'>
      <h1>User Sign Up</h1>
      <br />
      <label >User Name</label>
      <input type="text" className='form-control' value={name} onChange={(e)=>setName(e.target.value)} /> <br />

      <label > Enter Email </label>
      <input type="email" className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)} /> <br />
      
      <label >Enter Password</label>
      <input type="password" className='form-control' value={password} onChange={(e)=>setPassword(e.target.value)} /> <br />

      <button className='btn btn-primary' onClick={()=>submitbtn()}>Sign Up</button>
    </div>

  )
}

export default Register