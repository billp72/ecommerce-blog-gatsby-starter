import React from "react";
import PropTypes from "prop-types";
import { ModalContext } from "../layouts";
import Modal from "../components/modal/modalComponent";

const ModalContainer = ({ children }) => (
  <ModalContext.Consumer>
    {({ visited, handleVisitedFlag, showModal, hideModal }) => (
      <Modal
        visited={visited}
        handleVisitedFlag={handleVisitedFlag}
        showModal={showModal}
        hideModal={hideModal}
      >
        {children}
      </Modal>
    )}
  </ModalContext.Consumer>
);

ModalContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default ModalContainer;
