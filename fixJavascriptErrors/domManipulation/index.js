// Function to change div content
function changeCountry() {
  document.getElementById("myDiv").textContent = "Nigeria"; // Change "Canada" to any country of your choice
}

// Attach function to button click
document.getElementById("myButton").addEventListener("click", changeCountry);
