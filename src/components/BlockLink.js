import React from "react";
import { ScrollLink } from "react-scroll";

const BlockLink = ({ parentBindings, ...props }) => (
  <p {...props}>{props.children}</p>
);

export default ScrollLink(BlockLink);
