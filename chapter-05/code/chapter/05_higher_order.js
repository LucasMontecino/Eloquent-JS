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

function charCode(char_code) {
  for (let code of scripts) {
    if (
      code.ranges.some(([first, second]) => {
        return char_code >= first && char_code < second;
      })
    ) {
      return code;
    }
  }
  return null;
}

function countBy(elements, groupName) {
  let counts = [];
  for (let el of elements) {
    let name = groupName(el);
    let knew = counts.findIndex((c) => c.name == name);
    if (knew == -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[knew].count++;
    }
  }
  return counts;
}

function textScripts(text) {
  let scripts = countBy(text, (char) => {
    let script = charCode(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({ name }) => name != "none");

  let total = scripts.reduce((n, { count }) => n + count, 0);
  if (total == 0) return "No scripts found";

  return scripts
    .map(({ name, count }) => {
      return `${Math.round((count * 100) / total)}% ${name}`;
    })
    .join(", ");
}
let text = '英国的狗说"woof", 俄罗斯的狗说"тяв"';
console.log(textScripts(text));
