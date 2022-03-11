//Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário.
function areaQuad(){
    let area, result
    area = document.querySelector("#a").value
    area = parseFloat(area)
    result=(area*area)*2
    document.querySelector("#resultado").innerHTML = "O resultado é:" + result
}

