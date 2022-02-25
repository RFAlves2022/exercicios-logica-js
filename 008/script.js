//Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.
function salario(preco_hr=0,hr_trab=0){ 
    let salario
    salario = preco_hr * hr_trab
    console.log("O seu sálario deste mês é de:",salario)
}

salario(8,160)