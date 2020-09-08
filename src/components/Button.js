import React from "react";
import "./Button.css";
import PropTypes from "prop-types";

const Button = ({ handleClick, type, value }) => {
  return (
    <button className={`${type}`} onClick={handleClick}>
      {value}
    </button>
  );
};

Button.defaultProps = {
  type: "default",
};

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["danger", "default", "primary"]),
  value: PropTypes.string.isRequired,
};

export default Button;
