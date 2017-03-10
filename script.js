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

function Person(name) {
  this.name = name;
}

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
