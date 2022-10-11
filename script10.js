/*10. Escreva um algoritmo que percorra os números inteiros entre 1 e 250
e verifique quais números são múltiplos de 3 e quais são múltiplos
de 5.
*/

 
    console.log("Números de 0 a 250, múltiplos de 3:")
           
    let multiplosDe3 = 0;
        for(i = 0; i <= 250; i++){
        if(i % 3 === 0)
        console.log(i);
        }
      
    
    console.log("Números de 0 a 250, múltiplos de 5:")

    let multiplosDe5 = 0;
        for(i = 0; i <= 250; i++){
        if(i % 5 === 0)
        console.log(i);
        }
    
