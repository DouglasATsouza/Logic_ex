/*3. Desenvolva um algoritmo que faça o cálculo do índice de massa
corporal de uma pessoa. Esse algoritmo deve solicitar ao usuário
que digite sua altura, em seguida solicitar que digite seu peso e que
lhe exiba o status. O status vai variar da seguinte forma:
a. Se o IMC for menor que 18,5 o status a ser mostrado deve ser
“Você está abaixo da faixa de peso ideal”;
b. Se o IMC estiver acima de 24,99 o status a ser mostrado será
“Você está acima da faixa de peso ideal”;
c. Se o IMC for igual ou maior que 18,5 e igual ou menor que
24,99, o status a ser mostrado será “Você está dentro da faixa
de peso ideal”.
*/

let altura = Number(prompt("Informe a sua altura (em metros): "))
let peso = Number(prompt("Informe o seu peso (em kg): "))
let imc = Number(peso / (altura*altura))

if(imc < 18.50){
    alert(`IMC = ${(imc).toFixed(2)} \n Você está ABAIXO da faixa de peso ideal!`);

}else if(imc >= 18.50 && imc < 25.00){
    alert(`IMC = ${(imc).toFixed(2)} \nPARABÉNS! \n Você está dentro da faixa de peso ideal!`)

}else if(imc > 25){
    alert(`IMC = ${(imc).toFixed(2)} \n Você está ACIMA do peso ideal!`)

}else{
    alert(`Por favor; digite valores válidos!`)
}
