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
console.log(graphRoad);
