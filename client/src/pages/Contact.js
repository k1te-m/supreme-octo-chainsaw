import React, { useContext, useState } from "react";
import API from "../utils/API";
import { Input, TextArea, FormBtn } from "../components/Form";
import Navigation from "../components/Navigation";
import styled, { keyframes } from "styled-components";
import AlertContext from "../context/Alert/alertContext";
import GitHubCard from "../components/GitHubCard";
import LinkedInCard from "../components/LinkedInCard";
import ContactInfoCard from "../components/ContactInfoCard";
import Modal from "../components/Modal";

const Contact = () => {
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;

  const [messageObject, setMessageObject] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = messageObject;

  const [isOpen, toggle] = useState(false);

  const [messageSent, toggle2] = useState(false);

  function hanldeOpenModal(open) {
    toggle(open);
  }

  function hanldeMessageSent(open) {
    toggle2(open);
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMessageObject({ ...messageObject, [name]: value });
  };


  const handleFormSubmit = (event) => {
    event.preventDefault();
    const mailformat = /.+@.+\..+/;
    if (name === "" || email === "" || message === "") {
      setAlert("Please enter all available fields.", "danger");
    } else if (!email.match(mailformat)) {
      setAlert("Please enter a valid email address.", "danger");
    } else {
      API.sendMessage({
        name: messageObject.name,
        email: messageObject.email,
        message: messageObject.message,
      })
        .then((res) => {
          if (res.status === 200) {
            hanldeMessageSent(true);
            setMessageObject({
              ...messageObject,
              name: "",
              email: "",
              message: "",
            });
          }
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
      <FormContainer className="container" id="contactMe">
        <div className="row">
          <div className="col">
            <WhiteHeading className="pb-3 pt-3">Contact</WhiteHeading>
            <form id="contactBox">
              <div className="form-row">
                <Input
                  onChange={handleInputChange}
                  name="name"
                  placeholder="Jane Smith"
                  value={name}
                />
                <Input
                  onChange={handleInputChange}
                  name="email"
                  placeholder="jsmith@example.com"
                  value={email}
                />
                <TextArea
                  onChange={handleInputChange}
                  name="message"
                  placeholder="Enter your message here!"
                  value={message}
                />
                <FormBtn onClick={handleFormSubmit}>Submit</FormBtn>
              </div>
            </form>
          </div>
        </div>
        <CardLayout className="row row-cols-3">
          <GitHubCard />
          <LinkedInCard />
          <ContactButton type="button" onClick={() => hanldeOpenModal(true)}>
            <ContactInfoCard />
          </ContactButton>
        </CardLayout>
      </FormContainer>
      <Modal
        messageSent={messageSent}
        handleClose={() => hanldeMessageSent(false)}
      >
        <ModalContent>
          <div className="container">
            <div className="row">
              <div className="col-7">
                <h1>Thank you!</h1>
                <div className="row">
                <h3>Your message has been received. 😀</h3>
                </div>
              </div>
              <div className="col">
                <ImgContainer>
                  <img src="../images/cooper1.jpg" />
                </ImgContainer>
              </div>
            </div>
          </div>
        </ModalContent>
      </Modal>
      <Modal isOpen={isOpen} handleClose={() => hanldeOpenModal(false)}>
        <ModalContent>
          <div className="container">
            <div className="row">
              <div className="col-7">
                <h3>Contact Info:</h3>
                <ul className="contact-info">
                  <li className="row">
                    <i className="far fa-envelope" />
                    <span>kmiller343@gmail.com</span>
                  </li>
                  <li className="row">
                    <i className="fas fa-phone-volume" />
                    <span>(847) 987-9744</span>
                  </li>
                </ul>
              </div>
              <div className="col-5">
                <ImgContainer>
                  <img src="../images/me2.jpg" />
                </ImgContainer>
              </div>
            </div>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

const ImgContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
img {
  height: 85px;
  width: 85px;
  border-radius: 50%;
  border: 1px solid #3b945e;
  @media screen and (min-width: 576px) {
    height: 125px;
    width: 125px;
   
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 992px) {
    
  }
  @media screen and (min-width: 1200px) {
  }
}
`;
const NavigationContainer = styled.div`
position: fixed;
top: 0%;
right: 0%;
z-index: 9999;
`;

const WhiteHeading = styled.h2`
color: #f2f2f2;
border-bottom: 0.5px solid #3b945e;
`;

const fadeIn = keyframes`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}
`;

const FormContainer = styled.div`
position: fixed;
top: 2%;
height: 100%;
width: 100%;
overflow: auto;
::-webkit-scrollbar {
  display: none;}
animation: ${fadeIn} 1.5s linear;
@media screen and (min-width: 576px) {
}
@media screen and (min-width: 768px) {
}
@media screen and (min-width: 992px) {
}
@media screen and (min-width: 1200px) {
}
`;

const CardLayout = styled.div`
justify-content: space-around;
margin-top: 10px;
margin-bottom: 15px;
@media screen and (min-width: 576px) {
  margin-top: 25px;
  margin-bottom: 10px;
}
@media screen and (min-width: 768px) {
  margin-top: 85px;
}
@media screen and (min-width: 992px) {
  margin-top: 135px;
}
@media screen and (min-width: 1200px) {
  margin-top: 25px;
}
`;

const ContactButton = styled.button`
height: auto;
width: auto;
background: transparent;
border: none;
padding: 0;
margin: 0;
font-size: 2rem;
color: #65ccb8;
`;

const ModalContent = styled.div`
  height: 100%;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: #5c3aff;
  }
  ul {
    width: 250px;
    margin: 0px;
    padding: 0px;
  }
  i {
    vertical-align: middle;
    font-size: 1rem;
    margin: 5px 10px;
    color: #f2f2f2;
    @media screen and (min-width: 576px) {
      font-size: 1.5rem;
    }
    @media screen and (min-width: 768px) {
    }
    @media screen and (min-width: 992px) {
    }
    @media screen and (min-width: 1200px) {
    }
  }
  li {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0px;
  }
  h3 {
    color: #f2f2f2;
    @media screen and (min-width: 576px) {
      font-size: 2rem;
    }
    @media screen and (min-width: 768px) {
    }
    @media screen and (min-width: 992px) {
    }
    @media screen and (min-width: 1200px) {
    }
  }
  span {
    color: #f2f2f2;
    @media screen and (min-width: 576px) {
      font-size: 1.2rem;
    }
    @media screen and (min-width: 768px) {
    }
    @media screen and (min-width: 992px) {
    }
    @media screen and (min-width: 1200px) {
    }
  }
`;

export default Contact;
