export function refreshHistoryList(historyArray, historyListElement) {
  // Clear the history list
  historyListElement.innerHTML = "";

  // Add each history item to the list
  historyArray.forEach((input, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${index + 1}. ${input}`;
    historyListElement.appendChild(listItem);
  });
}
