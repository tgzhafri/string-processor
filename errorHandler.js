export function handleInputValidation(inputValue) {
  if (inputValue === "") {
    return "Please enter a valid string.";
  }
  return null; // No error
}
