import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate()
  const Homenavi =()=>{
    navigate('/')
  }
  const goback=()=>{
    navigate(-1)
  }
  
  return (
    <div>
      <section>
        <h1>Contact Page Open  </h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, au
           nobis? Praesentium accusantium odit eligendi dolore voluptate libero
           Accusantium itaque eius culpa dolor quibusdam eos voluptatem et
      ducimus nam quis ea asperiores voluptas mollitia, hic eius architecto 
      dicta ratione tenetur dolores impedit cupiditate? Quam, sapiente.</p>


      <button className='btn' onClick={Homenavi}>Go Home</button>
      <button className='btn' onClick={()=>goback()}>Go Back</button>
      </section>
    </div>
  )
}

export default Contact