import React from "react";
import styled, { keyframes } from "styled-components";
import Navigation from "../Navigation";
import ContactCard from "../ContactCard";
import SideNav from "../SideNav";
// import PortfolioCard from "../PortfolioCard";
import { Link } from "react-router-dom"
import "./style.css";

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
      {/* <SlideInRightDiv>
        
      </SlideInRightDiv> */}
      <SlideInLeftDiv>
        <ContactCard />
      </SlideInLeftDiv>
    </>
  );
};

const AboutHeader = styled.h1`
  font-size: 25px;
  color: #E6AA68;
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
  transform: translate3d(0, 500%, 0);
  visibility: 'visible'
}
to {
  opacity: 1;
  transform: none;
}
`;

// const slideInRight = keyframes`
// from {
//   transform: translate3d(1000%, 0, 0);
//   visibility: 'visible'
// }
// to {
//   transform: translate3d(0, 0, 0);
// }
// `;

const SlideInUpDiv = styled.div`
  animation: ${slideInUP} 2s linear;
`;

// const SlideInRightDiv = styled.div`
//   @media (min-width: 992px) {
//   position: fixed;
//   right: 5%;
//   top: 10%;
//   }
//   @media (min-width: 1200px) {
//   position: fixed;
//   top: 10%;
//   right: 10%;
//   }
//   animation: ${slideInRight} 3s linear;
// `;

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
  left: 10%;
  @media (min-width: 576px) {
    position: fixed;
    bottom: 3%;
    left: 5%;
  }
  animation: ${slideInLeft} 3s linear;
`;


export default About;
