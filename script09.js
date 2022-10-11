/*9. Escreva um algoritmo que faça a tabuada de um número e
apresente o resultado de acordo com o modelo a seguir, sabendo
que o multiplicando deverá ser fornecido pelo usuário (n) e a
quantidade de iterações também (i).
*/

    let tabuadaDo = Number(prompt("Fazer a tabuada do número: "))
    let iteracao = Number(prompt("Quantidade de iterações da tabuada: "))

    
    for(i=1; i <= iteracao; i++){
        console.log(tabuadaDo, '*', i ,'=', tabuadaDo * i);
    }
