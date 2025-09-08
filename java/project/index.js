// Enhanced person object
const person = {
  name: "Solomon",
  age: 25,
  city: "Lagos",
  email: "solomon@example.com",
  phone: "08012345678",
  interests: ["Football", "Music", "Coding"],

  introduce: function() {
    return `Hi, my name is ${this.name}. I am ${this.age} years old and I live in ${this.city}.`;
  },

  updateDetails: function(newDetails) {
    Object.assign(this, newDetails);
  },

  displayDetails: function() {
    return `
      Name: ${this.name}
      Age: ${this.age}
      City: ${this.city}
      Email: ${this.email}
      Phone: ${this.phone}
      Interests: ${this.interests.join(", ")}
    `;
  }
};

// Display person details in the <pre> tag
const personDetails = document.getElementById("personDetails");
personDetails.textContent = person.displayDetails();

// Handle form submission
document.getElementById("personForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get form values
  const newDetails = {
    name: document.getElementById("name").value,
    age: parseInt(document.getElementById("age").value),
    city: document.getElementById("city").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    interests: document.getElementById("interests").value.split(",").map(i => i.trim())
  };

  // Update person object
  person.updateDetails(newDetails);

  // Display updated details
  personDetails.textContent = person.displayDetails();

  // Log to console
  console.log(person);
  console.log(person.introduce());
});
