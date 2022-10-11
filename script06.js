/*6. Faça um algoritmo que simule um caixa eletrônico. Nesse algoritmo
a conta do usuário deve ser criada já com um saldo positivo. O
usuário precisa informar a quantidade de dinheiro que deseja
retirar, esse valor deve ser um número positivo, múltiplo de 5 e
menor do que o saldo. Cada saque eletrônico cobra uma taxa de
R$4.50. Ao final deve ser informado o saldo da conta caso dê tudo
certo com o saque, e se o usuário informar um valor maior que o
saldo deve ser informado ao usuário que o mesmo não tem dinheiro
suficiente em conta para realizar o saque.
*/

let saque = Number(prompt("Informe o valor do saque: "))

const saldo = 1000
const taxa = 4.50

if (saque > 0 && saque%5==0 && saque < (saldo - taxa)){
    alert(`Seu saque foi de R$ ${saque}, e seu saldo atual agora é de R$ ${saldo - taxa - saque}`)

}else if(saque > (saldo - taxa)){
    alert("Saldo insuficiente")

}else if(saque < 5){
    alert("Digite um valor válido!")

}else{
    alert("Digite somente cédulas com o final 5 ou 10.")
}