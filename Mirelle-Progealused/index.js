// this is my first javascript code

console.log('hello world');
let name2 = "Mirl";

console.log(name2);

//console.log(age2);
//console.log(isApproved2);

let interestRate = 0.3;
interestRate = 1
console.log(interestRate);
// kasuta defaultina const ja let ainult siis
// kui vaja anda uus väärtus
//let name = 'Mirl'; // String literal
let age2 = 22; // Number literal
let isApproved2 = false; // Boolean literal
let firstName = undefined;
let lastName = undefined;
let selectedColor = null;

console.log(age2)
let person = {
    name: 'Mirl',
    age: 21
};

console.log(person);

// Dot notation
person.name2 = 'Mirl';

// Bracket notation
person['name'] = 'Mirl';

console.log(person.name);

let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors.length);

//performing a task
function greet(name) {
    console.log('Hello ' + name + '' + lastName);
}
//calculating a value
function square(number) {
    return number * number;
}

console.log(square(2));

greet('John', 'Smith');
greet('Mary');

const küljepikkus = 5
const pindala = küljepikkus * küljepikkus
console.log('Ruudu pindala on:', pindala);


const nimi = 'Mirelle'
const year = 2002
const currentYear = 2024
let age = currentYear - year


function greetUser(nimi3) {
    return 'Tere, ' + nimi3 + '!'
}

console.log(greetUser('Malle'));

let age5 = 64;
if (age5 < 18) {
    console.log("alaealine");

}
else if (age5 >= 18 && age5 <= 65) {
    console.log("täisealine");
}

else {

    console.log("pensionär");
}

function kontrolliPaarisVõiPaaritu(arv) {
    if (arv % 2 === 0) {
        return "Arv on paaris.";
    } else {
        return "Arv on paaritu.";
    }
}
console.log(kontrolliPaarisVõiPaaritu(5));

