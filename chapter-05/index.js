function repetir(n, accion) {
  for (let i = 1; i <= n; i++) {
    accion(i);
  }
}

let etiquetas = [];
repetir(5, (i) => etiquetas.push(`Unidad: ${i}`));

// console.log(etiquetas);

function mayorQue(n) {
  return (m) => m > n;
}

let mayorQue10 = mayorQue(10);
// console.log(mayorQue10(11));

function ruidosa(accion) {
  return (...argumentos) => {
    console.log(`llamando con: ${argumentos}`);
    let resultado = accion(...argumentos);
    console.log(`llamada con ${argumentos} retorno ${resultado}`);
    return resultado;
  };
}

ruidosa(Math.max)(6, 17, 9);

function aMenosQue(prueba, entonces) {
  if (!prueba) entonces();
}

repetir(3, (n) => {
  aMenosQue(n % 2 == 1, () => {
    console.log(n, "es par");
  });
});
