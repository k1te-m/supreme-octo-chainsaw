import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import NavButton from "../components/NavButton";
import Navigation from "../components/Navigation";
import Particles from "react-particles-js";
import styled, { keyframes } from "styled-components";

const Landing = () => {
  const [loadWheel, setLoadWheel] = useState(true);
  console.log(loadWheel);

  useEffect(() => {
    const myFace = setTimeout(() => {
      setLoadWheel(false);
      console.log(loadWheel);
    }, 2500);
  }, []);

  if (loadWheel === true) {
    return (
      <div>
        <Loading />
      </div>
    );
  } else {
    return (
      <myDiv>
        <NavButton>
          <Navigation />
        </NavButton>
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
            <div className="row mt-5">
              <Button>
                <i class="fas fa-arrow-down"></i>
              </Button>
            </div>
          
        </HeaderContainer>
      </myDiv>
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
`
const HeaderContainer = styled.div`
 animation: ${fadeIn} 1.5s linear;
`;

const Period = styled.span`
  color: white;
`;

const myDiv = styled.div`
  margin: 0 auto;
  height: 100vh;
`;

const Button = styled.button`
  font-size: 2rem;
  width: 75px;
  background: #45b08c;
  border: none;
  color: #1aded7;
  margin: 0 auto;
  opacity: 65%;
`;

export default Landing;
