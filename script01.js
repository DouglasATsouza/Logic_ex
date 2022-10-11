/*1. Desenvolva um algoritmo para ler dois valores e imprimir uma das
três mensagens a seguir:
a. ‘Números iguais’, caso os números sejam iguais;
b. ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
c. ‘Segundo maior’, caso o segundo seja maior que o primeiro.
*/

let valor1 = Number(prompt("Digite aqui um número para opção A: "))
let valor2 = Number(prompt("Digite aqui um número para a opção B: "))

    if (valor1 === valor2){
       alert("Os dois números são iguais")
       
    }else{
        valor1 >= valor2 ? alert("O primeiro número é maior do que o segundo número!") : alert("O segundo número é maior do que o primeiro número!")
    }
