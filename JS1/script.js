let year = parseFloat(prompt("Digite un año, para determinar si es bisiesto o no"));

if (year % 4 == 0 && year % 100 != 0) {
    console.log('El año', year , 'es bisiesto');
}else if (year % 100 == 0 && year % 400 == 0) {
    console.log ('El año', year, 'es bisiesto');
}else{
    console.log("El año", year, " no es bisiesto");
}
