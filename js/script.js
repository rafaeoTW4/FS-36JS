// console.log('script', document.getElementById('n1'))

function soma() {
    
    let numero1 = parseFloat(document.getElementById('n1').value);
    let numero2 = parseFloat(document.getElementById('n2').value);

    let resultado = parseInt(numero1) + parseInt(numero2)

    console.log(resultado)
}