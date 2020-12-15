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
    const myVar = setTimeout(() => {
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
      <div>
        <NavButton>
          <Navigation />
        </NavButton>
        <HeaderContainer className="container-fluid landing-head">
          <div className="row">
            <LandingHeader>He</LandingHeader>
          </div>
          <div className="row">
            <LandingHeader>llo<Period>.</Period></LandingHeader>
          </div>
        </HeaderContainer>
      </div>
    );
  }
};

const LandingHeader = styled.h1`
font-size: 350px;
color: orange;
`

const HeaderContainer = styled.div`
margin: 0 auto;
height: 100vh;
width: 50%;
`

const Period = styled.span`
color: white;`

export default Landing;
