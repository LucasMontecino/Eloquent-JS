const arrayJornal = [...JOURNAL];
let journal = [];

function addInput(events, squirrel) {
  journal.push({ events, squirrel });
}

function phi([n00, n01, n10, n11]) {
  return (
    (n11 * n00 - n10 * n01) /
    Math.sqrt((n10 + n11) * (n00 + n01) * (n01 + n11) * (n00 + n10))
  );
}

function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    let input = journal[i],
      index = 0;
    if (input.events.includes(event)) index += 1;
    if (input.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

function journalEvents(journal) {
  let events = [];
  for (let input of journal) {
    for (let event of input.events) {
      if (!events.includes(event)) {
        events.push(event);
      }
    }
  }
  return events;
}

for (let event of journalEvents(arrayJornal)) {
  let correlation = phi(tableFor(event, arrayJornal));
  if (correlation > 0.1 || correlation < -0.1) {
    // console.log(`${event}: ${correlation}`);
  }
}

for (let input of arrayJornal) {
  if (
    input.events.includes("peanuts") &&
    !input.events.includes("brushed teeth")
  ) {
    input.events.push("teeths with nuts");
  }
}
// console.log(phi(tableFor("pizza", arrayJornal)));
// console.log(phi(tableFor("teeths with nuts", arrayJornal)));

let toDoList = [];

function addToDo(todo) {
  toDoList.push(todo);
}

function getToDo() {
  return toDoList.shift();
}

function addImportantToDo(todo) {
  toDoList.unshift(todo);
}

addToDo("Break");
addToDo("Studying");
addToDo("Brush Teeths");
// console.log(toDoList);

addImportantToDo("Pay Taxs");
// console.log(toDoList);

// console.log(getToDo());
// console.log(toDoList);

function removeToDo(array, todo) {
  let todoIndex = array.indexOf(todo);
  if (todoIndex !== -1) {
    return array.splice(todoIndex, 1);
  }
}

// console.log(removeToDo(toDoList, "Break"));
// console.log(toDoList);

function maximo(...numeros) {
  let resultado = -Infinity;
  for (let numero of numeros) {
    if (numero > resultado) resultado = numero;
  }
  return {
    numeros,
    resultado,
  };
}

let numeros = [2, 6, 25, -2];
// console.log(maximo(...numeros));

// console.log(maximo(2, -3, 6, 9, 3, -6));

let masNumeros = [17, ...numeros, 27];
// console.log(masNumeros);

let { nombre, edad } = { nombre: "Faraji", edad: 23 };
// console.log(nombre);

function range(start, end, step = 1) {
  if (start > end) step = -step;
  let array = [];
  for (let i = start; start > end ? i >= end : i <= end; i += step) {
    array.push(i);
  }
  return array;
}

function sum(array) {
  let result = 0;
  for (let arr of array) {
    result += arr;
  }
  return result;
}

// console.log(sum(range(1, 10, 2)));

function reverseArray(array) {
  console.time("test");
  let newArray = [];
  for (let arr of array) {
    newArray.unshift(arr);
  }
  // return newArray;
  console.timeEnd("test");
}
// console.log(reverseArray([2, 5, 9, 6]));
function reverseArrayInPlace(array) {
  console.time("test");
  let n = array.length - 1;
  for (let i = 0; i <= n / 2; i++) {
    let aux = array[i];
    array[i] = array[n - i];
    array[n - i] = aux;
  }
  // return array;
  console.timeEnd("test");
}

console.log(reverseArray([2, 3, 5, 8, 10, 9]), "first");
console.log(reverseArrayInPlace([2, 3, 5, 8, 10, 9]), "second");
