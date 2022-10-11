/*2. As maçãs desta estação custam R$0,30 se forem compradas
menos do que uma dúzia, e R$0,25 se forem compradas pelo menos
doze. Desenvolva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.
*/

let quantidadeMacas = Number(prompt("Digite aqui a quantidade de maças que gostaria de comprar: "))

    if(quantidadeMacas <= 11){
        alert(`Valor total da compra de R$${(quantidadeMacas*0.30).toFixed(2)}`)
    }else{
        alert(`Valor total da compra de R$${(quantidadeMacas*0.25).toFixed(2)}`)
    }
