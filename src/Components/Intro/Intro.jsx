import React from 'react'
import './Intro.css'
import Earth from '../../img/continents-of-earth.png'
import Rectangle from '../../img/rectangle-1.png'
import Travel from '../../img/—Pngtree—airplane travel tourism supplies_6374202.png'
import Search from '../../img/search.png'

const Intro = () => {
  return (
    <div className="intro"/* style={{ backgroundImage:`url(${Earth})`,backgroundRepeat:"no-repeat"}}*/>
      <img src={Earth} alt="" />
      <div className="i-left">
        <div className="i-name">
          <span>Best destination around the world</span>
          <span>Travel to the <br/> any corner <br/> of <span className="styled_s" style={{color: "var(--orange)", fontSize: "4rem", fontWeight: 'bold'}}> the world</span></span>
          <span>WE CAN BUILD THE HOLIDAYS OF YOUR DREAMS AND MAKE THEM <br/> UNFORGETTABLE</span>
        </div>  
        <div className="i-search" style={{backgroundColor: '#FFFFFF'}}>
          <div className='i-s-destination'>
            <span>Destination</span>
            <span>Melbourne</span>
          </div>
          <div className='i-s-date'>
            <span>Date</span>
            <span>select Date</span>
          </div>
          <div className='i-s-people'>
            <span>People</span>
            <span>How many people?</span>
          </div>
          <div className='i-s-button' style={{backgroundColor: "var(--green)", }}>
            <img src={Search} alt="" /> 
          </div>
        </div>
      </div>
      <div className="i-right">
        <img src={Rectangle} alt="" />
        <img src={Travel} alt="" />
        
      </div>
    </div>
  )
}

export default Intro
