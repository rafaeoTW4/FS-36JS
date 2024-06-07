// console.log('script', document.getElementById('n1'))

function soma() {
    //Pegar os números dos inputs do HTML e converter para Float, pois será possível o cálculo com inteiros e decimais
    let numero1 = parseFloat(document.getElementById('n1').value);
    let numero2 = parseFloat(document.getElementById('n2').value);

    
    
    //Pegando o resultado do cálculo e colocando na variável resultado
    let resultado = numero1 + numero2


    console.log(resultado)

    //Pegando o HTML e colocando na variável conteudoDiv
    let conteudoDiv = document.getElementsByClassName('resultado')[0];

    //Pegando o conteudoDiv acessando a prop innerHTML e inserindo o valor do cálculo, a variável
    conteudoDiv.innerHTML = 'Resultado' + resultado