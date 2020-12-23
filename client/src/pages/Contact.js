import React, { useContext, useState } from "react";
import API from "../utils/API";
import { Input, TextArea, FormBtn } from "../components/Form";
import MessageModal from "../components/MessageModal";
import Navigation from "../components/Navigation";
import styled from "styled-components";
import AlertContext from "../context/Alert/alertContext";

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
    top: "20%",
    left: "20%",
    maxWidth: "50%",
    height: "250px",
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

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const mailformat = /.+@.+\..+/;
    if (name === "" || email === "" || message === "") {
      setAlert("Please enter all available fields.", "warning");
    } else if (!email.match(mailformat)) {
      setAlert("Please enter a valid email address.", "warning");
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
          </div>
        </div>
      </FormContainer>
    </>
  );
};

const NavigationContainer = styled.div`
  position: fixed;
  top: 0%;
  right: 0%;
`;

const FormContainer = styled.div`
  margin-top: -8.3rem;
  @media screen and (min-width: 576px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 992px) {
  }
  @media screen and (min-width: 1200px) {
  }
`;

export default Contact;
