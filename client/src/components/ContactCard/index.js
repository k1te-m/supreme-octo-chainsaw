import React from "react";
import styled from "styled-components";

const ContactCard = () => {
  const centered = {
    margin: "0 auto",
    textAlign: "center",
  };
  return (
    <Card className="card">
      <ContactImg
        className="card-img-top"
        src="../images/contact.png"
        alt="Card image cap"
      />
      <div className="card-body">
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

const Card = styled.div`
  width: 140px;
  height: 140px;
  border: 2px solid #e6aa68;
  background: #fffbbd;
  @media (min-width: 576px) {
    height: 200px;
    width: 200px;
  }
  @media (min-width: 768px) {
    height: 250px;
    width: 250px;
  }
  @media (min-width: 992px) {
    height: 300px;
    width: 300px;
  }
  @media (min-width: 1200px) {
  } ;
`;

const ContactImg = styled.img`
  height: 70px;
  width: 70px;
  margin: 0 auto;
  @media (min-width: 576px) {
    height: 125px;
    width: 125px;
  }
  @media (min-width: 768px) {
    height: 175px;
    width: 175px;
  }
  @media (min-width: 992px) {
    height: 225px;
    width: 225px;
  }
  @media (min-width: 1200px) {
  } ;
`;

const CardTitle = styled.h1`
  font-size: 20px;
  
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
`

// const ListItem = styled.li`
//   background: #fffbbd;
// `;

export default ContactCard;
