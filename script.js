//Let and Const
/*
//ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';

//ES6
const name6 = 'Jaclyn Rosenberg'; //variable will never change
let age6 = 31; //variable will change
//name6 = 'Jaclyn Rubin'; produces error

//ES5
function driversLicense5(passedTest) {
  if(passedTest) {
    var firstName = ('Greg');
    var yearOfBirth = 1986;
  }
  console.log(firstName + ', '+ yearOfBirth);
}
driversLicense5(true);

//ES6 - blocked scope, console.log only works within the variable block
//Provides error when variable is called before creating instead of giving undefined
function driversLicense6(passedTest) {
  let firstName;
  const yearOfBirth = 1986;
  if(passedTest) {
    firstName = ('Greg');
  }
  console.log(firstName + ', ' + yearOfBirth);
}
driversLicense6(true);

//let allows you to temporarily change the variable
let i = 23;
for(let i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i);
*/
///////////////////////////////////////////////////////////
//Blocks and IIFEs
/*
{
  //ES6
  const a = 1;
  let b = 2;
  //ES5
  var c = 3;
}
console.log(c);
console.log(a + b);
*/

///////////////////////////////////////////////////////////
//Strings in ES6
/*
let firstName = 'Greg';
let lastName = 'Rubin';
const yearOfBirth = 1986;
function calculateAge(year) {
  return 2017 - year;
}

//ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. He is ' + calculateAge(yearOfBirth) + ' years old.');

//ES6
console.log(`THis is ${firstName} ${lastName}. He was born in ${yearOfBirth}. He is ${calculateAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('G'));
console.log(n.endsWith('in'));
console.log(n.includes('eg'));
console.log(`${firstName} `.repeat(5));
*/
//////////////////////////////////////////////////////////////////
//Arrow Functions
/*
const years = [1990, 1965, 1982, 1937];

//ES5var
var ages5 = years.map(function(el) {
  return 2016 - el;
});
console.log(ages5);

//ES6
let ages6 = years.map(el => 2017 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2017 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element ${index + 1}: ${age}.`;
});
console.log(ages6);
*/
//////////////////////////////////////////////////////////////////////////////
//Arrow Functions 2

//ES5 'this' refers to window
/*
var box5 = {
  color: 'green',
  position: 1,
  clickMe: function(){
    var self = this;
    document.querySelector('.green').addEventListener('click', function() {
      var str = 'This is box number ' + self.position + ' and it is ' + self.color;
      alert(str);
    });
  }
};
//box5.clickMe();

//ES6
const box6 = {
  color: 'green',
  position: 1,
  clickMe: function(){
    document.querySelector('.green').addEventListener('click', () => {
      var str = 'This is box number ' + this.position + ' and it is ' + this.color;
      alert(str);
    });
  }
};
//box6.clickMe();

//Will not work as this refers to the window
const box66 = {
  color: 'green',
  position: 1,
  clickMe: () => {
    document.querySelector('.green').addEventListener('click', () => {
      var str = 'This is box number ' + this.position + ' and it is ' + this.color;
      alert(str);
    });
  }
};
box66.clickMe();
*/

//function Person(name) {
//  this.name = name;
//}

