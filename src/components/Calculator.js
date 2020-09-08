import React from "react";
import "./Calculator.css";
import PropTypes from "prop-types";
import Display from "./Display";

const Calculator = ({ initialValue }) => {
  return (
    <div className="Calculator">
      <Display text="0" />
      initial Value: {initialValue}
    </div>
  );
};

Calculator.defaultProps = {
  initialValue: "0",
};

Calculator.propTypes = {
  initialValue: PropTypes.string,
};

export default Calculator;
