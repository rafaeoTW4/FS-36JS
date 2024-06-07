const numero1 = document.getElementById('n1')
const numero2 = document.getElementById('n2');
const conteudoDiv = document.querySelector('.resultado');

function soma(){
    let resultado = parseFloat(numero1.value) + parseFloat(numero2.value);
    exibirResultado (resultado);
}

function subtrair(){
    let resultado = parseFloat(numero1.value) - parseFloat(numero2.value);
    exibirResultado (resultado);
}

function multiplicacao(){
    let resultado = parseFloat(numero1.value) * parseFloat(numero2.value);
    exibirResultado (resultado);
}

function divisao(){
    let resultado = parseFloat(numero1.value) / parseFloat(numero2.value);
    exibirResultado (resultado);
}

function exibirResultado(result){
    conteudoDiv.style.display = 'flex';
    conteudoDiv.innerHTML = 'Resultado: ' + result;
}

function limpar(){
    conteudoDiv.style.display = 'none';
    conteudoDiv.innerHTML = 'Resultado: ';
}