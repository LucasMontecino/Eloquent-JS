const scripts = [...SCRIPTS];

function filtrar(array, prueba) {
  let result = [];
  for (let el of array) {
    if (prueba(el)) {
      result.push(el);
    }
  }
  return result;
}

function map(array, transformar) {
  let mapeados = [];
  for (let el of array) {
    mapeados.push(transformar(el));
  }
  return mapeados;
}

// let codigosDerechaAIzquierda = scripts.filter((el) => el.direction == "rtl");

// let codigosRtlName = codigosDerechaAIzquierda.map((el) => el.name);

function reduce(array, combinar, inicio) {
  let actual = inicio;
  for (let el of array) {
    actual = combinar(actual, el);
  }
  return actual;
}

function cuentaDeCaracteres(codigo) {
  return codigo.ranges.reduce((acc, [first, second]) => {
    return acc + (second - first);
  }, 0);
}

// let mayor = null;
// for (let codigo of scripts) {
//   if (mayor == null || cuentaDeCaracteres(mayor) < cuentaDeCaracteres(codigo)) {
//     mayor = codigo;
//   }
// }

function promedio(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

// console.log(
//   Math.round(
//     promedio(scripts.filter((code) => code.living).map((code) => code.year))
//   )
// );

// console.log(
//   Math.round(
//     promedio(scripts.filter((code) => !code.living).map((code) => code.year))
//   )
// );

// let total = 0,
//   cuenta = 0;
// for (let code of scripts) {
//   if (code.living) {
//     total += code.year;
//     cuenta += 1;
//   }
// }

// console.log(total);
// console.log(cuenta);
// console.log(Math.round(total / cuenta));

function codigoCaracter(codigo_caracter) {
  for (let code of scripts) {
    if (
      code.ranges.some(([first, second]) => {
        return codigo_caracter >= first && codigo_caracter < second;
      })
    ) {
      return code;
    }
  }
  return null;
}

function contarPor(elementos, nombreGrupo) {
  let cuentas = [];
  for (let el of elementos) {
    let nombre = nombreGrupo(el);
    let conocido = cuentas.findIndex((c) => c.nombre == nombre);
    if (conocido == -1) {
      cuentas.push({ nombre, cuenta: 1 });
    } else {
      cuentas[conocido].cuenta++;
    }
  }
  return cuentas;
}

function codigosTexto(text) {
  let codigos = contarPor(text, (caracter) => {
    let codigo = codigoCaracter(caracter.codePointAt(0));
    return codigo ? codigo.name : "ninguno";
  }).filter(({ name }) => name != "ninguno");

  let total = codigos.reduce((n, { count }) => n + count, 0);
  if (total == 0) return "No se encontaron códigos";

  return codigos
    .map(({ name, count }) => {
      return `${Math.round((count * 100) / total)}% ${name}`;
    })
    .join(", ");
}
let text = '英国的狗说"woof", 俄罗斯的狗说"тяв"';
console.log(codigosTexto(text));
