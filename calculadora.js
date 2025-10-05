const calcule = document.getElementById("calcule");

function imc() {
    const nome = document.getElementById("nome").value;

    // --- CORREÇÃO APLICADA AQUI E NO PESO ---
    const alturaComVirgula = document.getElementById("altura").value;
    const altura = parseFloat(alturaComVirgula.replace(/,/g, ".")); // Altura convertida e corrigida

    const pesoComVirgula = document.getElementById("peso").value; // Pega o valor do peso
    const peso = parseFloat(pesoComVirgula.replace(/,/g, ".")); // Peso convertido e corrigido!
    // ------------------------------------------

    const resultado = document.getElementById("resultado");

    // Ajustei seu if para checar se as variáveis agora NUMÉRICAS são válidas.
    if (nome !== "" && !isNaN(altura) && !isNaN(peso)) {
        // Note que não precisamos mais verificar se peso e altura são diferentes de '',
        // mas sim se são números válidos (não NaN).

        // Agora o peso é um número válido, e o cálculo funciona.
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = "";

        if (valorIMC < 18.5) {
            classificacao =
                "Abaixo do peso. Parabéns! Você é um ser de luz, quase etéreo. Agora, por favor, coma algo antes que o vento te leve.";
        } else if (valorIMC < 25) {
            classificacao =
                "Com peso ideal. Não se preocupe, a inveja das outras pessoas vai garantir que você não saia da linha.";
        } else if (valorIMC < 30) {
            classificacao =
                'Levemente acima do peso. Quase lá! Você só está um "pouquinho" mais preparado para o inverno. Se for para mudar, faça isso com a elegância de quem não quer nada.';
        } else if (valorIMC < 35) {
            classificacao =
                'Obesidade Grau I. Bem-vindo(a) ao clube! Seus ossos estão apenas se preparando para o seu futuro cargo de "acolchoado oficial do sofá".';
        } else if (valorIMC < 40) {
            classificacao =
                "Obesidade Grau II. Impressionante! Você dominou a arte de virar uma aglomeração de uma pessoa só. O próximo desafio é conseguir amarrar o tênis sem prender a respiração.";
        } else if (valorIMC >= 40) {
            classificacao =
                "Obesidade Grau III (Mórbida). Nível máximo de excelência atingido! Se a gravidade já não era suficiente, seu peso com certeza resolveu o problema. Ligue para o médico... se conseguir alcançar o telefone.";
        }
        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
    } else {
        resultado.textContent =
            "Preencha todos os campos corretamente (Nome, Altura e Peso).";
    }
}

calcule.addEventListener("click", imc);
