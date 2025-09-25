
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#login-form");
  const accNumInput = document.querySelector("#acc-num");
  const accPinInput = document.querySelector("#acc-pin");

  // Demo database with balances
  const users = [
    { name: "Adeyemi Adebayo", accountNumber: "1029384756", pin: "1234", balance: 50000 },
    { name: "Oluwaseun Akinola", accountNumber: "1122334455", pin: "5678", balance: 75000 },
    { name: "Babatunde Ojo", accountNumber: "2233445566", pin: "4321", balance: 30000 },
    { name: "Yetunde Adesanya", accountNumber: "3344556677", pin: "8765", balance: 60000 },
    { name: "Kolawole Ayinde", accountNumber: "4455667788", pin: "1111", balance: 60000 },
    { name: "Abiodun Olasunkanmi", accountNumber: "5566778899", pin: "2222", balance: 25000 },
    { name: "Funmilayo Oladipo", accountNumber: "6677889900", pin: "3333", balance: 100000 },
    { name: "Ayomide Fashola", accountNumber: "7788990011", pin: "4444", balance: 52000 },
    { name: "Temitope Ogunleye", accountNumber: "8899001122", pin: "5555", balance: 83000 },
    { name: "Ifeoluwa Aderibigbe", accountNumber: "9900112233", pin: "6666", balance: 120000 },
    { name: "Adedoyin Alabi", accountNumber: "1011121314", pin: "7777", balance: 28000 },
    { name: "Opeyemi Adeola", accountNumber: "1213141516", pin: "8888", balance: 64000 },
    { name: "Segun Olumide", accountNumber: "1314151617", pin: "9999", balance: 72000 },
    { name: "Morounkeji Ajayi", accountNumber: "1415161718", pin: "0000", balance: 54000 },
    { name: "Taiwo Bankole", accountNumber: "1516171819", pin: "2468", balance: 31000 },
    { name: "Kehinde Balogun", accountNumber: "1617181920", pin: "1357", balance: 88000 },
    { name: "Folake Akinbiyi", accountNumber: "1718192021", pin: "2469", balance: 41000 },
    { name: "Ayoola Oyewole", accountNumber: "1819202122", pin: "1359", balance: 94000 },
    { name: "Modupeola Shonibare", accountNumber: "1920212223", pin: "1478", balance: 36000 },
    { name: "Oladimeji Adekunle", accountNumber: "2021222324", pin: "2580", balance: 78000 }
  ];

  const popup = document.querySelector("#popup");
  const popupMessage = document.querySelector("#popup-message");
  const popupClose = document.querySelector("#popup-close");

  let currentUser = null;

  function showDashboard(user) {
    currentUser = user;
    popupMessage.innerHTML = `
      <h3>Welcome, ${user.name}</h3>
      <p>Account Number: ${user.accountNumber}</p>
      <p><strong>Balance:</strong> ₦${user.balance}</p>
      <div class="actions">
        <button onclick="checkBalance()">Check Balance</button>
        <button onclick="withdraw()">Withdraw</button>
        <button onclick="sendMoney()">Send Money</button>
        <button onclick="payBill()">Pay Bill</button>
      </div>
      <div id="action-area"></div>
    `;
    popup.style.display = "block";
  }

  // Close popup
  popupClose.onclick = () => {
    popup.style.display = "none";
    currentUser = null;
  };

  // Login process
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const accNum = accNumInput.value.trim();
    const accPin = accPinInput.value.trim();

    const user = users.find(
      (u) => u.accountNumber === accNum && u.pin === accPin
    );

    if (user) {
      showDashboard(user);
      form.reset();
    } else {
      alert("Invalid account number or PIN.");
    }
  });

  // --- Banking Actions ---
  window.checkBalance = function() {
    document.getElementById("action-area").innerHTML = `
      <p>Your balance is: <strong>₦${currentUser.balance}</strong></p>
    `;
  };

  window.withdraw = function() {
    document.getElementById("action-area").innerHTML = `
      <h4>Withdraw Money</h4>
      <input type="number" id="withdraw-amount" placeholder="Enter amount" />
      <button onclick="confirmWithdraw()">Confirm</button>
    `;
  };

  window.confirmWithdraw = function() {
    const amount = parseFloat(document.getElementById("withdraw-amount").value);
    if (isNaN(amount) || amount <= 0) {
      alert("Invalid amount!");
      return;
    }
    if (amount > currentUser.balance) {
      alert("Insufficient funds!");
      return;
    }
    currentUser.balance -= amount;
    showDashboard(currentUser);
    alert(`Withdrawal of ₦${amount} successful!`);
  };

  window.sendMoney = function() {
    document.getElementById("action-area").innerHTML = `
      <h4>Send Money</h4>
      <input type="text" id="receiver-acc" placeholder="Receiver Account Number" />
      <input type="number" id="send-amount" placeholder="Amount" />
      <button onclick="confirmSend()">Send</button>
    `;
  };

  window.confirmSend = function() {
    const receiverAcc = document.getElementById("receiver-acc").value.trim();
    const amount = parseFloat(document.getElementById("send-amount").value);
    const receiver = users.find(u => u.accountNumber === receiverAcc);

    if (!receiver) {
      alert("Receiver not found!");
      return;
    }
    if (isNaN(amount) || amount <= 0) {
      alert("Invalid amount!");
      return;
    }
    if (amount > currentUser.balance) {
      alert("Insufficient funds!");
      return;
    }

    currentUser.balance -= amount;
    receiver.balance += amount;
    showDashboard(currentUser);
    alert(`You sent ₦${amount} to ${receiver.name}`);
  };

  window.payBill = function() {
    document.getElementById("action-area").innerHTML = `
      <h4>Pay Bill</h4>
      <input type="text" id="bill-type" placeholder="Bill type (e.g. Electricity)" />
      <input type="number" id="bill-amount" placeholder="Amount" />
      <button onclick="confirmBill()">Pay</button>
    `;
  };

  window.confirmBill = function() {
    const billType = document.getElementById("bill-type").value;
    const amount = parseFloat(document.getElementById("bill-amount").value);

    if (isNaN(amount) || amount <= 0) {
      alert("Invalid amount!");
      return;
    }
    if (amount > currentUser.balance) {
      alert("Insufficient funds!");
      return;
    }

    currentUser.balance -= amount;
    showDashboard(currentUser);
    alert(`You paid ₦${amount} for ${billType}`);
  };
});
