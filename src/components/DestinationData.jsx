import React from 'react'
import './DestinationStyle.css'

export const DestinationData = ({heading, text, img1, img2, Cname}) => {
  return (
    <div className={Cname}>
        <div className="des-text">
          <h2>{heading}</h2>
          <p>
            {text}
          </p>
        </div>

        <div className="image">
            <img 
                alt="image" 
                src= {img1}
                ></img>
                <img 
                alt="image" 
                src= {img2}
                ></img>
        </div>
      </div>
  )
}
