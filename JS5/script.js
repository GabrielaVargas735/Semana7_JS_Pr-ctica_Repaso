const secreto = 50;
let contador = 1;

while (contador != 0){
    numero = parseInt(prompt('Adivine el número secreto guardado en el programa. Del número 1 al número 100. Si no, ingrese el 0'));
    if (numero == 0 || numero == secreto){
        contador = 0;
        if(numero == secreto){
            console.log('Lo lograste. Has adivinado el número secreto.🏆')
        } else {
            console.log('Perdiste la oportunidad de saber el número secreto 💔')
        }
    }else if (numero > secreto) {
        console.log('Fallaste, el número que ingresó es mayor al número secreto ❌');
        contador++
    }else if (numero < secreto) {
        console.log('Fallaste, el número que ingresó es menor al número secreto ❌'); 
        contador++
    }
}