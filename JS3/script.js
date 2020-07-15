let cadena = prompt('Ingrese una línea de texto');
let x = cadena.length;
let cadenaInvertida = "";

while (x >= 0) {
    cadenaInvertida = cadenaInvertida + cadena.charAt(x);
    x--;
  }
console.log(cadenaInvertida);