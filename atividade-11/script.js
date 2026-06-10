// Guarda os elementos usados na atividade
const botaoAplicar = document.getElementById("botao");
const inputCorFundo = document.getElementById("fundo");
const inputLargura = document.getElementById("largura");
const inputAltura = document.getElementById("altura");
const inputCorBorda = document.getElementById("borda");
const divAreaVisual = document.getElementById("area");

// Aplica as personalizacoes informadas na area visual
botaoAplicar.onclick = function () {
    divAreaVisual.style.backgroundColor = inputCorFundo.value;
    divAreaVisual.style.width = inputLargura.value + "px";
    divAreaVisual.style.height = inputAltura.value + "px";
    divAreaVisual.style.borderColor = inputCorBorda.value;
};
