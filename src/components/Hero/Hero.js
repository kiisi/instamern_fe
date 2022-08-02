import React from 'react'
import './Hero.css'
import janehero from '../../images/jane-hero.png';

const Hero = () => {
  return (
    <div className="max-wrapper">
        <div className="hero">
            <div className="hero-image-wrapper">
                <div className="hero-image">
                    <img src={janehero} alt={'Jane-hero'}/>
                </div>
                <div className="hero-image-circle"></div>
            </div>
            <div className="hero-content-wrapper">
                <div className="hero-content">
                    <p>SPEED UP <br/>COMMUNICATION WITH JANE</p>
                    <div className="hero-content-header">
                        <h1>Hi I'm Ohia<br/>Jane Chidera</h1>
                    </div>
                    <div className="hero-content-sub">
                        <p>A UI/UX Designer, a content writer and a front-end developer </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero