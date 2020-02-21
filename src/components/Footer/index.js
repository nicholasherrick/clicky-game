import React from "react";
import "./style.css";

function Footer(props) {
  return <p className="footer">{props.children}</p>;
}

export default Footer;