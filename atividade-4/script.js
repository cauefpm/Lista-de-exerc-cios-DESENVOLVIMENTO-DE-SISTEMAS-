// Guarda os elementos usados na atividade
const botaoAzul = document.getElementById("azul");
const botaoVerde = document.getElementById("verde");
const botaoVermelho = document.getElementById("vermelho");
const textoColorido = document.getElementById("texto");

// Muda a cor do texto para azul
botaoAzul.onclick = function () {
    textoColorido.style.color = "blue";
};

// Muda a cor do texto para verde
botaoVerde.onclick = function () {
    textoColorido.style.color = "green";
};

// Muda a cor do texto para vermelho
botaoVermelho.onclick = function () {
    textoColorido.style.color = "red";
};
