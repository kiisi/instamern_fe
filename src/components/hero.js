import { Button } from "react-bootstrap";
import React from "react";
import image from "../images/image 10.svg";

export default function Hero() {
  return (
    <div>
      {/* first flex */}

      <div className="container-fluid">
        <div className="d-flex mx-auto">
          <div className="flex-1">
            <h1 className="text-blue">
              Hi,
              <br />I am Ceejay.
              <br />
              <span className="text-white">Front-end</span> Dev, UX/UI Designer{" "}
              <span className="text-white">& SEO Writer.</span>
            </h1>
            <p id="hero-text">
              What does design and development mean to you? I turn Imaginations
              into reality by writing, designing and developing. Remember you
              only a chance to make a first impression. Let me make it an
              interesting one.
            </p>
            <Button variant="info" size="lg" id="gtb">
              Book a Free Consultation
            </Button>
          </div>

          <div className="flex-2">
            <img src={image} alt="profile-img" width={450} />
          </div>
        </div>
      </div>
    </div>
  );
}
