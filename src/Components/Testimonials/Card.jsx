import React from 'react'
import './Testimonials.css'

const Card = ({ image, heading, subHeading, description, rating, quotes }) => {
    return (
        <div className='card'>
            <div className='quotes'>
                <img src={quotes} alt="" />
            </div>
            <div className='card-header'>
                <div className='card-header-ellipse'>
                    <img src={image} alt="" />
                </div>
                <div className='card-header-title'>
                    <h3> {heading} </h3>
                    <h5> {subHeading} </h5>
                </div>
            </div>
            <div className='card-description'>
                <h5> {description} </h5>
            </div>
            <div className='card-rating'>
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
            </div>

        </div>
    )
}

export default Card
