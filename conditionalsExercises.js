//Difficulty Level: Low
//ejercicio 1

let num1 = 4;
let num2 = 5;

if (num1 > num2) {
  console.log(num1);
} else {
  console.log(num2);
}

//ejercicio 2
if (num1 > num2) {
  console.log(num1);
} else if (num1 < num2) {
  console.log(num2);
} else {
  console.log("they are equal");
}

//ejercicio 3
if (num1 === num2) {
  console.log("The numbers are equal");
} else {
  console.log("The numbers are different");
}

//ejercicio 4
let date1 = "2018-9-2";
let date2 = "2023-7-5";

if (date1 > date2) {
  console.log(`The date ${date1} is greater than the date ${date2}`);
} else if (date2 > date1) {
  console.log(`The date ${date2} is greater than the date ${date1}`);
} else {
  console.log("The dates are the same");
}

//ejercicio 5
let number1 = 5;
let number2 = 7;
let number3 = 9;

if (number1 > number2 && number1 > number3) {
  console.log(`The number ${number1} is the largest`);
} else if (number2 > number1 && number2 > number3) {
  console.log(`The number ${number2} is the largest`);
} else {
  console.log(`The number ${number3} is the largest`);
}

//Difficulty Level: Medium
//ejercicio 1
let color = "blue";

switch (color) {
  case "red":
    console.log("The color of passion");
    break;
  case "blue":
    console.log("The color of the sea.");
    break;
  case "green":
    console.log("The color of nature");
    break;
  default:
    console.log("Unknown color");
}

//ejercicio 2
let numero1 = prompt("Ingresa un numero");
let numero2 = prompt("Ingresa otro numero");
let operation = prompt("Ingresa la operacion a realizar: addition para sumar, subtraction para restar, multiplication para multiplicar, division para dividir").toLowerCase();

switch (operation) {
  case "addition":
    console.log(`la suma de ${numero1} y ${num2} es: ${numero1 + numero2}`);
    break;
  case "subtraction":
    console.log(`la resta de ${numero1} y ${numero2} es: ${numero1 - numero2}`);
    break;
  case "multiplication":
    console.log(`la multiplicacion de ${numero1} y ${numero2} es: ${numero1 * numero2}`);
    break;
  case "division":
    console.log(`la division de ${numero1} y ${numero2} es: ${numero1 / numero2}`);
    break;
  default:
    console.log("Invalid operation");
}

//ejercicio 3
let person1 = {
  name: "Juan",
  age: 39,
  height: 1.69
};

let person2 = {
  name: "Rosa",
  age: 35,
  height: 1.65
};

if (person1.height > person2.height) {
  console.log(`${person1.name} is taller`);
} else {
  console.log(`${person2.name} is taller`);
}

if (person1.age > person2.age) {
  console.log(`${person1.name} is older`);
} else {
  console.log(`${person2.name} is older`);
}

//ejercicio 4
let age = prompt("Enter your age:");
let height = prompt("Enter your height (in cm):");
let vision = prompt("Enter your vision (out of 10):");

if (age >= 18 && height > 110 && vision >= 8) {
  console.log("You are qualified to drive");
} else {
  console.log("You are not qualified to drive");
}

//ejercicio 5
if (age >= 0 && age <= 12) {
  console.log("You are an infant");
} else if (age >= 13 && age <= 18) {
  console.log("You are an adolescent");
} else if (age >= 19 && age <= 45) {
  console.log("You are an older young");
} else if (age > 45 && age <= 100) {
  console.log("You are elderly");
} else {
  console.log("Is he really that old?");
}

//ejercicio 6
let unoATres = prompt("Enter a number (1 to 3):");

switch (unoATres) {
  case "1":
    console.log(`The number entered is ${unoATres}`);
    break;
  case "2":
    console.log(`Twice the number entered is ${unoATres * 2}`);
    break;
  case "3":
    console.log(`Three times the number entered is ${unoATres * 3}`);
    break;
  default:
    console.log("That value is not allowed");
}

//Difficulty Level: High
//ejercicio 1
let customer = {
  name: "Juan",
  pass: "vip",
  entrance: "yes"
};

if (customer.name === "Juan" || customer.pass === "vip") {
  let useTicket = confirm("Do you want to use your ticket?");
  if (useTicket) {
    console.log("Welcome! Enjoy the event.");
  } else {
    let buyTicket = confirm("Do you want to buy a ticket?");
    if (buyTicket) {
      let money = prompt("Enter available money:");
      if (money > 1000) {
        console.log("Successful sale! Welcome!");
      } else {
        console.log("Sales rejected. Farewell.");
      }
    } else {
      console.log("Farewell.");
    }
  }
} else {
  let buyTicket = confirm("Do you want to buy a ticket?");
  if (buyTicket) {
    let money = prompt("Enter available money:");
    if (money > 1000) {
      console.log("Successful sale! Welcome!");
    } else {
      console.log("Sales rejected. Farewell.");
    }
  } else {
    console.log("Farewell.");
  }
}
