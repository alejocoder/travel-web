import React from 'react'
import './TripStyles.css'

export const TripData = ({image, heading, text}) => {
  return (
    <div className='t-card'>
        <div className='t-image'>
            <img 
                alt='image'
                src={image}
            />
        </div>
        <h4>{heading}</h4>
        <p>{text}</p>
    </div>
  )
}
