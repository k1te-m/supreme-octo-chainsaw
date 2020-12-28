import React from "react";


const ContactInfoModal = ({ show, children }) => {
  if (show === false) {
    return null;
  } else {
    return <div className="modal-container">
      {children}
    </div>;
  }
};

export default ContactInfoModal;
