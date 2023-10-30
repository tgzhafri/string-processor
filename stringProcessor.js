import { generateCSVFile } from "./csvGenerator.js";

export function processString() {
  const inputString = document.querySelector("#inputString").value;
  const upperCaseString = inputString.toUpperCase();
  const alternatingCaseString = generateAlternatingCase(inputString);

  document.querySelector("#upperCaseOutput").textContent = upperCaseString;
  document.querySelector("#alternatingCaseOutput").textContent =
    alternatingCaseString;

  const csvFilePath = generateCSVFile(inputString);
  document.querySelector("#csvFilePath").textContent = csvFilePath;
}

function generateAlternatingCase(inputString) {
  let alternatingCase = "";
  let isUpper = true;
  for (let i = 0; i < inputString.length; i++) {
    const char = inputString.charAt(i);
    alternatingCase += isUpper ? char.toUpperCase() : char.toLowerCase();
    isUpper = !isUpper;
  }
  return alternatingCase;
}
