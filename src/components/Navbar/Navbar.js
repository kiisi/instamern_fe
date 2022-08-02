import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="max-wrapper nav-wrapper">
        <div className="nav">
            <div className="nav-header">
                <h1>Jane</h1>
            </div>
            <div className="nav-links">
                <div className="nav-links-item">Home</div>
                <div className="nav-links-item">About Us</div>
                <div className="nav-links-item">Skills</div>
                <div className="nav-links-item">
                    <div className="nav-links-item-contact">Contact Us</div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar