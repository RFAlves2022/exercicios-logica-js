//Faça um Programa que peça as 4 notas bimestrais e mostre a média.
function media(n1, n2, n3, n4) {
    let result
    n1 = parseFloat(n1)
    n2 = parseFloat(n2)
    n3 = parseFloat(n3)
    n4 = parseFloat(n4)
    result = (n1 + n2 + n3 + n4) / 4
    document.querySelector("#resultado").innerHTML = "Sua média é:" + result
}
