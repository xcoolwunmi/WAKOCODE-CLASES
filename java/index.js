// Introduction to JavaScript Object:
// Create an object named person with the following properties:
// name: Your name.
// age: Your age.
// city: Your city.


let person = {
    name: 'Solomon',
    age: 25,
    city: 'Ekiti',
}
   

console.log(person)


// Object Method:
// Add a method named introduce to the person object.
// The introduce method should return a string introducing the person with their name, age, and city.
// Call the introduce method and log the result to the console.

console.log(`${person.name} is my name`);
console.log(`I am ${person.age} years old`);
console.log(`I live in ${person.city}`);

// The Script Tag:
// Create an HTML file named index.html.
// Inside the HTML file, use the <script> tag to link an external JavaScript file named script.js.
// Write JavaScript code in the script.js file to create the person object and define the introduce method.
// Use the <script> tag to include the script.js file at the end of the HTML body.

//  Mini Project:
// Enhance the person object by adding additional properties such as email, phone, and interests.
// Implement methods for updating and displaying the additional properties.
// Create a simple HTML form in the index.html file to allow users to update the person object's properties.
// Use JavaScript to handle form submission and update the person object accordingly.
