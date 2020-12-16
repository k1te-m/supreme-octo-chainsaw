import React, { useState } from "react";
import API from "../utils/API";
import { Input, TextArea, FormBtn } from "../components/Form";
import MessageModal from "../components/MessageModal";

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
        height: "250px"
      })
    
      function handleInputChange(event) {
        const { name, value } = event.target;
        setMessageObject({ ...messageObject, [name]: value });
      }
    
      function handleClose() {
        setMessageModal(false);
        setDisplayOptions({...displayOptions, display: "none"})
      }
      
      function openModal(){
        setMessageModal(true);
        setDisplayOptions({...displayOptions, display: "block"})
      }
    
      function handleFormSubmit(event) {
        event.preventDefault();
        if (messageObject.name && messageObject.email && messageObject.message) {
          API.sendMessage({
            name: messageObject.name,
            email: messageObject.email,
            message: messageObject.message,
          })
            .then((res) => {
              if (res.status === 200) {
                openModal();
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
          alert("All fields are required.");
        }
      }
    
      return (
        <div className="container" id="contactMe">
          <div className="row">
            <div className="col-12">
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
                      onClick={handleClose}
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
                      onClick={handleClose}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </MessageModal>
            </div>
          </div>
        </div>
      );
}

export default Contact;