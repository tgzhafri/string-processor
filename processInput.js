import { processString } from "./stringProcessor.js";
import { handleInputValidation } from "./errorHandler.js";
import { refreshHistoryList } from "./historyHelper.js";

// Initialize the input history array
const history = [];

export function processInput() {
  const inputValue = inputString.value.trim();
  const errorMessage = handleInputValidation(inputValue);
  if (errorMessage) {
    alert(errorMessage);
  } else {
    processString();
    // Add the input to the history
    history.push(inputValue);
    // Refresh the history list
    refreshHistoryList(history, historyList);
    inputString.value = ""; // Clear the input field
  }
}
