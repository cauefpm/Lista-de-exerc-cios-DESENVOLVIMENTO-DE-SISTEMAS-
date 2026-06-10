// Guarda os elementos usados na atividade
const botaoContar = document.getElementById("botao");
const spanContador = document.getElementById("contador");
let quantidadeCliques = 0;

// Soma 1 ao contador a cada clique
botaoContar.onclick = function () {
    quantidadeCliques = quantidadeCliques + 1;
    spanContador.textContent = quantidadeCliques;
};
