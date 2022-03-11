//Estrutura de decisão
function idadeDirigir(){
    let idade
    idade = document.querySelector("#idade").value
    if(idade>=18){
        document.querySelector("#resposta").innerHTML = "você é maior de idade, ja pode dirigir."
    } else{
        document.querySelector("#resposta").innerHTML = "Você não pode dirigir ainda."
    }
}

