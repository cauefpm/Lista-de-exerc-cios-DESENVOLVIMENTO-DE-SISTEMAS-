// Guarda os elementos usados na atividade
const botaoAumentar = document.getElementById("aumentar");
const botaoDiminuir = document.getElementById("diminuir");
const paragrafoTexto = document.getElementById("texto");
let tamanhoFonte = 16;

// Aumenta o tamanho da fonte
botaoAumentar.onclick = function () {
    tamanhoFonte = tamanhoFonte + 2;
    paragrafoTexto.style.fontSize = tamanhoFonte + "px";
};

// Diminui o tamanho da fonte
botaoDiminuir.onclick = function () {
    tamanhoFonte = tamanhoFonte - 2;
    paragrafoTexto.style.fontSize = tamanhoFonte + "px";
};
