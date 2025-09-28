// 1. CLASSES
// A class is a blueprint for creating objects.
// It can have properties (variables) and methods (functions).
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  const p1 = new Person("Alice", 22);
  p1.greet(); // Hello, my name is Alice