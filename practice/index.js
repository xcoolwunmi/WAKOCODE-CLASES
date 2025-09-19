let NameArr = [
  "Simon Peter",
  "Andrew",
  "James",
  "John",
  "Philip",
  "Bartholomew",
  "Thomas",
  "Matthew",
  "James",
  "Simon",
  "Thaddaeus",
  "Judas",
];

for (let name of NameArr) {
  if (name === "Simon Peter") {
    console.log( `${name} denined Jesus`);
  } else if (name === "Judas") console.log(name + " " + "betrayed Jesus");
  else console.log(name + " " + "is faithful till the end");
}

