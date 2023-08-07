import React from 'react'
import './Subscribe.css'
import wave from '../../img/vecteezy_abstract-wave-background-minimal-white-geometric-wallpaper_9799009_864.png'

const Subscribe = () => {
    return (
        <div className='subscribe'>
            <img src={wave} alt="" />
            <div className='subscribe-container'>
                <div className='subscribe-header'>
                    <h3>Subscribe Newsletter & Get Company News</h3>
                </div>
                <div className='subscribe-mail'>
                    <input type="text" />
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Subscribe
