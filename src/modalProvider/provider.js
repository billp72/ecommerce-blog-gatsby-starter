import React, { Component } from "react";
import PropTypes from "prop-types";
import { ModalContext } from "../layouts";
import { withCookies, Cookies } from "react-cookie";
// The provider, which holds the page-wide store and its actions.
// Feel free to abstract actions and state away from this file.
class ModalProvider extends Component {
  constructor(props) {
    super(props);
    const { cookies } = props;
    this.state = {
      visited: cookies.get("visited"),
      handleVisitedFlag: () => cookies.set("visited", true, { path: "/" }),
      showModal: () => this.setState({ visited: false }),
      hideModal: () => this.setState({ visited: true })
    };
  }

  render() {
    return <ModalContext.Provider value={this.state}>{this.props.children}</ModalContext.Provider>;
  }
}

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
  cookies: PropTypes.instanceOf(Cookies).isRequired
};

export default withCookies(ModalProvider);
