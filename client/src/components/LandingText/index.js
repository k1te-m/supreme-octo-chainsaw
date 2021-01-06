import React from "react";
import styled, { keyframes } from "styled-components";

const LandingText = () => {
  return (
    <>
      <HeaderContainer className="container landing-head">
        <div className="row">
          <LandingHeader1>
            WELCOME<Period>.</Period>
          </LandingHeader1>
        </div>
        <div className="row mt-0 pt-0 mb-5">
          <AboutDescription>
          My name is <b>Kevin Miller</b>. I am a recent graduate of Northwestern University’s Full Stack Web Development Program with a history of
          success in financial services. Prior to graduation I worked as a financial professional for nearly six years at Northern Trust Corporation in Chicago, IL. Passionate about learning, I am excited to continue with the challenge of software and web development. I am a detail and goal oriented professional looking to grow and develop skills even further in a junior developr role while adding value to both the organization and their clients. Please browse my portfolio, GitHub and LinkedIn pages. Feel free to contact me here or at any other listed method!
          </AboutDescription>
        </div>
      </HeaderContainer>
    </>
  );
};

const AboutDescription = styled.p`
  color: #f2f2f2;
  text-align: center;
  font-size: 14px;
  @media (min-width: 576px) {
    font-size: 18px;
  }
  @media (min-width: 768px) {
    font-size: 22px;
  }
  @media (min-width: 992px) {
    font-size: 26px;
  }
  @media (min-width: 1200px) {
    
  }

`;

const LandingHeader1 = styled.h1`
  text-align: center;
  font-size: 60px;
  color: #3b945e;

  margin-bottom: 0px;
  padding-bottom: 0px;
  @media (min-width: 576px) {
    font-size: 80px;
  }
  @media (min-width: 768px) {
    font-size: 120px;
  }
  @media (min-width: 992px) {
    font-size: 160px;
  }
  @media (min-width: 1200px) {
    margin-top: auto;
    font-size: 200px;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const HeaderContainer = styled.div`
  animation: ${fadeIn} 1.5s linear;
  @media (orientation: landscape) {
    margin-top: 25px;
    height: auto;
  }
`;

const Period = styled.span`
  color: #f2f2f2;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #182628;
`;

export default LandingText;
