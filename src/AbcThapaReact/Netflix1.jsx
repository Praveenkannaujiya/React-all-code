import React from 'react'
import './Netflix.css'
import { Button } from 'react-bootstrap'

const Netflix1 = (props) => {
  return (
    <>

      <div className='cards'>
        <div className='card'>
          <img src={props.link}
            className='card-img' />

          <div className='card-info'>
            <span className='card-category'>{props.category} </span>
            <h3 className='card-title'>{props.title}</h3>
            <a href="https://www.google.com" target='-blank'>
              <button>Download</button>
              </a>

          </div>

        </div>

      </div>

    </>
  )
}

export default Netflix1


 // https://search.brave.com/images?q=+vertical+++cartoon+movies+poster+image&source=web&img=40