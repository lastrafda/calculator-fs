import { getCalculation } from "./../util/util";

export function init(value) {
  return {
    current: value ? value : "",
    operator: "",
    previous: "",
  };
}

export function reducer(state, action) {
  const { payload, type } = action;
  const currentHasNoDots = state.current.indexOf(".") === -1;
  let result;

  switch (type) {
    case "allClear":
      return {
        current: "",
        operator: "",
        previous: "",
      };
    case "append":
      if (payload.value === "." && currentHasNoDots) {
        const formatedDot = state.current.length ? "." : "0.";
        return { ...state, current: state.current + formatedDot };
      }
      if (payload.value === "0" && +state.current === 0 && currentHasNoDots) {
        return { ...state };
      }
      if (payload.value !== "0" && +state.current === 0 && currentHasNoDots) {
        return { ...state, current: payload.value };
      }
      if (payload.value !== ".") {
        return { ...state, current: state.current + payload.value };
      }
      return { ...state };
    case "calculate":
      result = getCalculation(state.previous, state.current, state.operator);
      return { current: result, operator: "", previous: "" };
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
