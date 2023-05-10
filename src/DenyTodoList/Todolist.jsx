import React, { useState } from 'react'

const Todolist = (props) => {

    const[input,setInput]=useState("")


  return (
    <div className='maindiv1'>
        <input type="text"  value={input} onChange={(e)=>setInput(e.target.value)} />

        <button onClick={()=>{props.addlist(input) ; setInput('')}}>ADD</button>

       
    </div>
  )
}

export default Todolist