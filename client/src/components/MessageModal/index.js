import React from "react";

function messageModal({show, children}) {

    

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

export default messageModal;