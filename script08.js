/*8. Faça um algoritmo que leia a idade e peso de um atleta e imprima
a sua categoria, de acordo com a seguinte tabela:

Idade                  Peso                Categoria
Até 12 anos         -                      Infantil
13 a 16 anos      Até 40kg                 Juvenil leve
                  Acima de 40kg            Juvenil pesado
17 a 24 anos      Até 45kg                 Sênior leve
                  Acima de 45kg até 60kg   Sênior médio
                  Acima de 60kg            Sênior pesado
Acima de 24 anos      -                    Veterano
*/

let idade = Number(prompt("Digite aqui a sua idade: "))
let peso = Number(prompt("Digite aqui o seu peso(em kg): "))

if(idade < 13){
    alert("A sua categoria é Infantil!")
}else if(idade >= 13 && id <= 16 && peso <= 40){
   alert("A sua categoria é Juvenil Leve!")
}else if(idade >= 13 && idade <= 16 && peso > 40 && peso < 45){
    alert("A sua categoria é Juvenil Pesado!")
}else if(idade >= 17 && idade <= 24 && peso < 45){
    alert("A sua categoria é Senior Leve!")
}else if(idade >= 17 && idade <= 24 && peso > 45 && peso <= 60){
    alert("A sua categoria é Senior médio!")
}else if(idade >= 17 && idade <= 24 && peso > 60){
    alert("A sua categoria é Senior Pesado!")
}else if(idade >= 25){
    alert("A sua categoria é Veterano!")
}


