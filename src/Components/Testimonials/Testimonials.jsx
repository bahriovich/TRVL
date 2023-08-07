import React from 'react'
import './Testimonials.css'
import Card from './Card'
import star from '../../img/star.png'
import quotes from '../../img/quotes.png'


const Testimonials = () => {
    return (
        <div className='testimonial'>
            <div className='testimonial_header'>
                <h1 >Testimonial</h1>
                <h6>What Our Clients Says About Us</h6>
            </div>
            <div>
                <div className='testimonial-card'>
                    <Card
                        quotes={quotes}
                        image={""}
                        heading={"Alex feder"}
                        subHeading={"Miami, USA"}
                        description={"Lorem Ipsum Dolor Sit Amet, Consecteur Adipicing Elit. Urna, TorTor Tempus."}
                        rating={star}
                    />
                    <Card
                        quotes={quotes}
                        image={""}
                        heading={"Elly Forbs"}
                        subHeading={"London, England"}
                        description={"Lorem Ipsum Dolor Sit Amet, Consecteur Adipicing Elit. Urna, TorTor Tempus."}
                        rating={star}
                    />
                    <Card
                        quotes={quotes}
                        image={""}
                        heading={"Mia Nest"}
                        subHeading={"Madrid, Spain"}
                        description={"Lorem Ipsum Dolor Sit Amet, Consecteur Adipicing Elit. Urna, TorTor Tempus."}
                        rating={star}
                    />
                    <Card
                        quotes={quotes}
                        image={""}
                        heading={"dan Dornu"}
                        subHeading={"lasi, Romania"}
                        description={"Lorem Ipsum Dolor Sit Amet, Consecteur Adipicing Elit. Urna, TorTor Tempus."}
                        rating={star}
                    />
                </div>
            </div>
        </div>
    )
}

export default Testimonials
