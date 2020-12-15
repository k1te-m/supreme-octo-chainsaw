import React from "react";
import styled from "styled-components";
import NavButton from "../NavButton";

const About = () => {
  return (
    <>
      <AboutHeader>
        Recent graduate of Northwestern University’s Full Stack Web Development
        Program with a history of success in financial services. Detail oriented
        professional looking to grow and develop skills even further while
        adding value to both the organization and their clients.
      </AboutHeader>
      <div className="row">
        <div className="col-12 col-sm-6 col-md-6 col-lg-4">
          <Card className="card">
            <div className="card-header">Portfolio</div>
          </Card>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-4">
          <Card className="card">
            <div className="card-header">Contact</div>
          </Card>
        </div>
      </div>
    </>
  );
};

const AboutHeader = styled.p`
  font-size: 25px;
  color: #dd8f29;
  padding-top: 175px;
  @media (min-width: 1200px) {
    margin-top: auto;
}
`;

const Card = styled.div`
width: 18rem;
`

export default About;

