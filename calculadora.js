const calcule = document.getElementById('calcule')

function imc (){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado')

if (nome !== '' && altura !== '' && peso !== ''){
const valorIMC = ( peso / (altura * altura)).toFixed(1);

resultado.textContent = valorIMC;

let classificacao = '';

if (valorIMC < 18.5){
    classificacao='abaixo do peso, procure um(a) nutricionista!'
}else if (valorIMC < 25){
    classificacao = 'com peso ideal, Continue o bom trabalho!'
}else if (valorIMC < 30){
    classificacao = 'levemente acima do peso, cuidado!!'
}else if(valorIMC < 35){
    classificacao = 'Com Obesidade Grau I, Comece uma dieta!'
}else if(valorIMC > 35){
    classificacao = 'Com Obesidade Grau II, Comece uma dieta e faça exercicios!'
}
else if (valorIMC > 40){
    classificacao = 'Muito acima do peso, para de comer!!'
}
resultado.textContent= `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`


}else{
    resultado.textContent = 'Preencha todos os campos';
}

};

calcule.addEventListener('click', imc);