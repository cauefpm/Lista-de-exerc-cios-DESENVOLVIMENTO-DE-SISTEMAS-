var contador = 0;
var tamanhoFonte = 18;
var imagemAtual = 1;

document.getElementById("botaoExibirTexto").onclick = function () {
    var texto = document.getElementById("textoExibir").value.trim();

    if (texto === "") {
        document.getElementById("resultadoTexto").textContent = "Digite um texto primeiro.";
    } else {
        document.getElementById("resultadoTexto").textContent = texto;
    }
};

document.getElementById("botaoSaudar").onclick = function () {
    var nome = document.getElementById("nomeUsuario").value.trim();

    if (nome === "") {
        document.getElementById("mensagemSaudacao").textContent = "Digite seu nome.";
    } else {
        document.getElementById("mensagemSaudacao").textContent = "Ola, " + nome + "!";
    }
};

document.getElementById("botaoContador").onclick = function () {
    contador = contador + 1;
    document.getElementById("valorContador").textContent = contador;
};

document.getElementById("botaoAzul").onclick = function () {
    document.getElementById("textoColorido").style.color = "blue";
};

document.getElementById("botaoVerde").onclick = function () {
    document.getElementById("textoColorido").style.color = "green";
};

document.getElementById("botaoRosa").onclick = function () {
    document.getElementById("textoColorido").style.color = "deeppink";
};

document.getElementById("botaoAumentarFonte").onclick = function () {
    tamanhoFonte = tamanhoFonte + 2;
    document.getElementById("textoFonte").style.fontSize = tamanhoFonte + "px";
};

document.getElementById("botaoDiminuirFonte").onclick = function () {
    if (tamanhoFonte > 12) {
        tamanhoFonte = tamanhoFonte - 2;
        document.getElementById("textoFonte").style.fontSize = tamanhoFonte + "px";
    }
};

document.getElementById("botaoMostrarEsconder").onclick = function () {
    var conteudo = document.getElementById("conteudoOculto");
    var botao = document.getElementById("botaoMostrarEsconder");

    if (conteudo.style.display === "none") {
        conteudo.style.display = "block";
        botao.textContent = "Esconder conteudo";
    } else {
        conteudo.style.display = "none";
        botao.textContent = "Mostrar conteudo";
    }
};

document.getElementById("botaoTrocarImagem").onclick = function () {
    var imagem = document.getElementById("imagemAlternada");

    if (imagemAtual === 1) {
        imagem.src = "https://placehold.co/400x200/90ee90/000000?text=Imagem+2";
        imagemAtual = 2;
    } else {
        imagem.src = "https://placehold.co/400x200/87ceeb/000000?text=Imagem+1";
        imagemAtual = 1;
    }
};

document.getElementById("botaoValidarEmail").onclick = function () {
    var email = document.getElementById("emailUsuario").value.trim();
    var mensagem = document.getElementById("mensagemEmail");

    mensagem.className = "resultado";

    if (email.indexOf("@") >= 0) {
        mensagem.textContent = "E-mail valido.";
        mensagem.className = "resultado valido";
    } else {
        mensagem.textContent = "E-mail invalido.";
        mensagem.className = "resultado invalido";
    }
};

document.getElementById("botaoAdicionarTarefa").onclick = function () {
    var texto = document.getElementById("textoTarefa").value.trim();

    if (texto !== "") {
        var item = document.createElement("li");
        item.textContent = texto;
        document.getElementById("listaTarefas").appendChild(item);
        document.getElementById("textoTarefa").value = "";
    }
};

document.getElementById("botaoGerarCartao").onclick = function () {
    var nome = document.getElementById("cartaoNome").value.trim();
    var idade = document.getElementById("cartaoIdade").value.trim();
    var profissao = document.getElementById("cartaoProfissao").value.trim();
    var descricao = document.getElementById("cartaoDescricao").value.trim();

    if (nome === "") {
        nome = "Nome nao informado";
    }

    if (idade === "") {
        idade = "nao informada";
    }

    if (profissao === "") {
        profissao = "nao informada";
    }

    if (descricao === "") {
        descricao = "Descricao nao informada.";
    }

    document.getElementById("cartaoApresentacao").innerHTML =
        "<h3>" + nome + "</h3>" +
        "<p>Idade: " + idade + "</p>" +
        "<p>Profissao: " + profissao + "</p>" +
        "<p>" + descricao + "</p>";
};

document.getElementById("botaoAplicarVisual").onclick = function () {
    var area = document.getElementById("areaVisual");

    area.style.backgroundColor = document.getElementById("corFundoArea").value;
    area.style.width = document.getElementById("larguraArea").value + "px";
    area.style.height = document.getElementById("alturaArea").value + "px";
    area.style.borderColor = document.getElementById("corBordaArea").value;
};

document.getElementById("botaoTema").onclick = function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        document.getElementById("botaoTema").textContent = "Desativar dark mode";
    } else {
        document.getElementById("botaoTema").textContent = "Ativar dark mode";
    }
};

function atualizarCartaoFinal() {
    var cartao = document.getElementById("cartaoFinal");
    var temaEscuro = document.getElementById("finalTemaEscuro").checked;

    if (temaEscuro) {
        cartao.style.backgroundColor = "#222222";
        cartao.style.color = "white";
        cartao.style.borderColor = "#555555";
    } else {
        cartao.style.backgroundColor = document.getElementById("finalCorFundo").value;
        cartao.style.color = document.getElementById("finalCorTexto").value;
        cartao.style.borderColor = "#aaaaaa";
    }

    cartao.style.fontSize = document.getElementById("finalFonte").value + "px";
    cartao.style.borderRadius = document.getElementById("finalBorda").value + "px";
    cartao.style.width = document.getElementById("finalLargura").value + "px";
    cartao.style.minHeight = document.getElementById("finalAltura").value + "px";
};

document.getElementById("finalCorFundo").oninput = atualizarCartaoFinal;
document.getElementById("finalCorTexto").oninput = atualizarCartaoFinal;
document.getElementById("finalFonte").oninput = atualizarCartaoFinal;
document.getElementById("finalBorda").oninput = atualizarCartaoFinal;
document.getElementById("finalLargura").oninput = atualizarCartaoFinal;
document.getElementById("finalAltura").oninput = atualizarCartaoFinal;
document.getElementById("finalTemaEscuro").onchange = atualizarCartaoFinal;

atualizarCartaoFinal();
