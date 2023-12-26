//Difficulty Level: Low
//ejercicio 1
let userInput = prompt("Enter a number between 1 and 100:");

if (userInput >= 1 && userInput <= 100) {
  for (let i = userInput; i >= 0; i--) {
    console.log(i);
  }
} else {
  console.error("Invalid input. Please enter a number between 1 and 100.");
}

//ejercicio 2
let usInput = prompt("Enter a number between 1 and 10:");

if (usInput >= 1 && usInput <= 10) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${i} x ${usInput} = ${i * usInput}`);
  }
} else {
  console.error("Invalid input. Please enter a number between 1 and 10.");
}

//ejercicio 3
let sum = 0;
let uInput = parseInt(prompt("Enter a number (enter 0 to finish):"));

while (uInput !== 0) {
  sum += uInput;
  uInput = parseInt(prompt("Enter another number (enter 0 to finish):"));
}

console.log(`The sum of the numbers is: ${sum}`);

//ejercicio 4
let suma = 0;
let usuario;

do {
  usuario = parseInt(prompt("Enter a number (enter 0 to finish):"));
  suma += usuario;
} while (usuario !== 0);

console.log(`The sum of the numbers is: ${suma}`);

//ejercicio 5
let myObject = {
    name: "nicolas",
    lastName: "ceballos",
    origin: "argentina",
    studies: "full-stack developer",
};
  
for (let key in myObject) {
    console.log(key);
}

//Difficulty Level: Medium
//ejercicio 1
let secretNumber = 7;
let attempts = 0;
let guess;

do {
  guess = parseInt(prompt("Guess the secret number:"));

  if (guess > secretNumber) {
    console.log("The number entered is greater than the secret.");
  } else if (guess < secretNumber) {
    console.log("The number entered is less than the secret.");
  }

  attempts++;
} while (guess !== secretNumber);

console.log(`You got it right! The secret number was ${secretNumber} and you made ${attempts} attempts.`);

//ejercicio 2
let number = parseInt(prompt("Enter a number:"));

console.log(`The divisors of ${number} are:`);

for (let i = 1; i <= number; i++) {
  if (number % i === 0) {
    console.log(i);
  }
}

//ejercicio 3
function RingBell() {
    console.log("Penny");
    return "Penny, ";
}
  
let numberOfDings = parseInt(prompt("Enter the number of dings:"));
let bellSound = "";
  
for (let i = 0; i < numberOfDings; i++) {
    bellSound += RingBell();
}
  
console.log(bellSound);

//ejercicio 4
const dateLimit = new Date("1997-08-03");
const dates = ["1984-02-18", "1998-03-02", "1973-07-15", "2024-10-31", "2081-01-09"];

for (let date of dates) {
  if (new Date(date) >= dateLimit) {
    console.log(date);
  }
}

//ejercicio 5
let colors = ["Red", "Green", "Blue", "Violet", "Brown", "Black", "White"];

for (let color of colors) {
  console.log(color);
}

//ejercicio 6
function displayColors(colorArray) {
    for (let color of colorArray) {
      console.log(color);
    }
  } 
 
  displayColors(colors);

//ejercicio 7
let numeros = [5, 7, 1, 3, 50];

for (let number of numeros) {
  console.log(`The number is ${number} and its double is ${number * 2}`);
}

//ejercicio 8
let familyMembers = [
    { name: 'Maria Lopez', 'last-name': 'Lopez', age: 40, member: 'mother' },
    { name: 'Juan Perez', 'last-name': 'Perez', age: 38, member: 'father' },
    { name: 'Romina Perez', 'last-name': 'Perez', age: 13, member: 'daughter' },
    { name: 'Tomas Perez', 'last-name': 'Perez', age: 10, member: 'son' }
  ];
  
  function presentFamilyMembers(familyArray) {
    for (let member of familyArray) {
      console.log(`Hello, I am ${member.name} (${member.member}) and I am ${member.age} years old.`);
    }
  }
  
  presentFamilyMembers(familyMembers);

//Difficulty Level: High
//ejercicio 1
let evenSum = 0;
let oddSum = 0;
let ingreso;

do {
  ingreso = parseInt(prompt("Enter a number (enter 0 to finish):"));

  if (ingreso % 2 === 0) {
    evenSum += ingreso;
  } else {
    oddSum += ingreso;
  }

} while (ingreso !== 0);

console.log(`Even numbers sum: ${evenSum}`);
console.log(`Odd numbers sum: ${oddSum}`);

//ejercicio 2
let numbersArray = [15, 28, 10, 5, 42, 8, 35, 19, 27, 14];
let largestNumber = numbersArray[0];

for (let number of numbersArray) {
  if (number > largestNumber) {
    largestNumber = number;
  }
}

console.log(`The largest number in the array is: ${largestNumber}`);


  


