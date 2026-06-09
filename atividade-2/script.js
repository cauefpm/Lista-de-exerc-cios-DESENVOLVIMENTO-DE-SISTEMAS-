document.getElementById("botao").onclick = function () {
    var nome = document.getElementById("nome").value;

    if (nome === "") {
        document.getElementById("resultado").textContent = "Digite seu nome.";
    } else {
        document.getElementById("resultado").textContent = "Bem-vindo, " + nome + "!";
    }
};
