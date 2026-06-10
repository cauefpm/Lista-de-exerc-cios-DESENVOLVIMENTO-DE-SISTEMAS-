// Guarda os elementos usados na atividade
const botaoMostrarEsconder = document.getElementById("botao");
const paragrafoConteudo = document.getElementById("texto");

// Mostra ou esconde o conteudo da pagina
botaoMostrarEsconder.onclick = function () {
    if (paragrafoConteudo.style.display === "none") {
        paragrafoConteudo.style.display = "block";
        botaoMostrarEsconder.textContent = "Esconder";
    } else {
        paragrafoConteudo.style.display = "none";
        botaoMostrarEsconder.textContent = "Mostrar";
    }
};
