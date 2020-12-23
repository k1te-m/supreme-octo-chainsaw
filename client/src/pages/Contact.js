import React, { useState } from "react";
import API from "../utils/API";
import { Input, TextArea, FormBtn } from "../components/Form";
import MessageModal from "../components/MessageModal";
import Navigation from "../components/Navigation";
import styled from "styled-components";
import AlertModal from "../components/AlertModal";

const Contact = () => {
  const [messageObject, setMessageObject] = useState({
    name: "",
    email: "",
    message: "",
  });
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

  const [alertModal, setAlertModal] = useState({
    show: false,
  })

  const [displayAlertOptions, setDisplayAlertOptions] = useState({
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

  const openAlertModal = () => {
    setAlertModal(true);
    setDisplayAlertOptions({ ...displayAlertOptions, display: "block" });
  };

  const handleAlertClose = () => {
    setAlertModal(false);
    setDisplayAlertOptions({...displayAlertOptions, display: "none"});
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (messageObject.name && messageObject.email && messageObject.message) {
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
    } else if (
      !messageObject.name ||
      !messageObject.email ||
      !messageObject.message
    ) {
      openAlertModal();
      setMessageObject({
        ...messageObject,
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
      <FormContainer className="container" id="contactMe">
        <div className="row">
          <div className="col-lg-7">
            <h2 className="border-bottom pb-3 pt-3">Contact</h2>
            <form id="contactBox">
              <div className="form-row">
                <Input
                  onChange={handleInputChange}
                  name="name"
                  placeholder="Jane Smith"
                  value={messageObject.name}
                />
                <Input
                  onChange={handleInputChange}
                  name="email"
                  placeholder="jsmith@example.com"
                  value={messageObject.email}
                />
                <TextArea
                  onChange={handleInputChange}
                  name="message"
                  placeholder="Enter your message here!"
                  value={messageObject.message}
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
            <AlertModal show={alertModal}>
              <div
                className="modal alert container"
                role="dialog"
                id="alertModal"
                style={displayAlertOptions}
              >
                <div className="modal-header">
                  <h3>All fields are required!</h3>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="alert"
                    aria-label="Close"
                    onClick={handleAlertClose}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-warning"
                    data-dismiss="modal"
                    onClick={handleAlertClose}
                  >
                    Close
                  </button>
                </div>
              </div>
            </AlertModal>
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
