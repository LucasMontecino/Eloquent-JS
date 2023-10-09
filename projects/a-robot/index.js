const roads = [
  "Casa de Alicia-Casa de Bob",
  "Casa de Alicia-Cabaña",
  "Casa de Alicia-Oficina de Correos",
  "Casa de Bob-Ayuntamiento",
  "Casa de Daria-Casa de Ernie",
  "Casa de Daria-Ayuntamiento",
  "Casa de Ernie-Casa de Grete",
  "Casa de Grete-Granja",
  "Casa de Grete-Tienda",
  "Mercado-Granja",
  "Mercado-Oficina de Correos",
  "Mercado-Tienda",
  "Mercado-Ayuntamiento",
  "Tienda-Ayuntamiento",
];

function buildGraph(borders) {
  let graph = Object.create(null);

  function addBorder(start, end) {
    if (graph[start] == null) {
      graph[start] = [end];
    } else {
      graph[start].push(end);
    }
  }

  for (let [start, end] of borders.map((c) => c.split("-"))) {
    addBorder(start, end);
    addBorder(end, start);
  }

  return graph;
}

const graphRoad = buildGraph(roads);

class CityState {
  constructor(place, boxes) {
    this.place = place;
    this.boxes = boxes;
  }

  move(destiny) {
    if (!graphRoad[this.place].includes(destiny)) {
      return this;
    } else {
      let boxes = this.boxes
        .map((box) => {
          if (box.place != this.place) return box;
          return { place: destiny, address: box.address };
        })
        .filter((box) => box.place != box.address);
      return new CityState(destiny, boxes);
    }
  }
}

let first = new CityState("Oficina de Correos", [
  { place: "Oficina de Correos", address: "Casa de Alicia" },
]);

let next = first.move("Casa de Alicia");

console.log(next.place);
console.log(next.boxes);
console.log(first.place);

function runRobot(state, robot, memory) {
  for (let turn = 0; ; turn++) {
    if (state.boxes.length == 0) {
      console.log(`Ready in ${turn} turns`);
      break;
    }
    let action = robot(state, memory);
    state = state.move(action.address);
    memory = action.memory;
    console.log(`Move to ${action.address}`);
  }
}

function randomSelection(array) {
  let selection = Math.floor(Math.random() * array.length);
  return array[selection];
}

function randomRobot(state) {
  return { address: randomSelection(graphRoad[state.place]) };
}

CityState.random = function (numberOfBoxes = 5) {
  let boxes = [];
  for (let i = 0; i < numberOfBoxes; i++) {
    let address = randomSelection(Object.keys(graphRoad));
    let place;
    do {
      place = randomSelection(Object.keys(graphRoad));
    } while (place == address);
    boxes.push({ place, address });
  }
  return new CityState("Oficina de Correos", boxes);
};

runRobot(CityState.random(), randomRobot);

const routePostOffice = [
  "Casa de Alicia",
  "Cabaña",
  "Casa de Alicia",
  "Casa de Bob",
  "Ayuntamiento",
  "Casa de Daria",
  "Casa de Ernie",
  "GCasa de Grete",
  "Tienda",
  "Casa de Grete",
  "Granja",
  "Mercado",
  "Oficina de Correos",
];

function routeRobot(state, memory) {
  if (memory.length == 0) {
    memory = routePostOffice;
  }
  return { address: memory[0], memory: memory.slice(1) };
}

function findRoute(graph, start, end) {
  let work = [{ where: start, route: [] }];
  for (let i = 0; i < work.length; i++) {
    let { where, route } = work[i];
    for (let place of graph[where]) {
      if (place == end) return route.concat(place);
      if (!work.some((w) => w.where == place)) {
        work.push({ where: place, route: route.concat(place) });
      }
    }
  }
}

function goalsOrientedRobot({ place, boxes }, route) {
  if (route.length == 0) {
    let box = boxes[0];
    if (box.place != place) {
      route = findRoute(graphRoad, place, box.place);
    } else {
      route = findRoute(graphRoad, place, box.address);
    }
  }

  return { address: route[0], memory: route.slice(1) };
}
