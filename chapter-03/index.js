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

function imprimirInventarioGranja(vaca, pollo, cerdo) {
  console.log(`${acolcharConCeros(vaca, 3)} ${vaca == 1 ? "Vaca" : "Vacas"}`);
  console.log(
    `${acolcharConCeros(pollo, 3)} ${pollo == 1 ? "Pollo" : "Pollos"}`
  );
  console.log(
    `${acolcharConCeros(cerdo, 3)} ${cerdo == 1 ? "Cerdo" : "Cerdos"}`
  );
}

function acolcharConCeros(numero, amplitud) {
  let string = String(numero);
  while (string.length < amplitud) {
    string = `0${string}`;
  }
  return string;
}

function minimo(a, b) {
  return a < b ? a : b;
}

function esPar(n) {
  if (n < 0) {
    if (n == -1) return false;
    if (n == 0) return true;

    return esPar(n + 2);
  }

  if (n == 0) return true;
  if (n == 1) return false;

  return esPar(n - 2);
}

function contarCaracteres(string, letra) {
  let cuenta = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === letra) {
      cuenta++;
    }
  }
  return cuenta;
}
