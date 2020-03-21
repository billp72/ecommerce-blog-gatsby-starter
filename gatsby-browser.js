/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from "react";
import ModalProvider from "./src/modalProvider/provider";

// React Context in Browser
// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => {
  return <ModalProvider>{element}</ModalProvider>;
};