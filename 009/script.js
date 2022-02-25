//Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.
//C = 5 * ((F-32) / 9).
function grausC(f){
    let c
    c = f - 32
    console.log("A converção de",f,"°F para Celcius é de",c,"°C.")
}

grausC(54)