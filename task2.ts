// TASK 1

//  THE TASK
// Create an interface Person with properties like name, age, and email.
// Implement this interface in a class Employee and add a method to display employee info

// Testing the functionality
// Test the Employee class
// const emp = new Employee("John Doe", 30, "john.doe@example.com");
// emp.displayInfo();

// THE SOLUTION

interface Person {
  name: string;
  age: number;
  email: string;
}

class Employee implements Person {
  name: string;
  age: number;
  email: string;
  constructor(
    name: string = "empty field",
    age: number = 0,
    email: string = "empty field"
  ) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
  displayInfo(): void {
    console.log(
      `name - ${this.name}, age - ${this.age}, email - ${this.email}`
    );
  }
}

const emp = new Employee("John Doe", 30, "john.doe@example.com");

emp.displayInfo();

// TASK 2

// THE TASK

// Write a program that uses union types to handle different types of inputs (e.g., string or number)
// You will hava a handleInput function that will take both string and number input, do something based on input type

// Test the union type function
// handleInput("Hello World");
// handleInput(42);

// THE SOLUTION

function handleInput(input: string | number): string {
  return `type of "${input}" is ${typeof input}`;
}

console.log(handleInput("Hello World"));

console.log(handleInput(42));

// TASK 3

// THE TASK

// Create an abstract class Shape with an abstract method calculateArea()
// Extend it with classes like Circle and Rectangle
// Implement calculateArea in child classes

// Test the shape classes
// const circle = new Circle(5);
// console.log(`Circle Area: ${circle.calculateArea()}`);

// const rectangle = new Rectangle(10, 20);
// console.log(`Rectangle Area: ${rectangle.calculateArea()}`);

//  THE SOLUTION

abstract class Shape {
  alculateArea() {}
}

class Circle extends Shape {
  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  P = Math.PI;
  radius: number;

  calculateArea(): number {
    return this.P * Math.pow(this.radius, 2);
  }
}

class Rectangle extends Shape {
  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  width: number;
  height: number;

  calculateArea(): number {
    return this.width * this.height;
  }
}

const circle = new Circle(5);
console.log(`Circle Area: ${circle.calculateArea()}`);

const rectangle = new Rectangle(10, 20);
console.log(`Rectangle Area: ${rectangle.calculateArea()}`);
