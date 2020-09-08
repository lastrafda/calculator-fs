import React from "react";
import "./Calculator.css";
import PropTypes from "prop-types";
import Button from "./Button";
import Display from "./Display";

const Calculator = ({ initialValue }) => {
  return (
    <div className="Calculator">
      <Display text="0" />
      <Button handleClick={() => console.log("default")} value="÷" />
      <Button
        handleClick={() => console.log("danger")}
        type="danger"
        value="AC"
      />
      <Button
        handleClick={() => console.log("primary")}
        type="primary"
        value="="
      />
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
