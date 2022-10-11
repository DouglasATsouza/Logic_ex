/*4. Escreva um algoritmo que solicite pelo terminal 2 números e uma
operação matemática. O algoritmo deve realizar o cálculo com os 2
números digitados conforme a operação informada.
*/

let valor1 = Number(prompt("Digite aqui um número para opção A: "))
let valor2 = Number(prompt("Digite aqui um número para a opção B: "))
let op = prompt("Digite aqui a operação matemática que desejas fazer com esses dois números: \n(1) Somar \n(2) Subtrair \n(3) Multiplicar \n(4) Dividir: ")

const soma = valor1+valor2
const subtracao = valor1-valor2
const multiplicacao = valor1*valor2
const divisao = valor1/valor2

    switch(op){
        case "1":
        alert(`A soma dos números é igual a: ${soma}`);
        break;

        case "2":
        alert(`A subtração dos números é igual a: ${subtracao}`);
        break;

        case "3":
        alert(`A multiplicação dos números é igual a: ${multiplicacao}`);
        break;

        case "4":
        alert(`A divisão dos números é igual a: ${divisao}`);
        break;

        default:
        alert(`Os valores digitados não pertencem a uma operação matemática válida!`)
    }
