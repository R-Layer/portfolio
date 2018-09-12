/* Used to save semantic HTML */

import React from "react";
import { ScrollElement } from "react-scroll";

const SectionElement = ({ parentBindings, ...props }) => {
  return <section {...props}>{props.children}</section>;
};

export default ScrollElement(SectionElement);
