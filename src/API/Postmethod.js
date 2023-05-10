import React, { useState } from 'react'

 const Postmethod =()=> {
    const [user,setUser]=useState("")
    const [title,setTitle]=useState("")
    const [completed,setCompleted]=useState("")

    const saveit=()=>{
        console.log({user,title,completed})
        let data={user,title,completed}
        fetch('https://jsonplaceholder.typicode.com/todos',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify()
        }).then((result)=>{
            // console.log("result" ,result)
            result.json().then((resp)=>{
                console.log('result', resp)
            })
        })
    }
  return (
    <div>
        <h1>POST Method means data Me new Data Update krna </h1>
        <input type="text"  value={user} name='user'  onChange={(e)=>{setUser(e.target.value)}}/> <br/> <br/> 
        <input type="text" value={title} name='title' onChange={(e)=>{setTitle(e.target.value)}} />  <br/> <br/>
        <input type="text" value={completed} name='completed' onChange={(e)=>{setCompleted(e.target.value)}} />  <br/> <br/>
        {/* <input type="text" name='name' /> */}


        <button type='button' onClick={saveit}>Save it</button> 
    </div>
  )
} 
export default Postmethod


//https://jsonplaceholder.typicode.com/posts     post API 

//userId: 1,
// id: 1,
// title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
// body: 