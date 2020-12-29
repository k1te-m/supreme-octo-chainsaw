import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const ContactCard = () => {
  const centered = {
    margin: "0 auto",
    textAlign: "center",
  };
  const flexCenter = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
  return (
    <Card className="card">
      <Link to="/contact" style={centered}>
        <ContactImg
          className="card-img-top"
          src="../images/contact.png"
          alt="Card image cap"
        />
      </Link>
      <div className="card-body pt-1" style={flexCenter}>
        <CardTitle className="card-title" style={centered}>
          Contact
        </CardTitle>
        {/* <p className="card-text" style={{textAlign: "center"}}>
          To get in touch, please utilize the below contact methods or send me a
          message via the button below.
        </p>
        <ul className="list-group list-group-flush" style={{textAlign: "center"}}>
          <ListItem className="list-group-item">
            Email: kmiller343@gmail.com
          </ListItem>
          <ListItem className="list-group-item">Cell: (847) 987-9744</ListItem>
          <ListItem className="list-group-item">
            <a href="https://www.linkedin.com/in/kmiller29/">LinkedIn</a>
          </ListItem>
        </ul>
        <div style={Centered}>
          <a href="#" className="btn btn-warning">
            Contact
          </a>
        </div> */}
      </div>
    </Card>
  );
};

const shake = keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  border: 2px solid #3B945E;
  border-radius: 50%;
  background: #182628;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  img:hover {
    animation ${shake} 0.5s infinite;
  }
  @media (min-width: 576px) {
    height: 175px;
    width: 175px;
  }
  @media (min-width: 768px) {
    height: 200px;
    width: 200px;
  }
  @media (min-width: 992px) {
    height: 250px;
    width: 250px;
  }
  @media (min-width: 1200px) {
    width: 200px;
    height: 200px;  
  } ;
`;

const ContactImg = styled.img`
  height: 70px;
  width: 70px;
  margin: 0 auto;
  margin-top: 1rem;
  padding: 5px;
  @media (min-width: 576px) {
    height: 100px;
    width: 100px;
  }
  @media (min-width: 768px) {
    height: 130px;
    width: 130px;
  }
  @media (min-width: 992px) {
    height: 160px;
    width: 160px;
  }
  @media (min-width: 1200px) {
    height: 125px;
    width: 125px;
  } ;
`;

const CardTitle = styled.h1`
  font-size: 20px;
  color: #F2F2F2;
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
    font-size: 25px;
  }
  @media (min-width: 992px) {
    font-size: 30px;
  }
  @media (min-width: 1200px) {
  } ;
`;


export default ContactCard;
