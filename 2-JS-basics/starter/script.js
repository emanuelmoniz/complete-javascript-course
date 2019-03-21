/*
* variables and data types
*/

/*
var firstName = "Emanuel";
console.log(firstName);

var lastName = "Moniz";
var age = 30;

var fullAge = true;
console.log(fullAge);

var job; // varable without assignment

console.log(job); // print undefined

job = "teacher";

console.log(job);
*/

/*

var firstName = "Emanuel";
var age = 31;

console.log(firstName + " " + age);

var job, isMarried;
job = "Full Stack Developer";
isMarried = false;

console.log(firstName + " is a " + age + " years old " + job + ". Is he Married? " + isMarried);

age = "thirty";
job = "web developer";

alert(firstName + " is a " + age + " years old " + job + ". Is he Married? " + isMarried)

var lastName = prompt('What is his last Name?');
console.log(firstName + " " + lastName);
*/

// math operators
/*
const now = 2019;
const yearJohn = 1990;
const yearMark = 1988;

let ageJohn = now - yearJohn;
let ageMark = now - yearMark;

console.log(ageMark);

console.log(now + 2);
console.log(now - 2);
console.log(now / 10);

//logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
*/


/*
// operators precedence
const now = 2019;
const yearJohn = 1988;
const yearMark = 1990;
const fullAge = 18;

// multiple operators
let isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

//grouping
let ageJohn = now - yearJohn;
let ageMark = now - yearMark;
let average = (ageJohn + ageMark) / 2;
console.log(average);

//multiple assignments
let x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);
*/

//1st ex
/*
var johnMass, johnHeight, johnBMI, markMass, markHeight, markBMI, markHigerBMI;
johnMass = 85;
johnHeight = 1.8;
markMass = 76;
markHeight = 1.7;

johnBMI = johnMass / (johnHeight * johnHeight);
markBMI = markMass / (markHeight * markHeight);

markHigerBMI = markBMI > johnBMI;

console.log("Is Mark's BMI higher than John's? " + markHigerBMI);
*/

//if statemnts

/*
var firstName = "John";
var civilStatus = "married";

if (civilStatus === "married") {
  console.log(firstName + " is married");
} else {
  console.log(firstName + " will marrie soon.");
}

var isMarried = civilStatus === "married";

if (isMarried) {
  console.log(firstName + " is married");
} else {
  console.log(firstName + " will marrie soon.");
}
*/

/*
var johnMass, johnHeight, johnBMI, markMass, markHeight, markBMI;
johnMass = 85;
johnHeight = 1.8;
markMass = 50;
markHeight = 1.7;

johnBMI = johnMass / (johnHeight * johnHeight);
markBMI = markMass / (markHeight * markHeight);

if (markBMI > johnBMI) {
  console.log("Is Mark's BMI higher than John's?");
} else {
  console.log("Is Mark's BMI lower than John's?");
}
*/

var firstName = "John";
var age = 21;

if (age < 13) {
  console.log(firstName + " is a boy.");
} else if (age >= 13 && age < 20) {
  console.log(firstName + " is a teenager.");
} else {
  console.log(firstName + " is a man.");
}
