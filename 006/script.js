//Faça um Programa que peça o raio de um círculo, calcule e mostre sua área.
function calculoRaio(){
    let area, raio
    raio = document.querySelector("#r").value
    raio = parseFloat(raio)
    area = 3.14 * raio^2
    document.querySelector("#resultado").innerHTML = "A área desse círculo é: " + area
}
