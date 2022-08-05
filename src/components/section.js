import React from "react";
import { Button } from "react-bootstrap";
import MyButton from "./button";
import "../App.css";
import planet from "../images/Frame 407.svg";
import clock from "../images/clock.svg";
import kartlog from "../images/kartlog.svg";

export default function Section() {
  return (
    <div className="container-fluid-2">
      <div className="section-title">
        <h2>
          <span className="text-white">Not Your Typical Designer</span>
          <span className="text-grad"> and Front-end Developer</span>
        </h2>

        <div className="my-container-2">
          <div className="d-flex justify-content-evenly">
            <div className="col-md-4 box">
              <div className="text-left mx-auto m-4 m-lg-0">
                <img src={clock} alt="" className=" d-none d-xl-block mb-4" />
                <p className="size mb-3">Responsive beyond 9-5</p>
                <h3 className="h4-title">
                  Yes, I work between Monday and Sunday.{" "}
                </h3>
              </div>
            </div>

            {/* Second row */}
            <div className="col-md-4 box">
              <div className="text-left mx-auto m-4 m-lg-0">
                <img src={clock} alt="" className=" d-none d-xl-block mb-4" />
                <p className="size mb-5">Up to date with the latest trends</p>
                <h3 className="h4-title">
                  Yes, i work between Monday and Sunday.{" "}
                </h3>
              </div>
            </div>

            {/* Third row */}
            <div className="col-md-4 box">
              <div className="text-left mx-auto m-4 m-lg-0">
                <img src={clock} alt="" className=" d-none d-xl-block mb-4" />
                <p className="size mb-5">1 Free Week Trial and Low Pricing</p>
                <h3 className="h4-title">
                  i understand that everyone’s needs are different.{" "}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container images">
          <img src={planet} alt="" />
        </div>
        <div className="container-fluid text-white">
          <p className="slogan">
            My <span id="text-other">Services</span>
          </p>
        </div>
        <div className="container-fluid  mb-3">
          <div className="d-flex justify-content-center">
            {/* First row */}
            <div className="col-md-4 col mx-lg-2">
              <div className="text-left mx-auto m-4 m-lg-0">
                <img src={clock} alt="" className=" d-none d-xl-block mb-4" />
                <p className="size">UX/UI Design</p>
                <h3 className="h4-title">
                  Turning Imaginations into reacting.{" "}
                </h3>
                <Button
                  variant="outline-light"
                  size="lg"
                  className="outline mt-4"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Second row */}
            <div className="col-md-4 col mx-lg-2">
              <div className="text-left mx-auto m-4 m-lg-0">
                <img src={clock} alt="" className=" d-none d-xl-block mb-4" />
                <p className="size">Branding</p>
                <h3 className="h4-title">Brand your designs with us </h3>
                <Button
                  variant="outline-light"
                  size="lg"
                  className="outline mt-4"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Third row */}
            <div className="col-md-4 col mx-lg-2">
              <div className="text-left mx-auto m-4 m-lg-0">
                <img src={clock} alt="" className=" d-none d-xl-block mb-4" />
                <p className="size">Front-end Development</p>
                <h3 className="h4-title">Bring your designs to Life. </h3>
                <Button
                  variant="outline-light"
                  size="lg"
                  className="outline mt-4"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            {/* Fourth row */}
            <div className="col-md-4 col mx-lg-2">
              <div className="text-left mx-auto m-4 m-lg-0">
                <img src={clock} alt="" className=" d-none d-xl-block mb-4" />
                <p className="size">Graphics</p>
                <h3 className="h4-title">Creativity at peak </h3>
                <Button
                  variant="outline-light"
                  size="lg"
                  className="outline mt-4"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Fifth row */}
            <div className="col-md-4 col mx-lg-2">
              <div className="text-left mx-auto m-4 m-lg-0">
                <img src={clock} alt="" className=" d-none d-xl-block mb-4" />
                <p className="size">SEO Writer</p>
                <h3 className="h4-title">Best article writer. </h3>
                <Button
                  variant="outline-light"
                  size="lg"
                  className="outline mt-4"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Sixth row */}
            <div className="col-md-4 col mx-lg-2">
              <div className="text-left mx-auto m-4 m-lg-0">
                <img src={clock} alt="" className=" d-none d-xl-block mb-4" />
                <p className="size">Digital Marketing</p>
                <h3 className="h4-title">Market your product with me. </h3>
                <Button
                  variant="outline-light"
                  size="lg"
                  className="outline mt-4"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <MyButton name="Book a Free Consultation" />
        </div>
      </div>

      <div className="my-container portfolio">
        <h3 className="p-title">My Works That Cut Through The Nose</h3>
        <div className="row gap-3">
          {/* First case-study */}
          <div className="case col mb-3">
            <div className="text-left mx-auto m-lg-0">
              <img src={kartlog} alt="" />
              <div className="product-2">
                <h3 className="case-title">Kartlog.Netify</h3>
              </div>
              <p className="case-p">Your best fashion plug. </p>
              <div className="pad">
                <MyButton name="View Case Study"></MyButton>
              </div>
            </div>
          </div>

          {/* Second case-study */}
          <div className="case col">
            <div className="text-left mx-auto m-lg-0">
              <img src={kartlog} alt="" />
              <div className="product">
                <h3 className="case-title">Triisum</h3>
              </div>
              <p className="case-p">Explore the unexplored</p>

              <div className="pad">
                <MyButton name="View Case Study"></MyButton>
              </div>
            </div>
          </div>

          <div className="d-flex case-study justify-content-center">
            <MyButton name="View All Case Study" />
          </div>
        </div>
      </div>
    </div>
  );
}
