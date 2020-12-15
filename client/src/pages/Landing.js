import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import NavButton from "../components/NavButton";
import Navigation from "../components/Navigation";
import Particles from "react-particles-js";
import styled from "styled-components";

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
        <HeaderContainer className="container-fluid landing-head">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
              <LandingHeader>WEL</LandingHeader>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
              <LandingHeader>
                COME<Period>.</Period>
              </LandingHeader>
            </div>
            {/* <div className="row">
              <Button>
                <i class="fas fa-arrow-down"></i>
              </Button>
            </div> */}
          </div>
        </HeaderContainer>
      </myDiv>
    );
  }
};

const LandingHeader = styled.h1`
  font-size: 100px;
  color: #dd8f29;
  @media (min-width: 1200px) {
      font-size: 350px;
  }
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  height: 100vh;
  width: 50%;
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
