import React, { useEffect, useState } from 'react'

const Addnum = () => {
    const[count,setCount]=useState(1)
    useEffect(()=>{
        if(count===3){
            alert("hello 3")
        }
        else{
            <h1>h</h1>
        }
    })
  return (
    <div>
        <h1>Counter {count} </h1>
        <button onClick={()=>setCount(count+1)}>Counter</button>
        <button onClick={()=>setCount(count-1)}> - Counter</button>
        

    </div>
  )
}

export default Addnum