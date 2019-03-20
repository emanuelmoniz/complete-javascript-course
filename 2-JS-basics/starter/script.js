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
