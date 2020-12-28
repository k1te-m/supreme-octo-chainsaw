import React, { useContext, useState } from "react";
import API from "../utils/API";
import { Input, TextArea, FormBtn } from "../components/Form";
import MessageModal from "../components/MessageModal";
import Navigation from "../components/Navigation";
import styled, { keyframes } from "styled-components";
import AlertContext from "../context/Alert/alertContext";
import GitHubCard from "../components/GitHubCard";
import LinkedInCard from "../components/LinkedInCard";
import ContactInfoCard from "../components/ContactInfoCard";
import ContactInfoModal from "../components/ContactInfoModal";
import "./style.css";

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
    zIndex: "2",
    position: "fixed",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    height: "auto",
    width: "auto",
  });

  const [infoModal, setInfoModal] = useState({
    show: false,
  })
  const [infoDisplayOptions, setInfoDisplayOptions] = useState({
    display: "none",
    zIndex: "2",
    position: "fixed",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    height: "auto",
    width: "auto",
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
    setInfoDisplayOptions({...infoDisplayOptions, display: "none"});
  }

  const openInfoModal = () => {
    setInfoModal(true);
    setInfoDisplayOptions({...infoDisplayOptions, display: "block"})
  }

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
            <h2 className="border-bottom pb-3 pt-3">Contact</h2>
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
        <CardLayout className="row m-4 mt-3">
          <GitHubCard />
          <LinkedInCard />
          <ContactButton type="button" onClick={openInfoModal}>
            <ContactInfoCard />
          </ContactButton>
        </CardLayout>

        <MessageModal show={messageModal}>
          <div
            className="modal container"
            role="dialog"
            id="messageModal"
            style={displayOptions}
          >
            <div className="modal-header">
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
            </div>
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
          </div>
        </MessageModal>
        <ContactInfoModal show={infoModal}>
          <div 
          className="modal container" 
          role="dialog" 
          id="contactInfo"
          style={infoDisplayOptions}
          >
            <div className="modal-header">
              <h3 className="modal-title">Contact Info:</h3>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={handleInfoClose}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body contact">
              <ul className="contact-info">
                <li className="info"><i className="far fa-envelope icon"/><span>kmiller343@gmail.com</span></li>
                <li className="info"><i className="fas fa-phone-volume icon"/><span>(847) 987-9744</span></li>
              </ul>
            </div>
          </div>
        </ContactInfoModal>
      </FormContainer>
    </>
  );
};

const NavigationContainer = styled.div`
  position: fixed;
  top: 0%;
  right: 0%;
  z-index: 9999;
`;

const FormContainer = styled.div`
  position: fixed;
  top: 2%;

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
  display: flex;
  justify-content: space-between;
`;

const ContactButton = styled.button`
height: auto;
width: auto;
background: transparent;
border: none;
padding: 0;
margin: 0;
`


export default Contact;
