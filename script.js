//function Constructors

//1. without Constructors
// var john = {
//   name: 'john',
//   yearOfBirth: 1990,
//   job: 'teacher',
// };
//
// //making the Constructor func. pass in params and use the this
// //keyword to assign properties to the obj that is not yet there.
// //you put the params on their coresponding properties.
//
// var Person = function (name, yearOfBirth, job){
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
//   //making a method for the person construct (not my fav way would rather store to the prototype)
//   this.calulateAge = function() {
//     console.log(2017 - this.yearOfBirth);
//   };
// };
//
// //a constructor function works as follows. you decare a variable,
// //in this case its a person name john. you set it equal to the
// // new keyword and the Person function call. The new keyword
// // creates an empty object, this makes it so that the this
// // keyword in the Person function points to the empty obj
// // created in the beginnning by 'new'. so now er have a new john
// // obj.
// //called instanciation (making a new instance of Person)
// var john = new Person('john', 1990, 'teacher');
//
// //makes new object with Person props
// // console.log(new Person());
//
// //calling method
//
// john.calulateAge();
//
// var jane = new Person('Jane', 1964, 'designer');
// var mark = new Person('Mark', 1948, 'retired');
// //now all three have the calulateAge method attached to them. for one method
// //this isn't too bad but it could be problematic.
// //It is not very efficent because we have 3 coppies with the exact same
// //function. what if we had 20 methods on the Person constructor with like 100
// //lines of code in each one. then each time we make a new person the engine has to
// //declare all the methods again line by line for each instance of the Person constructor.
// //we can solve this problem using protoypes


/*
var Person = function (name, yearOfBirth, job){
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

//making the protoyope. so none of the following people objects really have the method attached
//to them. but they still have access to them because it is sitting in the constructors prototype. so again the method is not IN the constructor anymore, but we can still use it because it is now declared ON the Person constructor's prototype property. in otherwords, the vars below inherate the calucalte age method from the prototype.

Person.prototype.calculateAge = function() {
  console.log(2017 - this.yearOfBirth);
};

var john = new Person('john', 1990, 'teacher');
var jane = new Person('Jane', 1964, 'designer');
var mark = new Person('Mark', 1948, 'retired');

//calling the calulate age method
john.calculateAge();
jane.calculateAge();
mark.calculateAge();

//allthough it is much more comon to use the prototype for object methods, We can also store properties on the Person constructor prototype as well.

Person.prototype.lastName = "Smith";
console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);




// var mike = [];
// mike.age = 92;
// mike.hair = 'brown';
// console.log(mike.age, mike.hair, mike, mike[0]);
// for (var i = 0; i < mike.length; i++) {
//   console.log(mike[i]);
// }

*/


//Object.create

//first we have to declare the object literal we want to use as the prototype for our new obj.
//then we can add properties to the obj literal. They can be methods, or normal prop value pairs.

// var personProto = {
//   calculateAge: function() {
//     console.log(2017 - this.yearOfBirth);
//   }
// };
// // we call Object.create() pass in the personProto obj so that it becomes the prototype for
// //for the new john obj.
// var john = Object.create(personProto);
// // you can then add properties to the newly created object using dot notation.
// john.name = "John";
// john.yearOfBirth = 1990;
// john.job = "teacher";
//
// //you can call Object.create, and pass into the first param the obj you want to be the
// //prototype, then you can pass an object into the second param with key value pairs to be the
// // keys and values of the object itself. (not the proto) the syntax is a bit different with
// // the value being another object w/ a value property and then its value being the value of
// // the parent obj's properity but this is how it is done.
//
// var jane = Object.create(personProto, {
//   name: {value: "Jane"},
//   yearOfBirth: {value: 1969},
//   job: {value: "designer"}
// });

