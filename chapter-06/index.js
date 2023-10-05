function talk(text) {
  console.log(`The rabbit ${this.type} said: ${text}`);
}

let conejoBlanco = { type: "blanco", talk };
let conejoHambriento = { type: "hambriento", talk };

// console.log(conejoBlanco.talk(`it's too late to have been in the party.`));
// console.log(
//   conejoHambriento.talk(`hey everyone, I'm really hungry! help me please.`)
// );

function normalizar() {
  console.log(this.coordinadas.map((n) => n / this.length));
}

// normalizar.call({ coordinadas: [0, 2, 3], length: 5 });

let vacio = {};
// console.log(vacio.toString);
// console.log(vacio.toString());

// console.log(Object.getPrototypeOf({}) == Object.prototype);
// console.log(Object.getPrototypeOf(Object.prototype));

let rabbitPrototype = {
  talk(text) {
    console.log(`The rabbit ${this.type} said: ${text}`);
  },
};

// let assasinRabbit = Object.create(rabbitPrototype);

// assasinRabbit.type = "asesino";
// assasinRabbit.talk("Mataaaaar");

function Conejo(type) {
  this.type = type;
}

Conejo.prototype.talk = function (text) {
  console.log(`The rabbit ${this.type} said ${text}`);
};

class Dog {
  constructor(firstname, breed, age, own) {
    this.firstname = firstname;
    this.breed = breed;
    this.age = age;
    this.own = own;
  }

  dogHi(text) {
    console.log(
      `${this.firstname} de la raza ${this.breed} de ${this.age} años pertenece a ${this.own} y nos dice ${text}`
    );
  }
}

// let nambi = new Dog("Nambí", "salchicha", "10", "Paulinha");
// let tupa = new Dog("Tupá", "salchicha", "6", "Paulinha");
// nambi.dogHi("no me molesten a la hora de la siesta, solo quiero dormir.");

// console.log(nambi);

Dog.prototype.myColor = function () {
  console.log(`${this.firstname} is color ${this.color}`);
};
Dog.prototype.teeths = "smalls";

// console.log(nambi.teeths);
// nambi.teeths = "long, sharp and bloodness";
// nambi.color = "brown";
// nambi.myColor();
// console.log(nambi.teeths);
// console.log(tupa.teeths);
// console.log(tupa);
// console.log(nambi);
// console.log(Dog.prototype.teeths);

let edades = {
  Lucas: 28,
  Paula: 25,
  Milagros: 25,
};

let nombres = {
  lucas: "Lucas",
  paula: "Paula",
  milagros: "Milagros",
};

// console.log(`${nombres.milagros} tiene ${edades[nombres.milagros]} años`);
// console.log("Se conoce la edad de Aymará?", "Aymara" in edades);
// console.log("Se conoce la edad de toString?", "toString" in edades);
let ages = new Map();
ages.set("Lucas", 28);
ages.set("Juan", 25);
ages.set("Walter", 36);
// console.log(ages.has("toString"));

class Matrix {
  constructor(width, height, element = (x, y) => undefined) {
    this.width = width;
    this.height = height;
    this.contenido = [];

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        this.contenido[y * width + x] = element(x, y);
      }
    }
  }

  get(x, y) {
    return this.contenido[y * this.width + x];
  }

  set(x, y, value) {
    this.contenido[y * this.width + x] = value;
  }

  [Symbol.iterator]() {
    return new MatrixIterator(this);
  }
}

class MatrixIterator {
  constructor(matrix) {
    this.x = 0;
    this.y = 0;
    this.matrix = matrix;
  }

  next() {
    if (this.y == this.matrix.height) return { done: true };

    let value = {
      x: this.x,
      y: this.y,
      value: this.matrix.get(this.x, this.y),
    };

    this.x++;
    if (this.x == this.matrix.width) {
      this.x = 0;
      this.y++;
    }
    return { value, done: false };
  }
}

// let matrix = new Matrix(2, 2, (x, y) => `valor ${x},${y}`);
// for (let { x, y, value } of matrix) {
//   console.log(x, y, value);
// }

let changingSize = {
  get size() {
    return Math.round(Math.random() * 100);
  },
};

// console.log(changingSize.size);

class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }

  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }

  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }

  static fromFahrenheit(value) {
    return new Temperature((value - 32) / 1.8);
  }
}

let temp = new Temperature(22);
// console.log(temp.fahrenheit);
// temp.fahrenheit = 86;
// console.log(temp);
// console.log(temp.fahrenheit);

class SymmetricMatrix extends Matrix {
  constructor(size, element = (x, y) => undefined) {
    super(size, size, (x, y) => {
      if (x < y) return element(y, x);
      else return element(x, y);
    });
  }

  set(x, y, value) {
    super.set(x, y, value);
    if (x != y) {
      super.set(y, x, value);
    }
  }
}

let matrix2 = new SymmetricMatrix(5, (x, y) => `${x},${y}`);
// console.log(matrix2.get(2, 3));

class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus({ x, y }) {
    return new Vec(this.x + x, this.y + y);
  }

  minus({ x, y }) {
    return new Vec(this.x - x, this.y - y);
  }

  get vectorLength() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4));
