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

// let numeros = [2, 6, 25, -2];
// console.log(maximo(...numeros));

// console.log(maximo(2, -3, 6, 9, 3, -6));

// let masNumeros = [17, ...numeros, 27];
// console.log(masNumeros);

// let { nombre, edad } = { nombre: "Faraji", edad: 23 };
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
  let newArray = [];
  for (let arr of array) {
    newArray.unshift(arr);
  }
  return newArray;
}
// console.log(reverseArray([2, 5, 9, 6]));
function reverseArrayInPlace(array) {
  let n = array.length - 1;
  for (let i = 0; i <= n / 2; i++) {
    let aux = array[i];
    array[i] = array[n - i];
    array[n - i] = aux;
  }
  return array;
}

function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
}

// console.log(arrayToList([1, 2, 3]));

function listToArray(list) {
  let arr = [];
  for (let node = list; node; node = node.rest) {
    arr.push(node.value);
  }
  return arr;
}
// console.log(
//   listToArray({ value: 2, rest: { value: 4, rest: { value: 16, rest: null } } })
// )

function prepend(value, list) {
  return { value, rest: list };
}

// console.log(prepend(12, { value: 2, rest: { value: 16, rest: null } }));

function position(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return position(list.rest, n - 1);
}

// let list = {
//   value: 16,
//   rest: { value: 32, rest: { value: 46, rest: { value: 35, rest: null } } },
// };

// console.log(position(list, 3));

function deepEqual(a, b) {
  if (a === b) return true;

  if (a == null || typeof a != "object" || b == null || typeof b != "object")
    return false;

  let propsInA = 0,
    propsInB = 0;

  for (let prop in a) propsInA += 1;

  for (let prop in b) {
    propsInB += 1;
    if (!(prop in a) || !deepEqual(a[prop], b[prop])) return false;
  }

  return propsInA == propsInB;
}
// let obj = { here: { is: "an" }, object: 2 };
// console.log(deepEqual(obj, obj));
// console.log(deepEqual(obj, { here: 1, object: 2 }));
// console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
