// 👇 COMPLETE YOUR WORK BELOW 👇
/* ❗❗ NOTE: PLEASE USE INDIVIDUAL KEYS FOR YOUR CONSTRUCTOR PARAMETERS, NOT OBJECTS. THE TESTS WILL NOT PASS WITH OBJECTS. ❗❗  */

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + .eat() should recieve a string as a parameter and take some type of edible as an argument
        + When eating an edible, it should be pushed into the `stomach` array.
        + The `eat` method should have no effect if there are 10 items in the `stomach` array.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` array should be empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}
 Person.prototype.eat = function (string){
   this.string = string;
    if (this.stomach.length < 10) {
     return this.stomach.push(string);
   } else {
     return 'Full';
   }
 }
 Person.prototype.poop = function () {
   return this.stomach.splice(0);
 }

 Person.prototype.toString = function() {
   return `${this.name}, ${this.age}`;
 }

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method
      + should take 'gallons' as an parameter which will take number of gallons as an argument
      + should add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function(gallons) {
  this.tank = this.tank + gallons;/*rememeber, what are we filling? it's the tank, so the tank is set to zero already 
  now we just set the tank equal to the 0 plus our new argument. Now when we log our Car initially, tank will still be set 
  to zero, but if we invoke our fill method here then we will see in the tank key, the amount of gallons we filled the car with*/
}
Car.prototype.drive = function(distance) {
  const driveableMiles = this.tank * this.milesPerGallon;
  if (distance <= driveableMiles) {
    this.odometer = this.odometer + distance;
    this.tank = this.tank - (distance/ this.milesPerGallon);
  } else {
    this.odometer = this.odometer + driveableMiles;
    this.tank = 0;
    return `I ran out of fuel at ${this.odometer} miles`;
  }
}

const car1 = new Car('Ford Fusion', 32);
car1.fill(15);
car1.drive(485);
console.log(car1);

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies also have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

function Baby(name, age, favoriteToy) {
  Person.call(this, name, age, favoriteToy);
  this.favoriteToy = favoriteToy;
}

Baby.prototype = Object.create(Person.prototype);

Baby.prototype.play = function() {
  return `Playing with ${this.favoriteToy}, ${this.favoriteToy} being the favorite toy.`
}

/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. WINDOW BINDING: this happens if you use 'this' without proper context for it then it will return the window, 
  the global object in node, or undefined in strict mode.
  2. IMPLICIT BINDING: When a function on an object is invoked the 'this' keyword refers to whatever comes before the key.
  We are not directing it to a certain path, it follows its native path and finds the object its supposed to refer to;
  3. EXPLICIT BINDING: With this type of binding we direct the 'this' keyword to follow a certain path by invoking functions
  that we want it to refer to. 
  4. NEW BINDING: Here the 'this' keyword refers to the newly created object that it is pointed towards to get its data from
  rather than the old object.
*/

///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}
