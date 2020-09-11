import React from "react";
import { render } from "@testing-library/react";

import { init, reducer } from "./Calculator.reducer";
import Calculator from "./Calculator";

let action;
let state;

beforeEach(() => {
  action = (type, payload) => {
    return {
      type,
      payload,
    };
  };
});

describe("calculator reducer when there is no initial value", () => {
  beforeEach(() => {
    state = init();
  });
  test("addition between two numbers", () => {
    /* Enter '2.5' */
    state = reducer(state, action("append", { value: "2" }));
    state = reducer(state, action("append", { value: "." }));
    state = reducer(state, action("append", { value: "5" }));
    expect(state.current).toBe("2.5");

    /* Set the '+' operator */
    state = reducer(state, action("setOperator", { operator: "+" }));
    expect(state.operator).toBe("+");
    expect(state.current).toBe("");
    expect(state.previous).toBe("2.5");

    /* Enter '.5' */
    state = reducer(state, action("append", { value: "." }));
    state = reducer(state, action("append", { value: "5" }));
    expect(state.current).toBe("0.5");

    /* Perform the operation */
    state = reducer(state, action("calculate"));
    expect(state.current).toBe("3");
  });
});

describe("calculator reducer when there is an initial value", () => {
  beforeEach(() => {
    state = init("124");
  });
  test("multiplication between two numbers", () => {
    state = reducer(state, action("setOperator", { operator: "*" }));
    state = reducer(state, action("append", { value: "2" }));
    state = reducer(state, action("calculate"));
    expect(state.current).toBe("248");
    expect(state.operator).toBe("");
    expect(state.previous).toBe("");
  });
});

test("renders content", () => {
  const component = render(<Calculator initialValue="124" />);
  expect(component.container).toHaveTextContent("124");
});
