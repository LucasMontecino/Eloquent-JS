function talk(text) {
  console.log(`The rabbit ${this.type} said: ${text}`);
}

let conejoBlanco = { type: "blanco", talk };
let conejoHambriento = { type: "hambriento", talk };

console.log(conejoBlanco.talk(`it's too late to have been in the party.`));
console.log(
  conejoHambriento.talk(`hey everyone, I'm really hungry! help me please.`)
);

function normalizar() {
  console.log(this.coordinadas.map((n) => n / this.length));
}

normalizar.call({ coordinadas: [0, 2, 3], length: 5 });

let vacio = {};
console.log(vacio.toString);
console.log(vacio.toString());

console.log(Object.getPrototypeOf({}) == Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype));

let rabbitPrototype = {
  talk(text) {
    console.log(`The rabbit ${this.type} said: ${text}`);
  },
};

let assasinRabbit = Object.create(rabbitPrototype);

assasinRabbit.type = "asesino";
assasinRabbit.talk("Mataaaaar");
