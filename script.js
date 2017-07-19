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
