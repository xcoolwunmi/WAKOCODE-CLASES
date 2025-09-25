document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#login-form");
  const accNumInput = document.querySelector("#acc-num");
  const accPinInput = document.querySelector("#acc-pin");

  // Demo database with 20 random users
  const users = [
    { name: "John Doe", accountNumber: "1234567890", pin: "1234" },
    { name: "Jane Smith", accountNumber: "9876543210", pin: "4321" },
    { name: "Michael Johnson", accountNumber: "1122334455", pin: "5678" },
    { name: "Emily Davis", accountNumber: "2233445566", pin: "8765" },
    { name: "Daniel Brown", accountNumber: "3344556677", pin: "1111" },
    { name: "Olivia Wilson", accountNumber: "4455667788", pin: "2222" },
    { name: "James Taylor", accountNumber: "5566778899", pin: "3333" },
    { name: "Sophia Martinez", accountNumber: "6677889900", pin: "4444" },
    { name: "David Anderson", accountNumber: "7788990011", pin: "5555" },
    { name: "Emma Thomas", accountNumber: "8899001122", pin: "6666" },
    { name: "Lucas Jackson", accountNumber: "9900112233", pin: "7777" },
    { name: "Mia White", accountNumber: "1011121314", pin: "8888" },
    { name: "Ethan Harris", accountNumber: "1213141516", pin: "9999" },
    { name: "Isabella Martin", accountNumber: "1314151617", pin: "0000" },
    { name: "Alexander Thompson", accountNumber: "1415161718", pin: "2468" },
    { name: "Charlotte Garcia", accountNumber: "1516171819", pin: "1357" },
    { name: "Benjamin Martinez", accountNumber: "1617181920", pin: "2469" },
    { name: "Amelia Robinson", accountNumber: "1718192021", pin: "1359" },
    { name: "William Clark", accountNumber: "1819202122", pin: "1478" },
    { name: "Harper Rodriguez", accountNumber: "1920212223", pin: "2580" }
  ];

  // Popup function
  function showPopup(message) {
    const popup = document.querySelector("#popup");
    const popupMessage = document.querySelector("#popup-message");
    const popupClose = document.querySelector("#popup-close");

    popupMessage.textContent = message;
    popup.style.display = "block";

    popupClose.onclick = () => {
      popup.style.display = "none";
    };
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const accNum = accNumInput.value.trim();
    const accPin = accPinInput.value.trim();

    // Basic validation
    if (accNum.length !== 10) {
      showPopup("Account number must be exactly 10 digits.");
      return;
    }

    if (accPin.length < 4 || accPin.length > 6) {
      showPopup("PIN must be between 4 and 6 digits.");
      return;
    }

    // Check against demo database
    const user = users.find(
      (u) => u.accountNumber === accNum && u.pin === accPin
    );

    if (user) {
      showPopup(`Welcome, ${user.name}! Login successful.`);
      form.reset();
    } else {
      showPopup("Invalid account number or PIN.");
    }
  });
});
