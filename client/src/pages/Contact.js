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

  const [messageModal, setMessageModal] = useState({
    show: false,
  });
  const [displayOptions, setDisplayOptions] = useState({
    display: "none",
  });

  const [infoModal, setInfoModal] = useState({
    show: false,
  });
  const [infoDisplayOptions, setInfoDisplayOptions] = useState({
    display: "none",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMessageObject({ ...messageObject, [name]: value });
  };

  const handleMessageClose = () => {
    setMessageModal(false);
    setDisplayOptions({ ...displayOptions, display: "none" });
  };

  const openMessageModal = () => {
    setMessageModal(true);
    setDisplayOptions({ ...displayOptions, display: "block" });
  };

  const handleInfoClose = () => {
    setInfoDisplayOptions(false);
    setInfoDisplayOptions({ ...infoDisplayOptions, display: "none" });
  };

  const openInfoModal = () => {
    setInfoModal(true);
    setInfoDisplayOptions({ ...infoDisplayOptions, display: "block" });
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
            openMessageModal();
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
        <CardLayout className="row row-cols-3 m-4 mt-3">
          <GitHubCard />
          <LinkedInCard />
          <ContactButton type="button" onClick={openInfoModal}>
            <ContactInfoCard />
          </ContactButton>
        </CardLayout>
      </FormContainer>
      <ModalWrapper>
        <Modal show={messageModal}>
          <ModalDiv
            className="modal container"
            role="dialog"
            id="messageModal"
            style={displayOptions}
          >
            <ModalHeaderDiv className="modal-header">
              <h3>Thank you!</h3>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={handleMessageClose}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </ModalHeaderDiv>
            <div class="modal-body">
              <h5>Your message has been received. 😀</h5>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={handleMessageClose}
              >
                Close
              </button>
            </div>
          </ModalDiv>
        </Modal>
        <Modal show={infoModal}>
          <ModalDiv
            className="modal container"
            role="dialog"
            id="contactInfo"
            style={infoDisplayOptions}
          >
            <ModalHeaderDiv className="modal-header">
              <h3 className="modal-title">Contact Info</h3>
              <ContactButton
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={handleInfoClose}
              >
                <span aria-hidden="true">
                  <i class="fas fa-window-close" />
                </span>
              </ContactButton>
            </ModalHeaderDiv>
            <div className="modal-body contact">
              <ContactInfoList className="contact-info">
                <ContactInfoListItem className="info row">
                  <i className="far fa-envelope" />
                  <span>kmiller343@gmail.com</span>
                </ContactInfoListItem>
                <ContactInfoListItem className="info row">
                  <i className="fas fa-phone-volume" />
                  <span>(847) 987-9744</span>
                </ContactInfoListItem>
                <ImgContainer>
                  <img src="../images/city.png" />
                </ImgContainer>
              </ContactInfoList>

              
            </div>
          </ModalDiv>
        </Modal>
      </ModalWrapper>
    </>
  );
};

const ImgContainer = styled.div`
  position: absolute;
  left: 60%;
  top: 15%;

  

`
const NavigationContainer = styled.div`
  position: fixed;
  top: 0%;
  right: 0%;
  z-index: 9999;
`;

const WhiteHeading = styled.h2`
  color: white;
  border-bottom: 0.5px solid#ffd47f;
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
  animation: ${fadeIn} 1.5s linear;
  @media screen and (min-width: 411px) {
  }
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
`;

const ContactButton = styled.button`
  height: auto;
  width: auto;
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
`;

const ContactInfoList = styled.ul`
  width: 250px;
  margin: 0px;
  padding: 0px;
`;

const ContactInfoListItem = styled.li`
  display: flex;
  justify-content: center;
  width: 100%;
  i {
    vertical-align: middle;
    font-size: 1rem;
    margin: 5px 10px;
  }
`;

const ModalDiv = styled.div`
  background: #182628;
  border: 3px solid #3B945E;
  border-radius: 5px;
  z-index: 2;
  width: 350px;
  height: 200px;
  position: relative;
  color: #F2F2F2;
  font-size: 15px;
  @media (min-width: 576px) {
    
  }
  @media (min-width: 768px) {
    width: 500px;
    height: 250px;
  }
  @media (min-width: 992px) {
    
  }
  @media (min-width: 1200px) {
    
  } ;
`;

const ModalHeaderDiv = styled.div`
  border-bottom: 1px solid #45b08c;
} 
`;

const ModalWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default Contact;
