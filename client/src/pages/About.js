import React from "react";
import styled, { keyframes } from "styled-components";
import Navigation from "../components/Navigation";
import ContactCard from "../components/ContactCard";
import SideNav from "../components/SideNav";
// import PortfolioCard from "../PortfolioCard";
import { Link } from "react-router-dom";
import "./style.css";
import PortfolioCard from "../components/PortfolioCard";

const About = () => {
  return (
    <>
      <SideNav />
      <Navigation />
      <SlideInUpDiv>
        <AboutContainer className="container">
          <AboutHeader>My name is Kevin Miller.</AboutHeader>
          <Link to="/portfolio" className="arrow">
            <i class="fas fa-arrow-down"></i>
          </Link>
        </AboutContainer>
      </SlideInUpDiv>
      <SlideInRightDiv>
        <PortfolioCard />
      </SlideInRightDiv>
      <SlideInLeftDiv>
        <ContactCard />
      </SlideInLeftDiv>
    </>
  );
};

const AboutHeader = styled.h1`
  font-size: 25px;
  color: #e6aa68;
  text-align: center;
  @media (min-width: 576px) {
    font-size: 35px;
  }
  @media (min-width: 768px) {
    font-size: 45px;
  }
  @media (min-width: 992px) {
    font-size: 65px;
  }
  @media (min-width: 1200px) {
    font-size: 65px;
  }
`;

const AboutContainer = styled.div``;

const slideInUP = keyframes`
from {
  opacity: 0;
  transform: translate3d(0, 100%, 0);
  visibility: 'visible'
}
to {
  opacity: 1;
  transform: none;
}
`;

const slideInRight = keyframes`
from {
  transform: translate3d(1000%, 0, 0);
  visibility: 'visible'
}
to {
  transform: translate3d(0, 0, 0);
}
`;

const SlideInUpDiv = styled.div`
  animation: ${slideInUP} 2s linear;
`;

const SlideInRightDiv = styled.div`
  position: fixed;
  bottom: 5%;
  right: 5%;
  @media (min-width: 576px) {
    position: fixed;
    bottom: 3%;
    right: 5%;
  }
  @media (min-width: 768px) {
    position: fixed;
    bottom: 3%;
    right: 5%;
  }
  @media (min-width: 992px) {
    position: fixed;
    right: 10%;
    bottom: 5%;
  }
  @media (min-width: 1200px) {
    position: fixed;
    bottom: 3%;
    right: 10%;
  }
  animation: ${slideInRight} 3s linear;
`;

const slideInLeft = keyframes`
from {
  transform: translate3d(-1000%, 0, 0);
  visibility: 'visible'
}
to {
  transform: translate3d(0, 0, 0);
}
`;
const SlideInLeftDiv = styled.div`
  position: fixed;
  bottom: 5%;
  left: 5%;
  @media (min-width: 576px) {
    position: fixed;
    bottom: 3%;
    left: 5%;
  }
  @media (min-width: 768px) {
    position: fixed;
    bottom: 3%;
    left: 5%;
  }
  @media (min-width: 992px) {
    position: fixed;
    left: 10%;
    bottom: 5%;
  }
  @media (min-width: 1200px) {
    position: fixed;
    bottom: 3%;
    left: 10%;
  }
  animation: ${slideInLeft} 3s linear;
`;

export default About;
