import React from "react";
import styled, { keyframes } from "styled-components";
import Navigation from "../Navigation";
import ContactCard from "../ContactCard";
import SideNav from "../SideNav";
import PortfolioCard from "../PortfolioCard";

const About = () => {
  return (
    <>
      <SideNav />
      <Navigation />
      <SlideInUpDiv>
        <AboutContainer className="container">
          <AboutHeader>My name is Kevin Miller.</AboutHeader>
        </AboutContainer>
      </SlideInUpDiv>
      <SlideInRightDiv>
        <ContactCard />
      </SlideInRightDiv>
      <SlideInLeftDiv>
        <PortfolioCard />
      </SlideInLeftDiv>
    </>
  );
};

const AboutHeader = styled.p`
  font-size: 25px;
  color: #f4a261;
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
  top: 10%;
  right: 10%;
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
  bottom: 10%;
  left: 10%;
  animation: ${slideInLeft} 3s linear;
`;

export default About;
