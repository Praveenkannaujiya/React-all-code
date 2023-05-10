import React, { useState } from 'react'
// import Card from './Card'
const Card2 = () => {
    const x= 'jkjkjkjjkjkjkjkjklknnnbbnjkmbvghyiop,mnnkn nm nmb bnm vbnm oj hk '
    const [showm,setShowM]=useState(false)

  return (
    <div>
        <h1>Card2 c</h1>
        <h6>{showm? x : `${x.substring(0,15)}`+`...`}</h6>
        <button onClick={()=>setShowM(!showm)}>
            {showm?"showless":"showmore"}
        </button>
    </div>
  )
}

export default Card2