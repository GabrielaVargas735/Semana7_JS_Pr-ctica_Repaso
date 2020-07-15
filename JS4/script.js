let x = prompt('Ingrese un texto');
let cara = prompt('Ingrese un caracter');
let arreglo = [];

for(let i = 0; i < x.length; i++){
    if(x[i] === cara) {
        arreglo.push(i);
    }
}
console.log(`El caracter ${cara} se repite`, arreglo.length, 'en el texto ingresado');