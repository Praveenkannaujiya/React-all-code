import React, { useEffect, useState } from 'react'


 const  Get =()=> {
    const [data,setData]=useState([])
    const[id,setid]=useState("")
    const[title,setTitle]=useState("")
   useEffect(()=>{
    getlist()
   },[])
   console.log(data)
   const getlist=()=>{
    fetch('https://jsonplaceholder.typicode.com/todos').then((result)=>{
        result.json().then((resp)=>{
            // console.log( "result",resp)
            setData(resp)
            setid(resp[0].id)
            setTitle(resp[0].title)
        })
    })
   }
   const deleteuser= (id)=>{
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
        method:'DELETE'
    }).then((result)=>{
        result.json().then((resp)=>{
            console.log(resp)
            getlist()
        })
    })
   }
   const select=(id)=>{
    console.log(data[id -1])
    let product= data[id -1]
    setid(product.id)
    setTitle(product.title)
   }
  return (
    <div>
        <h1>GET Method call mean data get krna</h1>
        
        <table border='2'>
            <tr>
                <td>ID</td>
                <td>userId</td>
                <td>Title</td>
                <td>Complete</td>
                <td>Operations</td>
            </tr>
            {
            data.map((item,i)=>
            <tr key={i}>
                <td>{item.id}</td>
                <td>{item.userId}</td>
                <td>{item.title}</td>
                <td>{item.completed}</td>
                <td><button onClick={()=>deleteuser(item.id)}>Detele</button></td>
                <td><button onClick={()=>select(item.id)}>Update</button></td>
            </tr>
            )
        }
        </table>
        <div>
            <input type="text" value={id} />
            <input type="text" value={title} />
            <button>Update</button>
        </div>
       
    </div>
  )
}
export default Get

