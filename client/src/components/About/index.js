import React from "react";
import styled, { keyframes } from "styled-components";
import NavButton from "../NavButton";
import Navigation from "../Navigation";

const About = () => {
  return (
    <>
      <AboutContainer className="container">
        <AboutHeader>
          Recent graduate of Northwestern University’s Full Stack Web
          Development Program with a history of success in financial services.
          Detail oriented professional looking to grow and develop skills even
          further while adding value to both the organization and their clients.
        </AboutHeader>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6 col-lg-4">
            <Card className="card">
              <img className="card-img-top" src="./images/portfoliocard.jpg" />
              <h5 className="card-title">Portfolio</h5>
              <p className="card-text">
                GitHub repositories for projects and applications.
              </p>
              <a href="/portfolio" className="btn btn-warning">
                View Repositories
              </a>
            </Card>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4">
            <Card className="card">
              <ContactImg className="card-img-top" src="./images/contact.png" />
              <h5 className="card-title">Contact</h5>
              <p className="card-text">Email: kmiller343@gmail.com</p>
              <p className="card-text">Phone: (847) 987-9744</p>
              <p>
                <a className="card-text" href="https://www.github.com/k1te-m">
                  GitHub
                </a>
              </p>
              <p>
                <a
                  className="card-text"
                  href="https://www.linkedin.com/in/kmiller29/"
                >
                  LinkedIn
                </a>
              </p>
              <a href="/contact" className="btn btn-warning">
                Contact Form
              </a>
            </Card>
          </div>
        </div>
      </AboutContainer>
    </>
  );
};

const AboutHeader = styled.p`
  font-size: 25px;
  color: #dd8f29;

  @media (min-width: 1200px) {
    margin-top: auto;
  }
`;

const Card = styled.div`
  width: 20rem;
  background-color: #dd8f29;
`;

const ContactImg = styled.img`
  background-color: #45b08c;
`;

const bottomToTop = keyframes`
  from { }
  to {
    -webkit-transform: translateY(100%); transform: translateY(100%);
  }
`
const AboutContainer = styled.div`
  animation: ${bottomToTop} 3s ease;
`

export default About;
