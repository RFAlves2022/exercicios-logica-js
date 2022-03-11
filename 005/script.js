//Faça um Programa que converta metros para centímetros.
function mtsParaCm(){
    let mts, cm
    mts = document.querySelector("#metros").value
    mts = parseFloat(mts)
    cm = mts*100
    document.querySelector("#centimetros").innerHTML = "Convertido para cm:" + cm
}

