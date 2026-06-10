// Guarda o botao usado na atividade
const botaoAlternarTema = document.getElementById("botao");

// Alterna a classe do tema escuro no body
botaoAlternarTema.onclick = function () {
    document.body.classList.toggle("dark-mode");
};
