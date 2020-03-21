import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Dialog } from "@reach/dialog";
import VisuallyHidden from "@reach/visually-hidden";
import "@reach/dialog/styles.css";
//import { Certificate } from 'crypto';

// This component is here only to to showcase the
// React Context integration. No need to keep this if
// you don't require a Modal in your project.
export default class Modal extends PureComponent {
  modalOpen = false;
  componentDidMount() {
    document.addEventListener("keydown", this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyDown);
  }

  onKeyDown = ({ key }) => {
    if (key === "Escape") {
      this.props.open && this.props.hideModal();
    }
  };

  disableScrolling(visited) {
    // Disables scrolling when the modal is open, as suggested by
    // https://www.w3.org/TR/2017/NOTE-wai-aria-practices-1.1-20171214/examples/dialog-modal/dialog.html

    if (visited) {
      document.body.style.overflow = null;
      document.documentElement.style.overflow = null;
    } else {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      this.props.handleVisitedFlag(); //sets cookie so modal willl not appear for return visits
    }
  }

  render() {
    const { children, visited, hideModal } = this.props;

    if (typeof document !== "undefined") {
      this.disableScrolling(visited);
    }
    this.modalOpen = visited ? false : true;

    return (
      <React.Fragment>
        <div
          style={{
            textAlign: "center",
            display: "block",
            position: "relative",
            bottom: "7rem"
          }}
        ></div>
        <Dialog style={{ width: "58vw" }} isOpen={this.modalOpen}>
          <button className="btn-close" onClick={hideModal}>
            <VisuallyHidden>Close</VisuallyHidden>
            <span aria-hidden>×</span>
          </button>
          {children}
        </Dialog>
        <style jsx>{`
          .btn-close {
            -webkit-appearance: none;
            float: right;
            background-color: #fff;
            border-radius: 5px;
            border: none;
            color: #757575;
            border: 1px solid #ddd;
            cursor: pointer;
            font-family: inherit;
            font-size: 1.3rem;
            font-weight: 500;
            margin: 0rem 0 0rem;
            padding: 1rem 2rem;
            text-transform: uppercase;
            transition: 0.2s background-color ease;

            &:active,
            &:focus {
              box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.05);
              outline: none;
            }

            &:hover {
              background-color: #f9f9f9;
            }

            & + & {
              margin-left: 1rem;
            }
          }
          .btn-open {
            background-color: transparent;
            border: none;
            font-family: inherit;
            font-size: 4rem;
            font-weight: normal;
            padding: 1rem;
            line-height: 4rem;
            position: absolute;
            top: 0;
            right: 0;
            color: #fff;
            display: none;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node,
  handleVisitedFlag: PropTypes.func,
  hideModal: PropTypes.func,
  visited: PropTypes.bool,
  open: PropTypes.bool
};
