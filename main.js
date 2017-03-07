'use strict';

function Car() {
  this.dateManufactored = Date.now();
};

function FavoriteMake() {
  this.make = "Audi";
};

FavoriteMake.prototype = new Car();

function Audi() {
  this.model = 'A4';
  this.hp = 250;
  this.color = 'Silver';
};

Audi.prototype = new FavoriteMake();

var myFirstFavoriteCar = new Audi();
var mySecondFavoriteCar = new Audi();
var myThirdFavoriteCar = new Audi();

myFirstFavoriteCar.license = 'OUTATIME';
mySecondFavoriteCar.license = 'OU812';
myThirdFavoriteCar.license = 'LWYRUP';
mySecondFavoriteCar.color = 'Red';
myThirdFavoriteCar.color = 'Blue';

function AnotherAudi() {
  this.model = 'A6';
};

AnotherAudi.prototype = new FavoriteMake();

var myFourthFavoriteCar = new AnotherAudi();
myFourthFavoriteCar.hp = 340;
myFourthFavoriteCar.license = 'ECTO1';
myFourthFavoriteCar.color = 'black';

let cars = [myFirstFavoriteCar, mySecondFavoriteCar, myThirdFavoriteCar, myFourthFavoriteCar];
console.log(cars);
