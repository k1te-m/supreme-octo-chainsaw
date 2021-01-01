import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Navigation from "../components/Navigation";
import ContactCard from "../components/ContactCard";
import SideNav from "../components/SideNav";
import PortfolioCard from "../components/PortfolioCard";
import Loading from "../components/Loading";
import LandingText from "../components/LandingText";

const slideInUP = keyframes`
from {
  opacity: 0;
  transform: translate3d(0, 30%, 0);
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
  @media (orientation: landscape) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const SlideInRightDiv = styled.div`
  position: fixed;
  bottom: 5%;
  right: 9%;
  @media screen and (min-width: 576px) {
    position: fixed;
    bottom: 7%;
    right: 9%;
  }
  @media screen and (min-width: 768px) {
    position: fixed;
    bottom: 7%;
    right: 10%;
  }
  @media screen and (min-width: 992px) {
    position: fixed;
    right: 13%;
    bottom: 7%;
  }
  @media screen and (min-width: 1200px) {
    position: fixed;
    bottom: 3%;
    right: 10%;
  }
  @media screen and (max-width: 1024px) and (orientation: landscape) {
    display: none;
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
  left: 9%;
  @media screen and (min-width: 576px) {
    position: fixed;
    bottom: 7%;
    left: 9%;
  }
  @media screen and (min-width: 768px) {
    position: fixed;
    bottom: 7%;
    left: 10%;
  }
  @media screen and (min-width: 992px) {
    position: fixed;
    left: 13%;
    bottom: 7%;
  }
  @media screen and (min-width: 1200px) {
    position: fixed;
    bottom: 3%;
    left: 10%;
  }
  @media screen and (max-width: 1024px) and (orientation: landscape) {
    display: none;
  }
  animation: ${slideInLeft} 3s ease-in-out;
`;

const NavigationContainer = styled.div`
  position: fixed;
  top: 0%;
  right: 0%;
`;

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
        <LandingText />
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

export default About;
