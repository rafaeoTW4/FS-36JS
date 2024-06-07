/*
Objetivo: Calcular a média de 2 números

1 - Pegar os dois números
2 - Somar os dois números
3 - Dividir a soma dos números pela quantidade de números
*/

function soma() {
    


let n1 = parseFloat(100);
let n2 = parseFloat(900);

//let Resultado = n1 + n2;

//console.log(Resultado);

return n1+n2;

}



function media() {
    console.log(soma()/2);
}

media();


function soma(n1, n2) {
    return n1+n2;
}

function media2numeros(n1, n2){
    let resultado = soma (n1, n2) /2;
    return resultado;
}

console.log(media2numeros(214965, 879521));

