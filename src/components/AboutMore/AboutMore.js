import React from 'react'
import AboutMoreSvg from '../../images/about_more_rocket.gif'
import './AboutMore.css'

const AboutMore = () => {
  return (
    <div className="max-wrapper about-more-wrapper">
      <div className="about-more">
      <div className="about-more-image-wrapper">
          <div className="about-more-image">
            <img src={AboutMoreSvg} alt="about_more_svg" />

          </div>
        </div>
        <div className="about-more-content-wrapper">
          <div className="about-more-content">
            <div className="about-content-main">
              <p>I love working on UI/UX analysis and tasks of complexity never frightened me.
                All images, fonts and layers will be organized and prepared for the font-end
                developer.I have an up-to-date knowledge of Web-design industry including
                Adobe (photoshop, illustrator, XD), Figma, Marvel, Miro , Sketch, Invision App.

                I have all basic knowledge related to this ground, such as Html, CSS,
                Python and Javascript. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMore