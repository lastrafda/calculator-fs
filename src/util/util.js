/**
 *
 * @param {string} x First number in a mathematical operation
 * @param {string} y Second number in a mathematical operation
 * @param {string} operator Mathematical operator (+, -, * and /)
 * @returns {string} result of an operation between x and y
 */
export function getCalculation(x, y, operator) {
  const formatedX = Number(x);
  const formatedY = Number(y);
  let result;

  switch (operator) {
    case "+":
      result = formatedX + formatedY;
      break;
    case "-":
      result = formatedX - formatedY;
      break;
    case "*":
      result = formatedX * formatedY;
      break;
    case "/":
      if (formatedY === 0) {
        console.log("Error: division by zero");
      }
      result = formatedX / formatedY;
      break;
    default:
      console.log(`Operator: '${operator} is not currently supported'`);
      break;
  }
  return result + "";
}
