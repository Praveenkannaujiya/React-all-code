import React, { useState } from 'react'

const Register = () => {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const submitbtn =()=>{
    let items ={name ,email,password}
    console.log(items)
  }
  return (
    <div className='col-sm-4 offset-sm-4'>
      <h1>User Sign Up</h1>
      <input type="text" className='form-control' value={name} onChange={(e)=>setName(e.target.value)} /> <br />
      <input type="text" className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)} /> <br />
      <input type="text" className='form-control' value={password} onChange={(e)=>setPassword(e.target.value)} /> <br />

      <button className='btn btn-primary' onClick={()=>submitbtn()}>Sign Up</button>
    </div>

  )
}

export default Register