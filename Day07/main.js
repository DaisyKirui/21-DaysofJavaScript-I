let array1 = [];
console.log(array1);
let array2 = [1, 2, 3];
console.log(array2);
console.log(array2[2]);

// function, that appends values to an array - fff

//updating array
let seasons = ["summer", "winter", "fall", "spring"];
console.log(seasons);
seasons[2] = "autumn";
console.log(seasons);

//nest arrays
const array3 = [1, 2, [3, 4]];
console.log(array3[2]);
console.log(array3[2][1]);

//looping in an array
const animals = ["Cow", "Sheep", "Goat"];
//console.log(animals.length)
for (let i = 0; i < animals.length; i++) {
  console.log("I am " + animals[i]);
}

//.push array method
animals.push("chicken", "pig");
console.log(animals);

//.pop array method
animals.pop();
console.log(animals);

//.shift array method
animals.shift();
console.log(animals);
console.log(animals.shift());

//.unshift array method
animals.unshift("birds");
console.log(animals);
console.log(animals.unshift());

//.slice array method
const insects = ["ants", "bees", "flies", "bug"];
console.log(insects);
const insects2 = insects.slice(1, 3);
console.log(insects2);

//.forEach
const vegetables = ["tomatoes", "onions", "cabbages"];
vegetables.forEach(function (vegetable) {
  console.log("I am a " + vegetable);
});

//.map
let numbers = [1, 2, 3, 4, 5];
numbers = numbers.map((numbers) => {
  return numbers * 10;
});

console.log(numbers);

//.findindex, .reduce() (research and use in the tasks for today)

let person = {
  name: "Tom",
  age: 70,
  village: "Panama",
};

person.name = "Isaac";
console.log(person.name);
console.log(person["age"]);

person.age = 71;
console.log(person.age);
console.log(person);
delete person.village;
console.log(person);

//built in method - methods that exist in JavaScript
//object methods - creating our own methods

const alienShip = {
  color: "black", //property
  invade: function () {
    //method
    console.log("I have come to invade planet Earth");
  },
  attack: function () {
    console.log("I am attacking");
  },
};

alienShip.invade();
alienShip.attack();

const company = {
  employees: {
    CEO: "Alice",
    CFO: "Brian",
    SocialMedia: "Daisy",
  },

  departments: {
    Engineering: "Civil Engineers",
    Kitchen: "chef",
  },
};

console.log(company.departments.Kitchen);

const spaceShip = {
  color: "pink",
  homePlanet: "Earth",
};

let paintIt = (spaceShip) => {
  color = 'blue'
}

paintIt()
 console.log(spaceShip.color)

let SpaceShip2 ={
  crew :{
    captain: {
      name: 'Joy',
      age: '30'
    },

    firstAider: {
      name: 'Fiona',
      age: 19
    },

    pilot: {
      name: 'Jack',
      age: 26
    }
  }
}

for (let crewMember in SpaceShip2.crew){
  console.log('I am ' + SpaceShip2.crew[crewMember].name + ',I am ' + crewMember + ' and I am ' + SpaceShip2.crew[crewMember].age + 'years old')
}

// 'this' keyword
const goat = {
  diet: 'herbivore',
  makeSound: function (){
    console.log('baa')
  },
  meal () {
    console.log(this.diet)
  }
}

goat.meal()
goat.makeSound()