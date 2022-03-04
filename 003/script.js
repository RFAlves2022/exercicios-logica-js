//Faça um Programa que peça dois números e imprima a soma.
function doisNum(n1,n2){
    let total
    n1 = parseFloat(n1)
    n2 = parseFloat(n2)
    total=n1+n2
    document.querySelector("#resultado").innerHTML = "A soma dos números é: " +total
}
