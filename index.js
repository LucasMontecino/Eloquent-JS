const humus = function (factor) {
  const ingrediente = function (cantidad, unidad, nombre) {
    let cantidadIngrediente = cantidad * factor;
    if (cantidadIngrediente > 1) {
      unidad += "s";
    }
    console.log(`${cantidadIngrediente} ${unidad} de ${nombre}`);
  };

  ingrediente(2, "Kilo", "Papa");
  ingrediente(1, "Onza", "Fideo");
  ingrediente(1, "Pizca", "Sal");
  ingrediente(1, "Taza", "Salsa de Tomate");
  ingrediente(2, "Cucharada", "Aceite de Oliva");
  ingrediente(200, "Gramo", "Carne molida");
};

function multiplicador(factor) {
  return (numero) => numero * factor;
}

function potencia(base, exponente) {
  if (exponente == 0) {
    return 1;
  } else {
    return base * potencia(base, exponente - 1);
  }
}

function encontrarSolucion(objetivo) {
  const encontrar = (actual, historia) => {
    if (actual == objetivo) {
      return historia;
    } else if (actual > objetivo) {
      return null;
    } else {
      return (
        encontrar(actual + 5, `(${historia} + 5)`) ||
        encontrar(actual * 3, `(${historia} * 3)`)
      );
    }
  };
  return encontrar(1, "1");
}

function imprimirInventarioGranja(vacas, pollos) {
  let stringVaca = String(vacas);
  while (stringVaca.length < 3) {
    stringVaca = `0${stringVaca}`;
  }
  console.log(`${stringVaca} Vacas`);
  let stringPollo = String(pollos);
  while (stringPollo.length < 3) {
    stringPollo = `0${stringPollo}`;
  }
  console.log(`${stringPollo} Pollos`);
}
