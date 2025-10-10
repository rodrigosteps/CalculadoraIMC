const calcule = document.getElementById("calcule");

//função para calcular imc
function imc() {
    const nome = document.getElementById("nome").value;
    const alturaComVirgula = document.getElementById("altura").value;
    const altura = parseFloat(alturaComVirgula.replace(/,/g, ".")); 
    const pesoComVirgula = document.getElementById("peso").value; 
    const peso = parseFloat(pesoComVirgula.replace(/,/g, ".")); 
    const resultado = document.getElementById("resultado");


    

//validação numerica
    if (nome !== "" && !isNaN(altura) && !isNaN(peso)) {

        const valorIMC = (peso / (altura * altura)).toFixed(1);
        let classificacao = "";
        let corValor = "";
        let corResultado="";
    
//loop if else
        if (valorIMC < 18.5) {
            classificacao ="Abaixo do peso. Parabéns! Agora coma algo antes que o vento te leve.";
            corValor = 'orange';
        } else if (valorIMC < 25) {
            classificacao =
                "Com peso ideal. Celebre sua conquista e mantenha os bons hábitos.";
            corValor = 'green';         
        } else if (valorIMC < 30) {
            classificacao =
                'Levemente acima do peso.Você só está um "pouquinho" mais preparado para o inverno.';
            corValor = 'darkorange';
            
        } else if (valorIMC < 35) {
            classificacao =
                'Com obesidade Grau I. Você está com um pouco de "excesso de gostosura".';
                    corValor = '#b45e08ff';           
            } else if (valorIMC < 40) {
            classificacao =
                "Com obesidade Grau II. O próximo desafio é conseguir amarrar o tênis sem prender a respiração.";
            corValor = 'red';
                
            } else if (valorIMC >= 40) {
            classificacao =
                "Com obesidade Grau III (Mórbida). Nível máximo de excelência atingido! Ligue para o médico... se conseguir alcançar o telefone.";
            corValor = '#69140E';          
            }
        resultado.innerHTML = `${nome} seu IMC é <span style="color:${corValor};font-size:1.1em;">${valorIMC}</span> e você está ${classificacao}`;
    } else {
        resultado.textContent =
            "Preencha todos os campos corretamente (Nome, Altura e Peso).";
    }
    
}


//gatilho de click
calcule.addEventListener("click", imc);


