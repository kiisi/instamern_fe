import React from "react";
import logo from "../images/logo.svg";

export default function Footer() {
  return (
    // <footer className="container mt-5">
    <div className='bg-footer'>
      <footer className="container mx-auto row gap-2 row-cols-7 text-light">
        <div className="col">
          <div className="d-flex align-items-center mb-3 mt-4 link-dark text-decoration-none">
            <img src={logo} alt="" />
          </div>
          <p className="text-light">&copy; 2022</p>
        </div>

        <div className="col mt-4">
          <h5>Company</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">Home</li>
            <li className="nav-item mb-2">About Us</li>
            <li className="nav-item mb-2">Case Studies</li>
            <li className="nav-item mb-2">Download CV</li>
            <li className="nav-item mb-2">Contact Us</li>
          </ul>
        </div>

        <div className="col mt-4">
          <h5>Service</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">UX/UI</li>
            <li className="nav-item mb-2">Social Media</li>
            <li className="nav-item mb-2">Graphic Designer</li>
            <li className="nav-item mb-2">Photography</li>
            <li className="nav-item mb-2">Packaging</li>
          </ul>
        </div>

        <div className="col mt-4">
          <h5>Experience</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">Download CV</li>
            <li className="nav-item mb-2">Contact Me</li>
          </ul>
        </div>

        <div className="col mt-4">
          <h5>Social</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">Facebook</li>
            <li className="nav-item mb-2">Instagram</li>
            <li className="nav-item mb-2">Linkedin</li>
            <li className="nav-item mb-2">Twitter</li>
            {/* <li className="nav-item mb-2">Packaging</li> */}
          </ul>
        </div>

        <div className="col mt-4">
          <h5>Free Consultation</h5>
          <ul className="nav flex-column">
            <li className="mb-3">
              <p>We offer a free consultation for our customers</p>
            </li>
            <h4 className="nav-item mb-1 texting p-title-2">
              Get a Free Consultation
            </h4>
            <li className="nav-item mb-2">
            +2349055016590
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
