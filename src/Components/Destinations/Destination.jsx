import React from 'react'
import "./Destination.css"
import Card from '../Card/Card'
import Cacun from '../../img/cacunn.jpg'
import Istanbul from '../../img/istanbul.jpg'
import SiemReap from '../../img/siem-reap.jpg'
import Bali from '../../img/bali.jpg'
import Ystar from '../../img/ystar.png'

const Destination = () => {
  return (
    <div className="destination">
      <span>TOP DESTINATION</span>
      <span>Explore top designation</span>
      <div className="cards">
        <Card 
          image={Cacun}
          heading={"Cacun, Mexico"}
          rating={Ystar}
          price={"$890"}
        />
        <Card 
          image={Istanbul}
          heading={"Istanbul, Turkey"}
          rating={Ystar}
          price={"$480"}
        />
        <Card 
          image={SiemReap}
          heading={"Siem Reap, Cambodia"}
          rating={Ystar}
          price={"$890"}
        />
        <Card 
          image={Bali}
          heading={"Bali, Indonisia"}
          rating={Ystar}
          price={"$890"}
        />

      </div>
    </div>
  )
}

export default Destination