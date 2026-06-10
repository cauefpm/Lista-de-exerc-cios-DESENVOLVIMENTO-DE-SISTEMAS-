// Guarda os elementos usados na atividade
const botaoSaudar = document.getElementById("botao");
const inputNome = document.getElementById("nome");
const paragrafoResultado = document.getElementById("resultado");

// Exibe uma saudacao ou pede para o usuario digitar o nome
botaoSaudar.onclick = function () {
    const nomeDigitado = inputNome.value;

    if (nomeDigitado === "") {
        paragrafoResultado.textContent = "Digite seu nome.";
    } else {
        paragrafoResultado.textContent = "Bem-vindo, " + nomeDigitado + "!";
    }
};
