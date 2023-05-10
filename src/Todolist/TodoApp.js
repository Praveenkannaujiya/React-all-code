import React, { useState } from 'react'
import Todoproject from'./Todoproject'

const TodoApp =()=> {
    const[listtodo,setListtodo]=useState([])
    const addlist =(input)=>{
        setListtodo([...listtodo,input])
    }
  return (
    
         <div className='m-content'>
        <div className='l-content'>
        <h1>TodoApp</h1>
        <Todoproject addlist={addlist}/>
        </div>
    </div>
  )
}
export default  TodoApp