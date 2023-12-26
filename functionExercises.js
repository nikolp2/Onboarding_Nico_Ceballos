//Difficulty Level: Low
//ejercicio 1
function add() {
    console.log(100 * 20);
}

//ejercicio 2
add();

//ejercicio 3
function addWithReturn(param1, param2) {
    let result = param1 * param2;
    return result;
}  
addWithReturn(2, 5);
console.log(addWithReturn(2, 5));

//Difficulty Level: Medium
//ejercicio 1
function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet("nicolas");

//ejercicio 2
let multiplyNumbers = function (num1, num2) {
    return num1 * num2;
};  

let result1 = multiplyNumbers(5, 3);
let result2 = multiplyNumbers(7, 2);

console.log(result1);
console.log(result2);

//ejercicio 3
function area(base, height) {
    return 0.5 * base * height;
}

let areaResult = area(5, 8);
console.log(areaResult);

//ejercicio 4
function perimeter(side1, side2, side3) {
    return side1 + side2 + side3;
}

let perimeterResult = perimeter(3, 4, 5);
console.log(perimeterResult);

//ejercicio 5
function totalPrice(price, quantity) {
    let total = price * quantity;  
    if (quantity >= 20) {
      total *= 0.8; // 20% de descuento
    } else if (quantity >= 10) {
      total *= 0.9; // 10% de descuento
    }
  
    return total;
}

let finalPrice = totalPrice(10, 25);
console.log(finalPrice);

//ejercicio 6
function isAnAdult(age) {
    if (age >= 18) {
      return "You are an adult";
    } else {
      return "You are not an adult";
    }
} 

console.log(isAnAdult(25));
console.log(isAnAdult(15));
  
//Difficulty Level: High
//ejercicio 1
function calculateTax(income) {
    if (income <= 10000) {
      return income * 0.1; // 10% de impuesto
    } else if (income <= 20000) {
      return income * 0.15; // 15% de impuesto
    } else {
      return income * 0.2; // 20% de impuesto
    }
}  

let taxAmount1 = calculateTax(15000);
let taxAmount2 = calculateTax(35000);
console.log(taxAmount1);
console.log(taxAmount2);

//ejercicio 2
function checkBusinessDay(day) {
    switch (day) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        return "It is a business day.";
      case 6:
      case 7:
        return "It's the weekend.";
      default:
        return "Invalid day";
    }
}  

console.log(checkBusinessDay(2));
console.log(checkBusinessDay(7));
console.log(checkBusinessDay(11));

//ejercicio 3
function enterPersonalInformation() {
    let name = prompt("Enter your name:");
    if (!name.trim()) {
      console.error("The name cannot be empty");
      return;
    }
  
    let lastName = prompt("Enter your last name:");
  
       if (lastName.trim().toLowerCase() === name.trim().toLowerCase()) {
      console.error("Last name cannot be the same as the name");
      return;
    }
  
    let age = prompt("Enter your age:");
  
    if (isNaN(age) || age.trim() === "") {
      console.error("Invalid age");
      return;
    }
  
    let personalInfo = {
      firstName: name,
      lastName: lastName,
      age: parseInt(age)
    };
    
}
console.table(personalInfo);
enterPersonalInformation();

//ejercicio 4
function greet(name) {
    return `Hello, my name is ${name}`;
}

function calculateAge(birthYear, currentYear) {
    return currentYear - birthYear;
}
function present() {

    let name = prompt("Enter your name:");
    let birthYear = prompt("Enter your birth year:");
    let greeting = greet(name);
    let age = calculateAge(parseInt(birthYear), new Date().getFullYear());  

    alert(`${greeting}\nYour age is ${age}`);
}  

present();  