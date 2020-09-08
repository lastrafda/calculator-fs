import React from "react";
import "./Display.css";
import PropTypes from "prop-types";

const Display = ({ text }) => {
  return <div className="Display">{text}</div>;
};

Display.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Display;