//ES5
/*
Person.prototype.myFriends5 = function(friends) {
  var arr = friends.map(function(el) {
    return this.name + ' is friends with ' + el;
  }.bind(this));
  console.log(arr);
};

var friends = ['Jared', 'Matt', 'Naushad'];
//new Person('Greg').myFriends5(friends);

//ES6
Person.prototype.myFriends5 = function(friends) {
  let arr = friends.map(el => `${this.name} is friends with ${el}`);
  console.log(arr);
};

let friends = ['Jared', 'Matt', 'Naushad'];
new Person('Greg').myFriends5(friends);
*/
///////////////////////////////////////////////////////////////////////
//Destructuring
/*
//ES5
//var john = ['John', 26];
//var name = john[0];
//var age = john[1];

//ES6
const [name, age] = ['John', 26];
console.log(name);
console.log(age);

const obj = {
  firstName: 'Greg',
  lastName: 'Rubin'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const{firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);

function calcAgeRetirment(year) {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirment(1990);
console.log(age2);
console.log(retirement);
*/
//////////////////////////////////////////////////////////////////////////////
//Arrays
/*
const boxes = document.querySelectorAll('.box');

//ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
  cur.style.backgroundColor = 'dodgerblue';
});

//ES6
const boxesArr6 = Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');

//ES5 for loop
for (var i = 0; i < boxesArr5.length; i++) {
  if (boxesArr5[i].className === 'box blue') {
    continue;
  }
  boxesArr5[i].textContent = 'I changed to blue!';
}

//ES6
for (const cur of boxesArr5) {
  if (cur.className.includes('blue')){
    continue;
  }
  cur.textContent = 'I changed to blue!';
}

//ES5 find full age
var ages = [12, 17, 8, 21, 14, 11];
var full = ages.map(function(cur) {
  return cur >= 18;
});
console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

//ES6 find full age
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));
*/
/////////////////////////////////////////////////////////////////////////////
//Spread Operator
/*
function addFourAges (a, b, c, d) {
  return a + b + c + d;
}
var sum1 = addFourAges(18, 30, 12, 21);

console.log(sum1);

//ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

//ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, 'Jackson', ...familyMiller];
console.log(bigFamily);

const hd1 = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [hd1, ...boxes];
Array.from(all).forEach(cur => cur.style.color = 'purple');
*/

/////////////////////////////////////////////////////////////////////////////
//Rest Parameters
/*
//ES5
function isFullAge5() {
  var argsArr = Array.prototype.slice.call(arguments);

  argsArr.forEach(function(cur) {
    console.log((2017 - cur) >= 18);
  });
}
isFullAge5(1990, 2000, 1965, 2016, 1995);

//ES6
function isFullAge6(...years) {
  years.forEach(cur => console.log((2017 - cur) >= 18));
}
isFullAge6(1990, 2000, 1965, 2016, 1995);

//ES5
function isFullAge5(limit) {
  var argsArr = Array.prototype.slice.call(arguments, 1);

  argsArr.forEach(function(cur) {
    console.log((2017 - cur) >= limit);
  });
}
isFullAge5(21, 1990, 2000, 1965, 2016, 1995);

//ES6
function isFullAge6(limit, ...years) {
  years.forEach(cur => console.log((2017 - cur) >= limit));
}
isFullAge6(16, 1990, 2000, 1965, 2016, 1995);
*/
///////////////////////////////////////////////////////////////////////////////
//Default Parameters
/*
//ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
  lastName === undefined ? lastName = 'Smith' : lastName;
  nationality === undefined ? nationality = 'American' : nationality;
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}
var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');

//ES6
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American') {
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}
var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');
*/
/////////////////////////////////////////////////////////////////////////////////
//Maps for hashmaps
/*
const question = new Map();
question.set('question', 'What is the official name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer!');
question.set(false, 'Wrong! LEARN JAVASCRIPT BRO!');
console.log(question.get('question'));
//console.log(question.size);
//if (question.has(4)) {
//  console.log('Question 4 exists');
//}

//question.clear();

//question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));

for( let [key, value] of question.entries()) {
  if (typeof(key) === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}
const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('correct')));
*/
///////////////////////////////////////////////////////////////////////////////
//Classes
/*
//ES5
var Person5 = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person5.prototype.calculateAge = function() {
  var age = new Date().getUTCFullYear() - this.yearOfBirth;
  console.log(age);
};

var john5 = new Person5('John', 1990, 'teacher');

//ES6
class Person6 {
  constructor (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }
  calculateAge() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
  }
  static greeting() {
    console.log('Hey there!');
  }
}
const john6 = new Person6('John', 1991, 'teacher');
Person6.greeting();
*/
////////////////////////////////////////////////////////////////////////////////
//Classes with subclasses
/*
var Person5 = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person5.prototype.calculateAge = function() {
  var age = new Date().getUTCFullYear() - this.yearOfBirth;
  console.log(age);
};
var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
  Person5.call(this, name, yearOfBirth, job);
  this.olympicGames= olympicGames;
  this.medals = medals;
};
Athlete5.prototype = Object.create(Person5.prototype);
Athlete5.prototype.wonMedal = function() {
  this.medals++;
  console.log(this.medals);
};
var johnAthlete5 = new Athlete5 ('John', 1990, 'swimmer', 3, 10);
johnAthlete5.calculateAge();
johnAthlete5.wonMedal();

// ES6
class Person6 {
  constructor (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }
  calculateAge() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
  }
}

class Athlete6 extends Person6 {
  constructor(name, yearOfBirth, job, olympicGames, medals) {
    super(name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
  }
  wonMdeal() {
    this.medals++;
    console.log(this.medals);
  }
}

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);
johnAthlete6.wonMdeal();
johnAthlete6.calculateAge();
*/
////////////////////////////////////////////////////////////////////////////////
//Coding Challenge
/*
Suppose that you are workingin a small town administration. You are in charge of
tow town elements:
1. Parks
2. Streets

It;s a very small town, so right now there are only 3 parks and 4 streets.
All parks and streets have a name and build year

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (# of trees/park area)
2. Average age of each town's park (sum of all ages/number of parks)
3. Name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Suze classification of all streets: tiny/small/normal/big/huge
normal if unknown

All the report data should be printed to the console
*/

