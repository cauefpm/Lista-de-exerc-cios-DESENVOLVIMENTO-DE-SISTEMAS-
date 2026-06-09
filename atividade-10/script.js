document.getElementById("botao").onclick = function () {
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var profissao = document.getElementById("profissao").value;
    var descricao = document.getElementById("descricao").value;

    document.getElementById("cartao").innerHTML =
        "<h3>" + nome + "</h3>" +
        "<p>Idade: " + idade + "</p>" +
        "<p>Profissao: " + profissao + "</p>" +
        "<p>" + descricao + "</p>";
};
