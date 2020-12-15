import React from "react";
import styled from "styled-components";
import NavButton from "../NavButton";

const About = () => {
  return (
    <>
      <AboutHeader>Hello</AboutHeader>
    </>
  );
};

const AboutContainer = styled.div`
height: 100vh;
`

const AboutHeader = styled.p`
  font-size: 75px;
  color: #dd8f29;
  padding-top: 175px;
  @media (min-width: 1200px) {
    margin-top: auto;
}
`;

export default About;

