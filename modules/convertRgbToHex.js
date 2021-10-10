export { convertRgbToHex };

function convertRgbToHex(string) {
  const rgbDataArray = string.split("").slice(4, -1).join("").split(", ");
  const red = Number(rgbDataArray[0]);
  const green = Number(rgbDataArray[1]);
  const blue = Number(rgbDataArray[2]);

  convertDecimalToHex(blue);

  return `tbd`;
}

function convertDecimalToHex(decimal) {
  const sixteens = Math.trunc(decimal / 16);
  const ones = decimal % 16;

  //return hexValue;
}
