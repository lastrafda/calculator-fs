import React from "react";
import "./Calculator.css";
import PropTypes from "prop-types";
import Button from "./Button";
import Display from "./Display";

const Calculator = ({ initialValue }) => {
  return (
    <div className="Calculator">
      <Display text="0" />
      <div className="grid">
        <div className="col">
          <Button handleClick={() => console.log("+")} value="+" />
          <Button handleClick={() => console.log("7")} value="7" />
          <Button handleClick={() => console.log("4")} value="4" />
          <Button handleClick={() => console.log("2")} value="1" />
          <Button handleClick={() => console.log("0")} value="0" />
        </div>
        <div className="col">
          <Button handleClick={() => console.log("-")} value="-" />
          <Button handleClick={() => console.log("8")} value="8" />
          <Button handleClick={() => console.log("5")} value="5" />
          <Button handleClick={() => console.log("2")} value="2" />
          <Button handleClick={() => console.log(".")} value="." />
        </div>
        <div className="col">
          <Button handleClick={() => console.log("*")} value="x" />
          <Button handleClick={() => console.log("9")} value="9" />
          <Button handleClick={() => console.log("6")} value="6" />
          <Button handleClick={() => console.log("3")} value="3" />
          <Button
            type="danger"
            handleClick={() => console.log("AC")}
            value="AC"
          />
        </div>
        <div className="col">
          <Button handleClick={() => console.log("/")} value="÷" />
          <Button
            type="primary"
            handleClick={() => console.log("=")}
            value="="
          />
        </div>
      </div>
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
