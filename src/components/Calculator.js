import React from "react";
import "./Calculator.css";
import PropTypes from "prop-types";

const Calculator = ({ initialValue }) => {
  return <div className="Calculator">initial Value: {initialValue}</div>;
};

Calculator.defaultProps = {
  initialValue: "0",
};

Calculator.propTypes = {
  initialValue: PropTypes.string,
};

export default Calculator;
