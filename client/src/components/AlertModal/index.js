import React from "react";

const AlertModal = ({show, children}) => {
    if (show === false) {
        return null;
    } else {
    return (
        <div className="modal-container">
            {children}
        </div>
    )
    }
}

export default AlertModal;