import { processInput } from "./processInput.js";

function initializeApp() {
  const inputString = document.querySelector("#inputString");
  const processButton = document.querySelector("#processButton");

  processButton.addEventListener("click", function () {
    processInput();
  });

  inputString.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default Enter key behavior (e.g., line break)
      processInput();
    }
  });
}

document.addEventListener("DOMContentLoaded", initializeApp);
