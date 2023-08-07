import React from 'react'
import './Footer.css'
import logo_footer from '../../img/logo_footer.png'
import social_media from '../../img/social media.png';
import line from "../../img/Line 1.png";

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='right-side'>
                    <img src={logo_footer} alt="" />
                    <h6>
                        Lorem Ipsum Dolor Sit Amet, Consecteur Adipicing Elit. Urna,
                    </h6>
                    <img src={social_media} alt="" />
                </div>
                <div className='left-side'>
                    <div className='col'>
                        <h1>Company</h1>
                        <p>About us</p>
                        <p>Destination</p>
                        <p>Packages</p>
                        <p>Contacts</p>
                    </div>
                    <div className='col'>
                        <h1>Help</h1>
                        <p>help/FAQ</p>
                        <p>Cancel your flight</p>
                        <p>Press</p>
                    </div>
                    <div className='col'>
                        <h1>More</h1>
                        <p>Domistic Flights</p>
                        <p>Investor Relations</p>
                        <p>Partnerships</p>
                        <p>Jobs</p>
                    </div>
                    <div className='col'>
                        <h1>Terms</h1>
                        <p>Privacy policy</p>
                        <p>Terms of use</p>
                        <p>Accessibility</p>
                    </div>
                </div>
            </div>
            <div className='line'>
                <img src={line} alt="" />
            </div>
            <div className='footer_sub'>
                <p>TRVL 2022. All Rights Reserved</p>
            </div>
        </>
    )
}

export default Footer
