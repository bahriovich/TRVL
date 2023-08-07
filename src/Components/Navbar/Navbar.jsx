import React, { useState, useEffect } from 'react'
import "./Navbar.css";
import Paper from "../../img/paper-plane.png";

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false)

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, [])


    return (
        <div className="n-wrapper">
            {/* left */}
            <div className="n-left">
                <div className="n-logo">
                    <img src={Paper} alt="" />
                </div>
                <div className="n-name">TRVL</div>
            </div>
            {/* center */}
            <div className="n-center">
                <nav className="n-list">
                    {(toggleMenu || screenWidth > 900) && (
                        <ul style={{ listStyleType: "none" }} className='list'>
                            <li className='items' >  Home </li>
                            <li className='items' >  About Us </li>
                            <li className='items' >  destination </li>
                            <li className='items' >  Packages </li>
                            <li className='items' >  Contacts </li>
                            <div className="n-right">
                                <button className="button n-button">Book Ticket</button>
                            </div>
                        </ul>
                    )}
                    <button onClick={toggleNav} className="btn">Menu</button>
                </nav>
            </div>
            {/* right */}

        </div>
    )
}

export default Navbar
