import React from 'react'
import "./Card.css"

const Card = ({image, heading, rating, price}) => {
  return (
    <div className="card-container">
      <div className="c-image">
        <img src={image} alt="" />
      </div>
      <div className="c-content">
        <div className="c-heading">
          <h3>{heading}</h3>
        </div>  
        <div className="c-bottom">
          <img src={rating} alt="" />
          <span>{price}</span>
        </div>  
      </div>
      
    </div>
  )
}

export default Card;
