// array = a variable like structure that can 
//         hold more than 1 value,  põhimõtteliselt nagu nimekiri

/*let fruits = ["apple", "orange", "banana",];


fruits.push("coconut");  //add an element to the end
fruits.pop();            //removes last element
fruits.unshift("mango"); //add element to beginning
fruits.shift();          //removes element from beginning

fruits[2] = "coconut";

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

let numOfFruits = fruits.length;
let index = fruits.indexOf("mango");

console.log(numOfFruits);
console.log(index);

for (let i = fruits.length; i < fruits.length; i--) {
    console.log(fruits[i]);
}

for (let fruit of fruits) {
    console.log(fruit);
}

fruits.sort(); //sorteerib tähestiku järjekorras
fruits.sort().reverse(); // tagurpidi tähestik
*/



// spread operator =  ... allows an iterable such as an
//                                  array or string to be expanded
//                                   in to separate elements
//                                  (unpacks the elements)

// pmst võtab nt nimekirjast erinevad elemendid eraldi välja ja esitab need


/*let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers); //leiab kõige suurema numbri, peab ... ette panema see on spread operator
let minimum = Math.min(...numbers); // leiab kõige väiksema numbri

console.log(maximum);

let username = "Bro Code";
let letters = [...username].join("-"); //joinib tähed uuesti kokku

console.log(letters); // näitab  stringi ehk sõna igat tähte eraldi


let fruits = ["apple", "orange", "banana"];
let newFruits = [...fruits];

console.log(newFruits);
let vegetables = ["carrots", "celery", "potatoes"];
let foods = [...fruits, ...vegetables, "eggs", "milk"];

console.log(foods);*/




// rest parameters = (...rest) allow a function work with a variable number of arguments by bundling them into an array
//pmst võib panna lõpmata arvu elemente kokku ühte nimekirja

//               spread = expands an array into separate elements
//               rest = bundles separate elements into an array

// ------- EXAMPLE 1 -------
function openFridge(...foods) {
    console.log(...foods);
}
function getFood(...foods) {
    return foods;
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

//openFridge(food1, food2, food3, food4, food5);

const foods = getFood(food1, food2, food3, food4, food5);
console.log(foods);

// ------- EXAMPLE 2 -------
function sum(...numbers) {

    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}

const total = sum(1, 2, 3, 4, 5);

console.log(`Your total is $${total}`);


function getAverage(...numbers) {

    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result / numbers.length;
}

const average = getAverage(75, 100, 85, 90, 50);

console.log(average);

// ------- EXAMPLE 3 -------
function combineStrings(...strings) {
    return strings.join(" ");
}

const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III");

console.log(fullName);


// object = A collection of related properties and/or methods
// meetodid on funktsioonid mis on objektil ja propertyd on objekti omadused nt eesnimi ja pknimi
//                Can represent real world objects (people, products, places)
//                object = {key:value,
//                                 function()}
// objekt on kollektsioon siis objekti väärtustest nt. nimed ja tema funktsioonidest
/*
const person1 = {
    firstName: "Spongebob",  // property, see on key value pair ehk property ja väärtus
    lastName: "Squarepants", // property
    age: 30,
    isEmployed: true,
    sayHello: function () { console.log("Hi! I am Spongebob!") },  // meetod
    eat: function () { console.log("I am eating a Krabby Patty") },
}

const person2 = {
    firstName: "Patrick",  // property, see on key value pair ehk property ja väärtus
    lastName: "Star", // property
    age: 42,
    isEmployed: false,
    sayHello: () => { console.log("Hey, Im Patrick...") },  // meetod, ; ei kasuta lõpus
    eat: function () { console.log("I am eating a pizza") },
}

console.log(person1.firstName); // logid objekti ja ss selle väärtuse, ehk siis Spongebob logitakse
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);

person1.sayHello();
person1.eat();

person2.sayHello();
person2.eat();*/



// this = reference to the object where THIS is used
//           (the object depends on the immediate context)
// person.name = this.name  ehk siis kui objektil on varasemalt deklareeritud juba nimi siis console. logides ei pea uuesti panema objekti nime vaid võib panna this.name kuna teame et räägime sellest objektist, peab olema {} sees tho

const person1 = {
    name: "Spongebob",
    favFood: "hamburgers",
    sayHello: function () { console.log(`Hi! I am ${this.favFood}`) },
    eat: function () { console.log(`${this.name} is eating ${this.favFood}`) }
}
const person2 = {
    name: "Patrick",
    favFood: "pizza",
    sayHello: function () { console.log(`Hi! I am ${this.favFood}`) },
    eat: function () { console.log(`${this.name} is eating ${this.favFood}`) }
}

person1.sayHello();
person1.eat();
person2.eat();


// constructor = special method for defining the
//                          properties and methods of objects
// eriline viis kuidas esitleda objekti väärtusi ja meetodeid(funktsioone) see on kasulik kuna seda funktsiooni saab uuesti kasutada mitmel erineval objektil

function Car(make, model, year, color) {
    this.make = make,
        this.model = model,
        this.year = year,
        this.color = color,
        this.drive = function () { console.log(`You drive the ${this.model}`) }
}

const car1 = new Car("Ford", "Mustang", 2024, "red");
const car2 = new Car("Chevrolet", "Camaro", 2025, "blue");
const car3 = new Car("Dodge", "Charger", 2026, "silver");

car1.drive();
car2.drive();
car3.drive();

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);

console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);