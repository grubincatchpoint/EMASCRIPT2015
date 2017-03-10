//Let and Const

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
