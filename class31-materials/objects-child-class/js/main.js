//Create an a class and extend it - Can be anything you would like it to be!

console.log("script working");

class Animal {
  constructor(name) {
    this.nickname = name;
  }
  speak() {
    console.log(`${this.nickname} makes a sound`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  get breed() {
    return this._breed;
  }
  speak() {
    super.speak();
    console.log(`${this.name} barks`);
  }
}

class Cat extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  get breed() {
    return this._breed;
  }
  speak() {
    super.speak();
    console.log(`${this.name} meows`);
  }
}

let simba = new Dog("Simba", "Shepard");
let machi = new Dog("The Machine", "Pitbull");
let salem = new Cat("Salem", "American Shorthair");

////////////////////////////////////////////////

class Vehicle {
  constructor() {
    this.motor = true;
    this.wheels = 2;
  }
  honk() {
    console.log(`The  vehicle with ${this.wheels} wheels Honks!`);
  }
}

class Car extends Vehicle {
  constructor() {
    super();
    this.type = "Electric";
  }

  description() {
    console.log(`This car has ${this.wheels} wheels and uses an ${this.type} motor`);
  }
}

let honda = new Car();
