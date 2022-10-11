/*5. Escreva um algoritmo que tenha como valores de entradas o nome
e idade do usuário e imprima no terminal o nome e a quantidade de
letras que o nome possui, bem como a idade e o ano de nascimento
do usuário. Ex: “Nome: Pedro, 5 letras. Idade: 22 anos, nasceu em
2000”.
*/

let nome = prompt("Digite aqui o seu nome: ")
let idade = prompt("Digite aqui a sua idade: ")

let tamanhoNome = nome.length
let dataNascimento = 2022 - idade

alert(`Nome: ${nome}, ${tamanhoNome} letras. Idade: ${idade} anos, nasceu em ${dataNascimento}.`)

