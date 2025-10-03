const calcule = document.getElementById('calcule')

function imc (){
    const nome = document.getElementById('nome').value;
    const alturaComVirgula = document.getElementById('altura').value;
    const altura = parseFloat(alturaComVirgula.replaceAll(',', '.'));
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado')

if (nome !== '' && altura !== '' && peso !== ''){
const valorIMC = ( peso / (altura * altura)).toFixed(1);


let classificacao = '';

if (valorIMC < 18.5){
    classificacao='abaixo do peso, procure orientação profissional de um(a) nutricionista.'
}else if (valorIMC < 25){
    classificacao = 'com peso ideal, Mantenha o foco!'
}else if (valorIMC < 30){
    classificacao = 'levemente acima do peso, Mantenha a atenção para evitar o ganho de peso futuro!'
}else if(valorIMC < 35){
    classificacao = 'Com Obesidade Grau I, o ideal é procurar orientação de um(a) nutricionista!'
}else if(valorIMC < 40){
    classificacao = 'Com Obesidade Grau II, é fundamental buscar ajuda especializada para criar um plano alimentar e de atividade física!'
}
else if (valorIMC > 40){
    classificacao = 'em condição de peso muito grave. É hora de uma reeducação alimentar completa e com apoio profissional!'
}
resultado.textContent= `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`


}else{
    resultado.textContent = 'Preencha todos os campos';
}

};


calcule.addEventListener('click', imc);