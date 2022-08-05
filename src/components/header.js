import React from "react";
import { Button } from "react-bootstrap";
import logo from "../images/logo.svg";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg fixed-to">
      <ul>
        <li>
          <img src={logo} className="App-logo" alt="logo" />
        </li>
        <li>Home</li>
        <li>About Me </li>
        <li>Services </li>
        <li>Experience </li>
        <li>Contact Me</li>
        <li>Download CV</li>
        <li id="git-btn">
          <Button variant="info" size="md" id="gtb">Get in touch</Button>
        </li>
      </ul>
    </nav>
  );
}
