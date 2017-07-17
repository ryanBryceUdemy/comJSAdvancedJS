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


//Constructor Prototypes (inheritance)

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
