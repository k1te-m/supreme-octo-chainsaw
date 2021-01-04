import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
import AnimatedNav from "../AnimatedNav";
import { motion } from "framer-motion";

const WhiteText = {
  color: "#F2F2F2",
};

const Navigation = () => {
  const [navOpen, toggle3] = useState(false);

  function handleOpenNav(open) {
    toggle3(open);
  }

  return (
    <>
      <ButtonContainer>
        <NavButton
          onClick={() => handleOpenNav(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="fas fa-bars" />
        </NavButton>
      </ButtonContainer>
      <AnimatedNav navOpen={navOpen} handleClose={() => handleOpenNav(false)}>
        <NavigationContainer className="container-fluid">
          <NavBarUL className="navbar-nav">
            <NavBarLI
              className="nav-item"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
            >
              <NavLink
                exact
                to="/"
                className="nav-link"
                style={WhiteText}
                activeStyle={{
                  fontWeight: "bold",
                  textDecoration: "underline",
                  fontSize: "1.1rem",
                }}
              >
                <i className="fas fa-home" />
                <span>Home</span>
              </NavLink>
            </NavBarLI>
            <NavBarLI
              className="nav-item"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
            >
              <NavLink
                exact
                to="/portfolio"
                className="nav-link"
                style={WhiteText}
                activeStyle={{
                  fontWeight: "bold",
                  textDecoration: "underline",
                  fontSize: "1.1rem",
                }}
              >
                <i className="fas fa-code" />
                <span>Portfolio</span>
              </NavLink>
            </NavBarLI>
            <NavBarLI
              className="nav-item"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
            >
              <NavLink
                exact
                to="/contact"
                className="nav-link"
                style={WhiteText}
                activeStyle={{
                  fontWeight: "bold",
                  textDecoration: "underline",
                  fontSize: "1.1rem",
                }}
              >
                <i className="fas fa-envelope-open-text" />
                <span>Contact</span>
              </NavLink>
            </NavBarLI>
            <NavBarLI
              className="nav-item"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
            >
              <a
                className="nav-link"
                href="https://github.com/k1te-m"
                target="_blank"
                rel="noreferrer"
                style={WhiteText}
              >
                <i className="fab fa-github" />
                <span>GitHub</span>
              </a>
            </NavBarLI>
            <NavBarLI
              className="nav-item"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
            >
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/kmiller29/"
                target="_blank"
                rel="noreferrer"
                style={WhiteText}
              >
                <i className="fab fa-linkedin" />
                <span>LinkedIn</span>
              </a>
            </NavBarLI>
            <NavBarLI
              className="nav-item"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
            >
              <a
                className="nav-link"
                href="https://drive.google.com/file/d/1XbOSu9JYqNGkLfgajWcSbFbJs2Bp1cXr/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                style={WhiteText}
              >
                <i className="fas fa-file" />
                <span>Resume</span>
              </a>
            </NavBarLI>
          </NavBarUL>
        </NavigationContainer>
      </AnimatedNav>
    </>
  );
};

const NavigationContainer = styled.div`
  padding: 0px;
`;

const NavButton = styled(motion.button)`
  background-color: transparent;
  border: none;
  margin-top: 0.7rem;
  padding: 0px;
  :focus {
    outline: none;
  }
  i {
    font-size: 3rem;
    color: #f2f2f2;
    margin-right: 10px;
  }
`;

const ButtonContainer = styled.div``;

const NavBarUL = styled.ul`
  margin-top: 0px;

  @media (orientation: landscape) and (max-height: 360px) {
    margin-top: -250px;
  }
`;

const NavBarLI = styled(motion.li)`
  display: flex;
  border: 1px solid #3b945e;
  border-radius: 5px;
  font-size: 1rem;
  background-color: #182628;
  justify-content: center;
  width: 100%;
  a {
    width: 100%;
    text-align: center;
  }
  i {
    margin-right: 0.5rem;
    color: #3b945e;
  }
  :hover {
    background-image: linear-gradient(to bottom right, #3b945e, #57ba98);
    font-size: 1.3rem;
    i {
      color: #182628;
    }
  }
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1200px) {
  } ;
`;

export default Navigation;
