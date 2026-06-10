// Guarda os elementos usados na atividade
const botaoValidar = document.getElementById("botao");
const inputEmail = document.getElementById("email");
const paragrafoResultado = document.getElementById("resultado");

// Verifica se o e-mail possui o caractere @
botaoValidar.onclick = function () {
    const emailDigitado = inputEmail.value;

    if (emailDigitado.indexOf("@") >= 0) {
        paragrafoResultado.textContent = "E-mail valido.";
        paragrafoResultado.style.color = "green";
    } else {
        paragrafoResultado.textContent = "E-mail invalido.";
        paragrafoResultado.style.color = "red";
    }
};
