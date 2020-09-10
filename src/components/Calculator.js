import React, { useReducer } from "react";
import "./Calculator.css";
import PropTypes from "prop-types";
import Button from "./Button";
import Display from "./Display";
import { init, reducer } from "./Calculator.reducer";

const Calculator = ({ initialValue }) => {
  const [state, dispatch] = useReducer(reducer, initialValue, init);

  /**
   * Dispatches an action with an "append" type.
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

  /**
   * Dispatches an action with a "setOperator" type.
   * @param {string} operator A string representing a mathematical operator (*, /, + and -)
   */
  const setOperator = (operator) => {
    return dispatch({
      type: "setOperator",
      payload: {
        operator,
      },
    });
  };

  return (
    <>
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
              handleClick={() => dispatch({ type: "allClear" })}
              value="AC"
            />
          </div>
          <div className="col">
            <Button handleClick={() => setOperator("/")} value="÷" />
            <Button
              type="primary"
              handleClick={() => dispatch({ type: "calculate" })}
              value="="
            />
          </div>
        </div>
        initial Value: {initialValue}
      </div>
      <pre>{JSON.stringify(state)}</pre>
    </>
  );
};

Calculator.defaultProps = {
  initialValue: "0",
};

Calculator.propTypes = {
  initialValue: PropTypes.string,
};

export default Calculator;
