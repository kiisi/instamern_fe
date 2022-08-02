import React from 'react'
import AboutSvg from '../../images/about_svg.svg'
import './About.css'

const About = () => {
  return (
    <div className="max-wrapper about-wrapper">
      <div className="about">
        <div className="about-content-wrapper">
          <div className="about-content">
            <div className="about-content-header">
              <h1>About Us</h1>
            </div>
            <div className="about-content-main">
              <p>Hello I’m UI/UX Designer, a content writer and a front-end developer with
                a trending view, high-quality and Pofessional approach and more than
                1year. of deep experience working across UX/UI, creating UI for Websites
                and Web apps. My years of experience include Website design, landing
                pages, E-cormerce websites and online stores, Mobile versions of
                websites(responsive), Presentations, banners, Email Templates, Marketing
                materials, UI Kit, Wireframming and Prototyping, UI/UX for mobile (ios

                &amp; Andriod) and Web apps, Logo design and Branding.
                {/* I love working on UI/UX analysis and tasks of complexity never frightened me.
                All images, fonts and layers will be organized and prepared for the font-end
                developer.I have an up-to-date knowledge of Web-design industry including
                Adobe (photoshop, illustrator, XD), Figma, Marvel, Miro , Sketch, Invision App.

                I have all basic knowledge related to this ground, such as Html, CSS,
                Python and Javascript. */}
              </p>
            </div>
          </div>
        </div>
        <div className="about-image-wrapper">
          <div className="about-image">
            <img src={AboutSvg} alt="about_svg" />

          </div>
        </div>
      </div>
    </div>
  )
}

export default About