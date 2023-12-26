//Difficulty Level: Low

//ejercicio 1
const myName = 'Nico';
console.log(myName);

//ejercicio 2
const myLastName = 'Ceballos';

//ejercicio 3
const myAge = 35;

//ejercicio 4
const myPet = 'Rodolfo';

//ejercicio 5
const myPetAge = 5;

//ejercicio 6
let myFullName = `${myName} ${myLastName}`;
console.log(myFullName)

//ejercicio 7


//---------------------------------------

//Difficulty Level: Medium

//ejercicio 1
let sumAges = myAge + myPetAge;
let subtractAges = myAge - myPetAge;
let productAges = myAge * myPetAge;
let divisionAges = myAge / myPetAge;

console.log("Sum of ages: " + sumAges);
console.log("Difference of ages: " + subtractAges);
console.log("Product of ages: " + productAges);
console.log("Division of ages: " + divisionAges);

//ejercicio 2
let student = {
    name: myName,
    lastName: myLastName,
    age: myAge,
    favoriteFood: 'milanesas con papas fritas',
    height: 1.99,
}
console.table(student);

//ejercicio 3
let pet = {
    name: 'Rodolfo',
    age: 5,
    color: 'black',
    race: 'cat',
    owner: student,
}
console.table(pet)

//ejercicio 4
let friuts = ['manzana', 'banana', 'mandarina', 'anana', 'uvas'];

console.log(friuts);
console.table(friuts);

//Difficulty Level: High
//ejercicio 1
let userAge = prompt('What is your age? (18+)');

let iAmAdult = userAge >= 18;

console.log('I am an adult because i have ' + userAge + " years old.");

//ejercicio 2
let numbers = [1, 2, 3, 4, 5];

console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);

//ejercicio 3
var family = [
    {name: "miguel", age: 73, relation: "padre"},
    {name: "liliana", age: 64, relation: "madre"},
    {name: "ana", age: 32, relation: "hermana"},
    {name: "cristian", age: 34, relation: "amigo"},
    {name: "claudia", age: 35, relation: "novia"},
  ];
  console.table(family);

  //ejercicio 4
  let randomText ="the fruit i love is " + friuts[1] + " also my favorite number is " + numbers[3] + " and my favourite person is " + family[4].name;

  console.log(randomText);
