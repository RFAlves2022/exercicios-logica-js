// o exercicio está armazenado dentro de uma funçao
function maiorNumero(n1=0,n2=0,n3=0){
    let maior
    maior=n1
    if(n2 > n1) maior = n2;
    if(n3 > maior) maior = n3;
    console.log("O maior número digitado é",maior)
    /* ou
    if(n1>n2 && n1>n3){
        console.log("O maior é",n1)
    }else if(n2>n1 && n2>n3){
        console.log("O maior é",n2)
    }else if(n3>n1 && n3>n2){
        console.log("O maior é",n3)
    }
    */
}
maiorNumero(7,8,6)

function soma(n1=0,n2=0){
    let total
    total=n1+n2
    console.log(total)
}
soma(290,100)