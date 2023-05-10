import React, { useState } from 'react'

function Web() {
    const data= {name:"",email:"",passowrd:"", mobile:""}
    const [inputData, setInputData]= useState(data)
    function handleData (pr){
     
        setInputData({...inputData,[pr.target.name]:pr.target.value})
        console.log(inputData)
    }
    function handleSubmit(p){
        p.preventDefual()
        if(!inputData.name || !inputData.email )
        {
            alert("Enter Full name")
        }
    }
   
  return (
    <form className='container' onSubmit={handleSubmit}>
        <div className='header'>
            <h1>Registration</h1>

        </div>
        <div>
            <input type="text" placeholder='Fullname' name='name' value={inputData.name} onChange={handleData}/>
        </div>
        <div>
            <input type="email" placeholder='Email' name='email'value={inputData.email} onChange={handleData} />
        </div>
        <div>
            <input type="password" placeholder='Password' name='password' value={inputData.passowrd} onChange={handleData} />
        </div>
        <div>
            <input type="text" placeholder='Mobile No' name='' value={inputData.mobile} onChange={handleData} />
        </div>
       <button type='submit'>Submit</button>

    </form>
  )
}

export default Web