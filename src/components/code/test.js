class Greet {

  constructor(message) {
    this.greeting = message;
  }

  greet() {
    return "Hello, " + this.greeting;
  }
}

let g = new Greet("world");