/*
//Primitives vs objects

//primitives

//primitives assigned to variables hold onto and store the value of the primitive. they do not
//hold a reference.
var b, a;
a = 23;
b = a;
a = 64;
console.log(a);
console.log(b);

//Objects

//objects assigned to variables are stored as references and do not contain the object
//themself. so if you try to assign the obj to another vraiable, it does not make a copy
//like a primitive would. but instead holds a reference that points to the exact same object in memory that the pervious var was pointing at as well.
var obj1, obj2;
obj1 = {
  name: 'John',
  age: 26
};
obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

//Functions

var age, obj;
age = 27;
obj = {
  name: 'Jonas',
  city: 'Lisbon'
};

console.info(change);
function change(a, b) {
  a = 30;
  b.city = 'San Francisco';
}

change(age, obj);
//as we have seen before, the age var does not change beacuse it is a primitive.
//but the obj.city does change. this is because we are not actually passing in the
//object itself, but we are passing in a reference to the obj. so the obj reference gets updated and reflects the change.
console.log(age);
console.log(obj);
*/

/*
////////
//passing functions as arguments (Callbacks)

//first we make an array of years
var years = [ 1992, 1984, 1966, 1912, 2000];
//We then make a function that accepts an array and a function that will be called later in
//the function. (AKA a callback) We loop through the array and push the result/return value
//of invoking the callback funtion with the array index as the callback's passed in param.
function arrayCalc( arr, fn ) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push( fn(arr[i]) );
  }
  return arrRes;
}
//here is the function that will be used as our callback. it's param will be the index of the looped over array above.
function calculateAge (el) {
  return 2017 - el;
}
//another callback
function isFullAge(el) {
  return el >= 18;
}
//This will calc the max heart rate for your age.
function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - (0.67 * el));
  }else {
    return -1;
  }

}
// we call nameCalc and pass it two params, our years array and the callcualte age function.
// we do not invoke the calculateAge function when passing it into the function as our namecalc function will be the one to call the calulateAge function. we are returning an array of ages so we need a place to store the value, hence the ages variables.
var ages = arrayCalc( years, calculateAge );
console.log(ages);
var fullages = arrayCalc(ages, isFullAge);
console.log(fullages);
var rates = arrayCalc( ages, maxHeartRate);
console.log(rates);
*/

/*
//////////////////////
//functions returning functions

//we make a function that checks for the tyoe of job being passed into it from param,
//we then return an anonymous function with the correct response
function interviewQuestions(job) {
  if (job === 'designer') {
    return function (name) {
      console.log(name + ' can you please explain what UX design is? ');
    };
  }else if (job === 'teacher') {
    return function (name) {
      console.log('what subject do you teach ' + name + '?' );
    };
  }else {
    return function (name) {
      console.log('Hello ' + name + ', what do you do?');
    };
  }
}

//since we are returning and anonymous function we need to store its value on a variable so
//we can pass in the param of the anonymous func.
var teacherQuestion = interviewQuestions('teacher');
var designerQuestion = interviewQuestions('designer');

//we call the previously assigned anonymous function and pass in the param to the func so it
//can run the code in its exicution context
teacherQuestion('John');
designerQuestion('John');
//IIFE
//we dont always have to assign the returned anonymous func to a var though, since the line
//is evaluated from left to right, we can call the returned function imediately and pass in the correct arguments (chaining)
interviewQuestions('teacher')('ryan');
*/

/*
///////////////////////
//lecture on IIFE

//the idea here with the code below is to make a private variable not seen from the outside,
//one could simply do the below, but there is another/better way to do this.
function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}
game();
// to make an IIFE we need to wrap the function in parenthasese, this will trick the parser into thinking this is a function expression and not a declaration. because in JS what is inside a parenthasese can not be a statement. so JS will know to treat this as an expression not a declaration.
(function () {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();

//this will not work, because the parser will see this as a function declaration and since it doesnt have a name for the declaration it will trip out and through an error.
// function() {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// }()

//to pass arguments into a IIFE you invoke the IIFE and then pass an agurment into the IIFE
//this will work just like passing arguments into a normal func expression or declaration
//you just pass your agurments into the function call.
(function (goodluck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodluck);
})(5);
*/


