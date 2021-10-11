// file to practice importing functions from other modules, calling them, testing them...
import { convertHexToRgb } from "./modules/convertHexToRgb.js";
import { convertRgbToHex } from "./modules/convertRgbToHex.js";

console.log(convertHexToRgb("#0fddcc"));
console.log(convertRgbToHex("rgb(00, 10, 100)"));
