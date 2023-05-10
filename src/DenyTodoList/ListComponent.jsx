import React from 'react'
import { FcLike } from "react-icons/fc";
const ListComponent = (props) => {
  return (
    <div>
        <li className='listitem'>{props.item}<span className='listdata'> <FcLike onClick={(e)=>{props.deleteitem(props.index)}} /> </span> </li>
           
        
    </div>
  )
}

export default ListComponent