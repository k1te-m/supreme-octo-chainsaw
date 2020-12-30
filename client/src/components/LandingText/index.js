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
          <div className="col-12 col-sm-6 col-md-6 col-lg-4">
            <AboutDescription>
              Pellentesque mollis erat lectus, a tempus ipsum consectetur quis.
              Quisque mollis lorem in felis semper, in pulvinar lacus gravida.
              Phasellus quis nibh pharetra ex tristique suscipit id a ex. Cras
              vitae augue eget velit bibendum rutrum vitae sed ex. Duis ex sem,
              consectetur et nunc ut, consequat pharetra dui. In placerat arcu
              vitae luctus mattis. Suspendisse nec nisi quis urna viverra
              feugiat at sed dui. Aliquam venenatis congue accumsan. Etiam ut
              nunc tincidunt, efficitur ante sed, sollicitudin nibh.
            </AboutDescription>
          </div>
        </div>
      </HeaderContainer>
    </>
  );
};

const AboutDescription = styled.p`
  color: #f2f2f2;
  text-align: center;
`;

const LandingHeader1 = styled.h1`
  text-align: center;
  font-size: 50px;
  color: #3b945e;

  margin-bottom: 0px;
  padding-bottom: 0px;
  @media (min-width: 1200px) {
    margin-top: auto;
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
`;

const Period = styled.span`
  color: #3b945e;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #182628;
`;

export default LandingText;
