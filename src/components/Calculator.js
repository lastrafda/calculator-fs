import React, { useReducer } from "react";
import "./Calculator.css";
import PropTypes from "prop-types";
import Button from "./Button";
import Display from "./Display";

function init(value) {
  return {
    current: value ? value : "",
    operator: "",
    previous: "",
  };
}

function reducer(state, action) {
  const { payload, type } = action;
  const currentHasNoDots = state.current.indexOf(".") === -1;
  switch (type) {
    case "append":
      if (payload.value === "." && currentHasNoDots) {
        const formatedDot = state.current.length ? "." : "0.";
        return { ...state, current: state.current + formatedDot };
      }
      if (payload.value === "0" && +state.current === 0 && currentHasNoDots) {
        return { ...state };
      }
      if (payload.value !== ".") {
        return { ...state, current: state.current + payload.value };
      }
      return { ...state };
    case "setOperator":
      // if there isn't an operation in course then change the operator
      if (state.previous === "") {
        return {
          current: state.previous,
          operator: payload.operator,
          previous: state.current,
        };
      }
      return { ...state };
    default:
      console.log(`Action Type: "${action.type} is not currently implemented"`);
      return { ...state };
  }
}

const Calculator = ({ initialValue }) => {
  const [state, dispatch] = useReducer(reducer, initialValue, init);

  /**
   * Dispatches an action with type "append".
   * @param {string} value A dot ('.') or a digit ('0','2',...,'9')
   */
  const append = (value) => {
    return dispatch({
      type: "append",
      payload: {
        value,
      },
    });
  };

  const setOperator = (operator) => {
    return dispatch({
      type: "setOperator",
      payload: {
        operator,
      },
    });
  };

  return (
    <div className="Calculator">
      <Display text={`${state.current ? state.current : "0"}`} />
      <div className="grid">
        <div className="col">
          <Button handleClick={() => setOperator("+")} value="+" />
          <Button handleClick={() => append("7")} value="7" />
          <Button handleClick={() => append("4")} value="4" />
          <Button handleClick={() => append("1")} value="1" />
          <Button handleClick={() => append("0")} value="0" />
        </div>
        <div className="col">
          <Button handleClick={() => setOperator("-")} value="-" />
          <Button handleClick={() => append("8")} value="8" />
          <Button handleClick={() => append("5")} value="5" />
          <Button handleClick={() => append("2")} value="2" />
          <Button handleClick={() => append(".")} value="." />
        </div>
        <div className="col">
          <Button handleClick={() => setOperator("*")} value="x" />
          <Button handleClick={() => append("9")} value="9" />
          <Button handleClick={() => append("6")} value="6" />
          <Button handleClick={() => append("3")} value="3" />
          <Button
            type="danger"
            handleClick={() => console.log("AC")}
            value="AC"
          />
        </div>
        <div className="col">
          <Button handleClick={() => setOperator("/")} value="÷" />
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
