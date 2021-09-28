function convertHexToRgb(hexValue) {
  let hexArray = Array.from(hexColor);

  let red = [hexArray[1], hexArray[2]];
  let green = [hexArray[3], hexArray[4]];
  let blue = [hexArray[5], hexArray[6]];

  // convert each 2-digit value to a decimal number from 0-255
  let redRgb = hexToRgb(red);
  let greenRgb = hexToRgb(green);
  let blueRgb = hexToRgb(blue);
  // assemble string to return:  'rgb(r, g, b)'
  let finalRgb = `rgb(${redRgb}, ${greenRgb}, ${blueRgb})`;
  // return redGreenBlueValue;
  return finalRgb;
}

function hexToRgb(hexArray) {
  let decimalValue = 0;
  let ones = convertHexDigitToDecimal(hexArray[1]);

  let sixteens = convertHexDigitToDecimal(hexArray[0]) * 16;
  decimalValue = ones + sixteens;
  return decimalValue;
}

function convertHexDigitToDecimal(digit) {
  let decimal = 0;
  if (digit === "a") {
    decimal = 10;
  } else if (digit === "b") {
    decimal = 11;
  } else if (digit === "c") {
    decimal = 12;
  } else if (digit === "d") {
    decimal = 13;
  } else if (digit === "e") {
    decimal = 14;
  } else if (digit === "f") {
    decimal = 15;
  } else if (Number(digit) <= 9) {
    decimal += Number(digit);
  }
  return decimal;
}

export { convertHexToRgb };
