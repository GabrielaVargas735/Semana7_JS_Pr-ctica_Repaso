let numero = parseInt(prompt('Ingrese un número para averiguar si es primo'));
let primo = true;
let i = 2;

if(numero == 0 || numero == 1 || numero == 4){
  primo = false;
}

while(i < numero){
  if(numero % i == 0){
    primo = false;
  }
  i++;
}

if(primo == true){
  console.log('El número es primo');
}else{
  console.log('El número es compuesto');
}