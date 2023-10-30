export function generateCSVFile(inputString) {
  const csvContent = inputString.split("").join(",");
  const blob = new Blob([csvContent], { type: "text/csv" });
  const csvUrl = URL.createObjectURL(blob);

  // Create a download link
  const a = document.createElement("a");
  a.href = csvUrl;
  a.download = "string_data.csv";
  a.style.display = "none";

  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  return csvUrl;
}