class Element {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Park extends Element {
  constructor(name, buildYear, area, numTrees) {
    super(name, buildYear);
    this.area = area; //mi2
    this.numTrees = numTrees;
  }
  treeDensity() {
    const density = this.numTrees / this.area;
    console.log(`${this.name} has a tree density of ${density} trees per square mile`);
  }
}

class Street extends Element {
  constructor(name, buildYear, length, size = 3) {
    super(name, buildYear);
    this.length = length;
    this.size = size;
  }
  classifyStreet () {
    const classification = new Map();
    classification.set(1, 'tiny');
    classification.set(2, 'small');
    classification.set(3, 'normal');
    classification.set(4, 'big');
    classification.set(5, 'huge');
    console.log(`${this.name}, built in ${this.buildYear}, is a ${classification.get(this.size)} street`);
  }
}

const allParks = [new Park('Green Park', 1987, 0.2, 215), new Park('National Park', 1894, 2.9, 3541), new Park('Oak Park', 1953, 0.4, 949)];
const allStreets = [new Street('Ocean Ave', 1999, 1.1, 4), new Street('Evergreen St', 2008, 2.7, 2), new Street('12th st', 2015, 0.8), new Street('Jasons Way',1982,2.5,5)];

function calc(arr) {
  const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
  return [sum, sum / arr.length];
}

function reportParks(p) {
  console.log('-----PARKS REPORT-----');
  //Density
  p.forEach(el => el.treeDensity());
  //Average Age
  const ages = p.map(el => new Date().getFullYear() - el.buildYear);
  const [totalAge, avgAge] = calc(ages);
  console.log(`Our ${p.length} parks have an average of ${avgAge} years`)
  //Which park has more than 1000 trees
  const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
  console.log(`${p[i].name} has more than 1000 trees`);
}
function reportStreets(s) {
  console.log('-----STREETS REPORT-----');
  //Total and average length of the town's streets
  const [totalLength, avgLength] = calc(s.map(el => el.length));
  console.log(`Our ${s.length} streets have a total length of ${totalLength} mi, with an average of ${avgLength} mi.`)
  //Classify sizes
  s.forEach(el => el.classifyStreet());
}
reportParks(allParks);
reportStreets(allStreets);
