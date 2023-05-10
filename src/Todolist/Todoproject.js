import React, { useState } from 'react'

 const Todoproject=(props)=> {
    const[input,setInput]=useState("")
  return (
    <div>
        <h1>Todoproject</h1>
        <input
         type="text"
          placeholder='Enter your name'
          value={input}
          onChange={(e)=>{setInput(e.target.value)}}/>
        <button onClick={()=>{
            props.addList(input)
        }}>+</button>
        {/* <h1>{input}</h1>  */}
        </div>
   
  )
}
export default Todoproject