/*
///////////////////////////////
// Closures
//so closures work this way. you have a function that returns a inner function. Scope chain
//rules still apply. so when the outer function is called it gets put on top of the execution
//stack. when a function is called it gets its own exicution contex, this means it gets its
//own variable object, scope, and this value stored, because of
//lexical scopeing the inner function gets access to the outer functions variable object. so
//here's where things get magical. :) when the outer function is executed and popped off the
//call stack the variable object is still hanging around in memory. and because scope
//chaining, when the inner function gets called it 'closes' over the outer functions variable
//object aka(closure) and the inner function has reference to the outer functions scope chain
//still. So it still has access to the outer funtions vars, functions, and arguments. since //we still have access to the outer functions variable object we can then update and change //the
//values in the outer function. this means we can call the function retirement, and assign
//the returned anonymous function to a new varriable. We could assign the returned func as
//many vars as we want. this allows us to make our code more modular.
function retirement (retirementAge){
  var a = ' years left until retirement.';
  return function (yearOfBirth) {
    var age = 2016 - yearOfBirth;
    console.log((retirementAge - age) + a);
  };
}
//modular closure approch allowing me to have retirement for differnet countries.
var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);
retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);
// IIFE closure
retirement(66)(1990);

//rewrote past function using the power of closures.
function interviewQuestions(job) {
  return function (name) {
    if (job === 'designer') {
        console.log(name + ' can you please explain what UX design is? ');
    }else if (job === 'teacher') {
        console.log('what subject do you teach ' + name + '?' );
    }else {
        console.log('Hello ' + name + ', what do you do?');
    }
  };
}

interviewQuestions("teacher")("ryan");

*/

/////////////////////////////////////
//lecture Bind, Call and Apply

// we decare an object literal and reference it by the john var. it has a method on it that
//uses the this keyword to reference the john object.
var john = {
  name: 'john',
  age: 26,
  job: 'teacher',
  presentation: function (style, timeOfDay) {
    if (style === 'formal') {
      console.log(`Good ${timeOfDay}, ladies and gentlemen i'm ${this.name}, i'm a ${this.job} and i'm ${this.age} years old `);
    } else if (style === 'friendly') {
      console.log(`hey what's up? i'm ${this.name} i'm a ${this.job} and i'm ${this.age} years old. have a nice ${timeOfDay}`);
    }
  }
};

// we declare another object. this one is named emily. we are going to use her obj to borrow
//the method on the john obj. This is done by using bind, call and apply methods.
var emily = {
  name: 'emily',
  age: 29,
  job: 'designer'
};
//invoking the john presentation method
john.presentation("formal", "morning");

//we use the call method this way. the call method is going to actually invoke the method for
//us. the first paramiter we pass in is going to take the value of the this keyword. so in
//this casr it is going to be the emily obj. then any argument after that will be the methods
//paramiters in the order they were declared in the method.
john.presentation.call(emily, "friendly", "afternoon");
//we use the apply method this way. the apply method is going to actually invoke the method
//for us. the first paramiter we pass in is going to take the value of the this keyword. so
//in this case it is going to be the emily obj. then any array after that will be the methods
//paramiters. the param's will be index according to the array an in the order they were
//declared in the method.
john.presentation.apply(emily,["friendly", "afternoon"]);
//we use the bind method this way. the bind method is not going to actually invoke the method
//for us, it will assign the method with the object you want to be the value of the this
//keyword and then it will return a function for you to use later. with that being said we
//can use what is called currying which is the use of a function (that accept one or more
//arguments) that returns a new function with some of the arguments already set.
var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');

var emilyFormal = john.presentation.bind(emily, 'formal');

emilyFormal('afternoon');

var years = [ 1992, 2004, 1966, 1912, 2000];
function arrayCalc( arr, fn ) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push( fn(arr[i]) );
  }
  return arrRes;
}
function calculateAge (el) {
  return 2017 - el;
}
function isFullAge(limit, el) {
  return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
//below i used the bind method to set a predefined argument for the isFullAge method in this
//case the age limit. we could then call the fullJapan function and pass in the second
//argument which would take the place of the el param. this allows us to pass in the
//isFullAge function as a callback. and allows us to not throw an error in the arrayCalc
//function.
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
