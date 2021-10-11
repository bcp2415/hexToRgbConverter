export { convertRgbToHex };

function convertRgbToHex(string) {
  const rgbDataArray = string.split("").slice(4, -1).join("").split(", ");
  const red = Number(rgbDataArray[0]);
  const green = Number(rgbDataArray[1]);
  const blue = Number(rgbDataArray[2]);

  return convertDecimalToHex(red);
}

function convertDecimalToHex(decimal) {
  let sixteens = Math.trunc(decimal / 16);
  let ones = decimal % 16;

  sixteens = convertSingleDigitDecToHex(sixteens);
  ones = convertSingleDigitDecToHex(ones);

  return sixteens + ones;
}

function convertSingleDigitDecToHex(digit) {
  if (digit < 10) {
    return String(digit);
  } else if (digit === 10) {
    return "a";
  } else if (digit === 11) {
    return "b";
  } else if (digit === 12) {
    return "c";
  } else if (digit === 13) {
    return "d";
  } else if (digit === 14) {
    return "e";
  } else if (digit === 15) {
    return "f";
  }
}
