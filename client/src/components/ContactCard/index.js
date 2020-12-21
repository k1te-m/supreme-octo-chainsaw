import React from "react";
import styled from "styled-components";

const ContactCard = () => {

    const Centered = {
        margin: "0 auto",
        width: "50%"
    }
  return (
    <Card className="card">
    <ContactImg className="card-img-top" src="../images/contact.png" alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">Contact Me</h5>
      <p className="card-text">To get in touch, please utilize the below contact methods or send me a message via the button below.</p>
      <ul className="list-group list-group-flush">
          <ListItem className="list-group-item">Email: kmiller343@gmail.com</ListItem>
          <ListItem className="list-group-item">Cell: (847) 987-9744</ListItem>
          <ListItem className="list-group-item"><a href="https://www.linkedin.com/in/kmiller29/">LinkedIn</a></ListItem>
      </ul>
      <div style={Centered}>
        <a href="#" className="btn btn-warning">Contact</a>
      </div>
    </div>
  </Card>
     
  );
};

const Card = styled.div`
  width: 18rem;
  border: 2px solid #E6AA68;
  background: #FFFBBD;
`;

const ContactImg = styled.img`
  height: 50%;
  width: 50%;
  margin: 0 auto;
`;

const ListItem = styled.li`
 background: #FFFBBD;
`

export default ContactCard;
