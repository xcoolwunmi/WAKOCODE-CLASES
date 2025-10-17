 // Login page button
  const loginBtn = document.getElementById("login-btn");
  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      window.location.href = "./test_details.html"; // link to the test details page
    });
  }

  // Test complete page buttons
  const retakeBtn = document.getElementById("retakeBtn");
  if (retakeBtn) {
    retakeBtn.addEventListener("click", () => {
      window.location.href = "./test_details.html"; // Go back to test details
    });
  }

  // Test details page button
  const startTestBtn = document.getElementById("start-test");
  if (startTestBtn) {
    startTestBtn.addEventListener("click", () => {
      window.location.href = "./test_page.html"; // link to the test page
    });
  }

  // Submit button
const SubmitTest = document.getElementById("submitBtn");
if (SubmitTest) {
  SubmitTest.addEventListener("click", () => {
    window.location.href = "./test_complete.html"; // link to the test complete page
  });
}


  