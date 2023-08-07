import React from 'react'
import './Service.css'
import Delivery from '../../img/delivery.png'
import Star from '../../img/star.png'
import Plane from '../../img/takeoff-the-plane.png'
import Rectangle1 from '../../img/Rectangle.png'
import Travel from '../../img/travel1.png'

const Service = () => {
  return (
    <div className="service">
      <div className="s-left">
        <div className="s-name">
          <span>How We Work</span>
          <span>We Offer Best Services</span>
        </div>  
        <div className="s-offers">

          <div className="s-o-group">
            <div className="s-o-g-image"  style={{background: '#FFFFFF'}}>
              <img src={Delivery} alt="" />
            </div>
            <div className="s-o-g-name">
              <span>Choose distination</span>
              <span>lorem ipsum dolor sit Amet, Consecteur <br/> adipicing Elit. Urna, TOrTor Tempus.</span>
            </div>
          </div> 

          <div className="s-o-group">
            <div className="s-o-g-image"  style={{background: '#FFFFFF'}}>
              <img src={Star} alt="" />
            </div>
            <div className="s-o-g-name">
              <span>Five Star Hotel</span>
              <span>lorem ipsum dolor sit Amet, Consecteur <br/> adipicing Elit. Urna, TOrTor Tempus.</span>
            </div>
          </div> 

          <div className="s-o-group">
            <div className="s-o-g-image"  style={{background: '#FFFFFF'}}>
              <img src={Plane} alt="" />
            </div>
            <div className="s-o-g-name">
              <span>Air Tickiting</span>
              <span>lorem ipsum dolor sit Amet, Consecteur <br/> adipicing Elit. Urna, TOrTor Tempus.</span>
            </div>
          </div> 

        </div>
      </div>
      <div className="s-right">
        <img src={Rectangle1} alt="" />
        <img src={Travel} alt="" />
      </div>
    </div>
  )
}

export default Service
