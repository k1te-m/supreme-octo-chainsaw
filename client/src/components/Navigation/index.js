import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import "./style.css";

const hamburgerStyle = {
  fontSize: "3rem",
  color: "#E6AA68",
  border: "none",
  marginRight: "10px",
};

const Navigation = () => {
  return (
    <NavNav className="navbar navbar-light bg-custom justify-content-end">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style={hamburgerStyle}
      >
        <i className="fas fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="padding-values">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/portfolio" className="nav-link">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://github.com/k1te-m"
                target="_blank"
              >
                GitHub
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/kmiller29/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://drive.google.com/file/d/1XbOSu9JYqNGkLfgajWcSbFbJs2Bp1cXr/view?usp=sharing"
                target="_blank"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </NavNav>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const NavNav = styled.nav`
  width: 100vw;
  animation: ${fadeIn} 2s ease-in-out;
`;

export default Navigation;
