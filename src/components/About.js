import React from "react";
import icon from "../images/glass.svg";
import aboutPic from "../images/about-pic.svg";

export default function About() {
  return (
    <div className="my-container">
      <div className="text-center">
          <img src={icon} alt="" />

        <h1 className="mb-5">
          <span className="text-white">About</span>{" "}
          <span className="text-white">CeeJay</span>
        </h1>
      </div>
      <div className="d-flex mx-auto">
        <div className="flex-1">
          <h2>
            <span className="text-white">I am an </span>
            <span className="text-grad"> Innovative</span>
            <span className="text-white"> and</span>
            <br />
            <span className="text-grad">
              User Experience Focused
              <br /> Designer
            </span>
          </h2>

          <p id="about-text">
            Ceejay is a UI/UX Designer, a content writer and a front-end
            developer with a trending view, high-quality and Professional
            approach and more than 1year. of deep experience working across
            UX/UI, creating UI for Websites and Web apps. My years of experience
            include Website design, landing pages, E-commerce websites and
            online stores, Mobile versions of websites(responsive),
            Presentations, banners, Email Templates, Marketing materials, UI
            Kit, Wireframming and Prototyping, UI/UX for mobile (ios & android)
            and Web apps, Logo design and Branding.
          </p>

          <p id="about-text">
            I love working on UI/UX analysis and tasks of complexity never
            frightened me. All images, fonts and layers will be organized and
            prepared for the font-end developer.I have an up-to-date knowledge
            of Web-design industry including Adobe (photoshop, illustrator, XD),
            Figma, Marvel, Miro , Sketch, Invision App. I have knowledge related
            to this ground, such as Html, CSS, Javascript , React and C#.
          </p>
        </div>
        <div className="flex-2">
          <img src={aboutPic} alt="" width={500} />
        </div>
      </div>
    </div>
  );
}
