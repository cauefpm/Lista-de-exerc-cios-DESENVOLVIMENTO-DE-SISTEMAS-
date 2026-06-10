// Guarda os elementos usados na atividade
const botaoGerarCartao = document.getElementById("botao");
const inputNome = document.getElementById("nome");
const inputIdade = document.getElementById("idade");
const inputProfissao = document.getElementById("profissao");
const textareaDescricao = document.getElementById("descricao");
const divCartao = document.getElementById("cartao");

// Monta o cartao com os dados digitados
botaoGerarCartao.onclick = function () {
    const nomeDigitado = inputNome.value;
    const idadeDigitada = inputIdade.value;
    const profissaoDigitada = inputProfissao.value;
    const descricaoDigitada = textareaDescricao.value;

    divCartao.innerHTML =
        "<h3>" + nomeDigitado + "</h3>" +
        "<p>Idade: " + idadeDigitada + "</p>" +
        "<p>Profissao: " + profissaoDigitada + "</p>" +
        "<p>" + descricaoDigitada + "</p>";
};
