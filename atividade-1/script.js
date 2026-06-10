// Guarda os elementos usados na atividade
const botaoExibir = document.getElementById("botao");
const inputTexto = document.getElementById("texto");
const paragrafoResultado = document.getElementById("resultado");

// Exibe na tela o texto digitado pelo usuario
botaoExibir.onclick = function () {
    const textoDigitado = inputTexto.value;
    paragrafoResultado.textContent = textoDigitado;
};
