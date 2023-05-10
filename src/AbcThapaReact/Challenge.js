import React from 'react'

const Challenge = () => {
    const name = 'Praveen Kannaujiya'
    const date = new Date().toLocaleDateString()
    const time = new Date().toLocaleTimeString()
  return (
    <div>
        <h1>My Name Is {name}</h1>
        <p>today is : {date}</p>
        <p>Today Time is : {time} </p>
    </div>
  )
}

export default Challenge