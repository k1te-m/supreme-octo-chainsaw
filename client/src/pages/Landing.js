import React, { useEffect, useRef, useState } from "react";
import Loading from "../components/Loading";

import Particles from "react-particles-js";
import styled, { keyframes } from "styled-components";
import About from "../components/About";
import SideNav from "../components/SideNav";

const Landing = () => {
  const [loadWheel, setLoadWheel] = useState(true);

  const about = useRef(null);

  const executeScroll = () => {
    about.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const myFace = setTimeout(() => {
      setLoadWheel(false);
    }, 2000);
  }, []);

  if (loadWheel === true) {
    return (
      <LoadContainer>
        <Loading />
      </LoadContainer>
    );
  } else {
    return (
      <>
        <SideNav />

        <HeaderContainer className="container landing-head">
          <div className="row mb-0 pb-0">
            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
              <LandingHeader1>WEL</LandingHeader1>
            </div>
          </div>
          <div className="row mt-0 pt-0 mb-5">
            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
              <LandingHeader2>
                COME<Period>.</Period>
              </LandingHeader2>
            </div>
          </div>
          <Button onClick={executeScroll}>
            <i class="fas fa-arrow-down"></i>
          </Button>
        </HeaderContainer>

        <DescDiv className="container" ref={about}>
          <About />
        </DescDiv>
      </>
    );
  }
};

const LandingHeader1 = styled.h1`
  font-size: 100px;
  color: #dd8f29;
  margin-top: 175px;
  margin-bottom: 0px;
  padding-bottom: 0px;
  @media (min-width: 1200px) {
    margin-top: auto;
    font-size: 250px;
  }
`;
const LandingHeader2 = styled.h1`
  font-size: 100px;
  color: #dd8f29;
  margin-top: 0px;
  padding-top: px;
  @media (min-width: 1200px) {
    font-size: 250px;
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
  height: 100vh;
`;

const Period = styled.span`
  color: white;
`;

const DescDiv = styled.div`
  margin: 0 auto;
  height: 100vh;
`;

const Button = styled.button`
  width: 50%;
  background: #45b08c;
  border: none;
  color: #1aded7;
  margin: 0 auto;
  opacity: 65%;
  font-size: 2rem;
`;

// const NavToggleButton = styled.button`
//   float: right;
//   font-size: 3rem;
//   width: 75px;
//   background: #45b08c;
//   border: none;
//   color: #1aded7;
// `;

const LoadContainer = styled.div`
  overflow: hidden;
`;

export default Landing;
