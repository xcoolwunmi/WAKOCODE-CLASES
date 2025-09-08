// Creating the person object
const person = {
  name: "Solomon",   // Replace with your actual name
  age: 25,           // Replace with your age
  city: "Ekiti",     // Replace with your city

  // Method to introduce the person
  introduce: function() {
    return `Hi, my name is ${this.name}. I am ${this.age} years old and I live in ${this.city}.`;
  }
};

// Logging the person object
console.log(person);

// Calling and logging the introduce method
console.log(person.introduce());
