import React from 'react'
import { useNavigate } from 'react-router-dom'


const About = () => {
  const navigate = useNavigate()
  const contactpage=()=>{
    navigate('/contact')
  }
  const goback=()=>{
    navigate(-1)
  }
  return (
    <div>

      <section>
        <h1>About Page Open  </h1>
        
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio,
      dicta ratione tenetur dolores impedit cupiditate? Quam, sapiente.
           Accusantium itaque eius culpa dolor quibusdam eos voluptatem et.</p>
      </section>
      <button className='btn' onClick={contactpage}>Go to Contact</button>
      <button className='btn' onClick={goback}>Go Back</button>

    </div>
  )
}

export default About