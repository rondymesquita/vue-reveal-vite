interface Greeter {
  greet(): void;
}

class Greet implements Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return "Hello, " + this.greeting;
  }
}

let g = new Greet("world");
