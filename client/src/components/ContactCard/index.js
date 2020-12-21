import React from "react";
import styled from "styled-components";

const ContactCard = () => {
  const Centered = {
    margin: "0 auto",
    textAlign: "center",
    textDecoration: "underline",
  };
  return (
    <Card className="card">
      <ContactImg
        className="card-img-top"
        src="../images/contact.png"
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title" style={Centered}>Contact Me</h5>
        <p className="card-text" style={{textAlign: "center"}}>
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
        </div>
      </div>
    </Card>
  );
};

const Card = styled.div`
  width: 200px;
  height: 200px;
  overflow: auto;
  border: 2px solid #e6aa68;
  background: #fffbbd;
  font-size: 11px;
  @media(min-width: 576px) {
      width: 300px;
      height: 325px;
      font-size: 11px;
  };
  @media(min-width: 768px) {
    width: 350px;
    height: 375px;
    font-size: 15px;
  };
  @media(min-width: 992px) {
    width: 450px;
    height: 475px;
    font-size: 20px;
  };
  @media(min-width: 1200px) {
    width: 425px;
    height: 400px;
    font-size: 15px;
  };  
`;

const ContactImg = styled.img`
  height: 70px;
  width: 70px;
  margin: 0 auto;
  @media(min-width: 992px) {
    height: 120px;
    width: 120px;
  }
`;

const ListItem = styled.li`
  background: #fffbbd;
`;

export default ContactCard;
