import React,{useState} from 'react'
import './Todolist.css'
import Todolist from './Todolist'
import ListComponent from './ListComponent'
const AppTodolist = () => {
    const[list, setList]=useState([])

    let addlist=(input)=>{
        if(input!=='')
        setList([...list,input])
    }
     
    const deleteitem=(key)=>{
        let newlisttodo=[...list]
        newlisttodo.splice(key,1)
        setList([...newlisttodo])
    }
  return (
    <div>
        <h1 className='heading'>AppTodolist</h1>

        <Todolist addlist={addlist}  />

        <h1 className='heading'>Todo</h1>
        <hr />

        {
        list.map((listItem,i)=>{
            return(
                <ListComponent key={i} index={i} item={listItem} deleteitem={deleteitem}/>
            )
        })
        }
    </div>
  )
}

export default AppTodolist