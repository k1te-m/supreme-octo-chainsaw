import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const hamburgerStyle = {
  fontSize: "3rem",
  color: "#F2F2F2",
  border: "none",
  marginRight: "10px",
};

const WhiteText = {
  color: "#F2F2F2",
}

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
      <NavBarCollapse className="collapse navbar-collapse" id="navbarNav">
        <CollapsedWrapper className="container">
          <NavBackground className="background container">
            <NavBarUL className="navbar-nav">
              <NavBarLI className="nav-item">
                <Link to="/" className="nav-link" style={WhiteText}>
                  Home
                </Link>
              </NavBarLI>

              <NavBarLI className="nav-item">
                <Link to="/portfolio" className="nav-link" style={WhiteText}>
                  Portfolio
                </Link>
              </NavBarLI>
              <NavBarLI className="nav-item">
                <Link to="/contact" className="nav-link" style={WhiteText}>
                  Contact
                </Link>
              </NavBarLI>
              <NavBarLI className="nav-item">
                <a
                  className="nav-link"
                  href="https://github.com/k1te-m"
                  target="_blank"
                  rel="noreferrer"
                  style={WhiteText}
                >
                  GitHub
                </a>
              </NavBarLI>
              <NavBarLI className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.linkedin.com/in/kmiller29/"
                  target="_blank"
                  rel="noreferrer"
                  style={WhiteText}
                >
                  LinkedIn
                </a>
              </NavBarLI>
              <NavBarLI className="nav-item">
                <a
                  className="nav-link"
                  href="https://drive.google.com/file/d/1XbOSu9JYqNGkLfgajWcSbFbJs2Bp1cXr/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  style={WhiteText}
                >
                  Resume
                </a>
              </NavBarLI>
            </NavBarUL>
          </NavBackground>
        </CollapsedWrapper>
      </NavBarCollapse>
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
  height: auto;
`;

const NavBarCollapse = styled.div`
  width: 100%;
`;

const NavBarUL = styled.ul`
  margin-top: 0px;
  border: 1px solid #3B945E;
  @media (orientation: landscape) and (max-height: 360px) {
    margin-top: -250px;
  }
`;

const NavBarLI = styled.li`
  display: flex;
  border: 1px solid #3B945E;
  size: 15px;
  background-color: #182628;
  justify-content: center;
  width: 300px;
  @media (min-width: 576px) {
    width: 500px;
  }
  @media (min-width: 768px) {
    width: 700px;
  }
  @media (min-width: 992px) {
    width: 900px;
  }
  @media (min-width: 1200px) {
    width: 1150px;
  } ;
`;

const CollapsedWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  width: 300px;
  padding: auto;
  margin: auto;
  @media (min-width: 576px) {
    height: 700px;
  }
  @media (min-width: 768px) {
    height: 950px;
  }
  @media (min-width: 992px) {
    height: 1200px;
  }
  @media (min-width: 1200px) {
    height: 800px;
  } ;
`

const NavBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 285px;
  width: 350px;
  background-color: #57BA98;
  @media (min-width: 576px) {
    width: 550px;
  }
  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 975px;
  }
  @media (min-width: 1200px) {
    width: 1175px;
  } ;
`

export default Navigation;
