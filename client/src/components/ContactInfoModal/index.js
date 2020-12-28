import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const ContactInfoModal = ({ show, children }) => {
  if (show === false) {
    return null;
  } else {
    return (
      <AnimatePresence>
        <motion.div
          className="modal-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    );
  }
};

export default ContactInfoModal;
