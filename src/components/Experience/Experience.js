import React, { useEffect } from 'react'
import './Experience.css'
import ProfilePics from '../../images/janeprofilepics.jpg'
const Experience = () => {




  useEffect(() => {

    const contentHeaders = document.querySelectorAll(".experience-content .experience-content-header")

    contentHeaders.forEach(contentHeader => {
      contentHeader.addEventListener('click', () => {
        let icon = contentHeader.children.item(1).children.item(0)
        let p = contentHeader.children.item(0)

        const contentMain = contentHeader.nextElementSibling
        if (!contentMain.classList.contains("effect")) {
          icon.textContent = 'remove'
          p.style.color = "#0777A1"
          contentMain.classList.add("effect")
          contentMain.style.height = 'auto'

          const contentMainHeight = contentMain.clientHeight + "px"

          contentMain.style.height = '0px'

          setTimeout(function () {
            contentMain.style.height = contentMainHeight
          }, 0)

        }
        else {
          icon.textContent = 'add'
          p.style.color = "#484848"
          contentMain.style.height = '0px'
          contentMain.addEventListener('transitionend', () => {
            contentMain.classList.remove('effect')
          }, {
            once: true
          })
        }
      })
    })

  }, [])




  return (
    <div className="experience-wrapper">
      <div className="experience-container">
        <div className="experience">
          <div className="experience-header">
            <div className="experience-header-profile">
              <img src={ProfilePics} alt="profilepics" />
            </div>
            <h1>My Experience</h1>
          </div>
          <div className="experience-content-wrapper">
            <div className="experience-content">
              <div className="experience-content-header">
                <p>Content writer/ Researcher </p>
                <div className="experience-icon"><span className="material-icons">add</span></div>
              </div>
              <div className="experience-content-main">
                Wrote contents and articles on Academics, Scholarships and post graduate
                admissions.
                Click here to read more about my articles.
              </div>
            </div>
            <div className="experience-content">
              <div className="experience-content-header">
                <p>UI/UX Designer.</p>
                <div className="experience-icon"><span className="material-icons">add</span></div>
              </div>
              <div className="experience-content-main">
                Worked on hadiel website. Took part from the research to final design.
                User Testing and User Experience research.
                Hadiel.com.ng designs available in figma for review
              </div>
            </div>
            <div className="experience-content">
              <div className="experience-content-header">
                <p>UI/UX Designer. - Mercif Designs Website</p>
                <div className="experience-icon"><span className="material-icons">add</span></div>
              </div>
              <div className="experience-content-main">
                Worked on Mercif designs website. Took part from the research to final design.User Testing and User Experience research.Mercif designes availablle in figma for review
              </div>
            </div>
            <div className="experience-content">
              <div className="experience-content-header">
                <p>UI/UX Designer. - Kartlog mobile project.</p>
                <div className="experience-icon"><span className="material-icons">add</span></div>
              </div>
              <div className="experience-content-main">
                Designed logo, all graphics for online activity, and official website
                mockup
                Conducted Usuability testing, heuristic evaluation
                Worked with design team to create workflows and wireframes.
                Also contributed components to the internal design system.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
