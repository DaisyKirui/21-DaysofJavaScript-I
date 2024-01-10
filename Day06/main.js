//if statement

let name = "Daisy";

if (name === "Daisy") {
  console.log("This is Daisy");
}

// if...else

if (name === "Daisy") {
  console.log("This is Daisy");
} else {
  console.log("This is not Daisy");
}

//else... if

if (name === "Daisy") {
  console.log("This is Daisy");
} else if (name === "Briana") {
  console.log("This is Briana");
} else {
  console.log("This is not Briana or Daisy");
}

//switch statements
let age = 32;
switch (age) {
  case age <= 18:
    console.log("Cannot drink alcohol");
    break;
  case age >= 65:
    console.log("Can retire");
    break;
  default:
    console.log("Can work");
}

//for Loop

for (let counter = 0; counter <= 4; counter++) {
  console.log(counter);
}

//while loop

let i = 0;
while (i <= 4) {
  console.log(i);
  i++;
}

// do...while
let countString = "";

console.log(countString);

i = 1;
do {
  countString = countString + i;
  i++;
} while (i <= 7);

console.log(countString);

// function declaration

function greet() {
  console.log("Hi");
}

greet(); // calling/invoking/executing

function greetPeople(myName) {
  console.log("Hi " + myName);
}

greetPeople("Felix");
greetPeople("Mary");

function rectangleArea(width, height) {
  let area = width * height;
  return area;
}

console.log(rectangleArea(9, 10));

function monitorCount(rows, columns) {
  return rows * columns;
}

const numofMonitors = monitorCount(4, 5);
console.log(numofMonitors);

// function expressions

let calculateArea = function (width, height) {
  const areaTwo = width * height;
  return areaTwo;
};

console.log(calculateArea(3, 18));

// arrow functions

const squareArea = (length) => {
  let areaThree = length ** 2;
  return areaThree;
};

console.log(squareArea(7));