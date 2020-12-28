import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Navigation from "../components/Navigation";
import ContactCard from "../components/ContactCard";
import SideNav from "../components/SideNav";
import "./style.css";
import PortfolioCard from "../components/PortfolioCard";
import Loading from "../components/Loading";

const About = () => {
  const [loadWheel, setLoadWheel] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setLoadWheel(false);
    }, 2000);
  }, []);

  if (loadWheel === true) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <>
      <SideNav />
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
      <SlideInUpDiv>
        <AboutContainer className="container">
          <AboutHeader>My name is Kevin Miller.</AboutHeader>
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
  @media screen and (min-width: 576px) {
    font-size: 35px;
  }
  @media screen and (min-width: 768px) {
    font-size: 45px;
  }
  @media screen and (min-width: 992px) {
    font-size: 65px;
  }
  @media screen and (min-width: 1200px) {
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
  animation: ${slideInUP} 2s ease-in-out;
`;

const SlideInRightDiv = styled.div`
  position: fixed;
  bottom: 5%;
  right: 5%;
  @media screen and (min-width: 576px) {
    position: fixed;
    bottom: 3%;
    right: 5%;
  }
  @media screen and (min-width: 768px) {
    position: fixed;
    bottom: 3%;
    right: 5%;
  }
  @media screen and (min-width: 992px) {
    position: fixed;
    right: 10%;
    bottom: 5%;
  }
  @media screen and (min-width: 1200px) {
    position: fixed;
    bottom: 3%;
    right: 10%;
  }
  animation: ${slideInRight} 3s ease-in-out;
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
  @media screen and (min-width: 576px) {
    position: fixed;
    bottom: 3%;
    left: 5%;
  }
  @media screen and (min-width: 768px) {
    position: fixed;
    bottom: 3%;
    left: 5%;
  }
  @media screen and (min-width: 992px) {
    position: fixed;
    left: 10%;
    bottom: 5%;
  }
  @media screen and (min-width: 1200px) {
    position: fixed;
    bottom: 3%;
    left: 10%;
  }
  animation: ${slideInLeft} 3s ease-in-out;
`;

const NavigationContainer = styled.div`
position: fixed;
top: 0%;
right: 0%;
`

export default About;
