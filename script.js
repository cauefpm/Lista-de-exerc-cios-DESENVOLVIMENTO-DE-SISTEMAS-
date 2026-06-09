// Guarda os endereços das imagens usadas no exercício de troca de imagem.
const imagensAlternadas = [
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='520' viewBox='0 0 900 520'%3E%3Crect width='900' height='520' fill='%232563eb'/%3E%3Ccircle cx='690' cy='130' r='86' fill='%23facc15'/%3E%3Cpath d='M0 390 L180 250 L330 360 L480 210 L900 430 L900 520 L0 520 Z' fill='%23dbeafe'/%3E%3Cpath d='M0 440 L240 310 L420 410 L600 280 L900 455 L900 520 L0 520 Z' fill='%231e3a8a'/%3E%3Ctext x='48' y='82' fill='white' font-family='Arial' font-size='42' font-weight='700'%3EImagem azul%3C/text%3E%3C/svg%3E",
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='520' viewBox='0 0 900 520'%3E%3Crect width='900' height='520' fill='%2316a34a'/%3E%3Ccircle cx='700' cy='145' r='90' fill='%23fde68a'/%3E%3Cpath d='M0 395 C150 330 260 430 410 355 C560 275 690 395 900 315 L900 520 L0 520 Z' fill='%23bbf7d0'/%3E%3Cpath d='M0 455 C170 380 290 485 470 405 C620 335 720 438 900 378 L900 520 L0 520 Z' fill='%23065f46'/%3E%3Ctext x='48' y='82' fill='white' font-family='Arial' font-size='42' font-weight='700'%3EImagem verde%3C/text%3E%3C/svg%3E"
];

let contadorCliques = 0;
let tamanhoFonteAtual = 18;
let indiceImagemAtual = 0;

// Atalho simples para buscar elementos pelo ID.
function pegarElemento(id) {
    return document.getElementById(id);
}

// Exercício 1: mostra na página o texto digitado pelo usuário.
function configurarExibicaoTexto() {
    const campoTexto = pegarElemento("textoExibir");
    const botao = pegarElemento("botaoExibirTexto");
    const resultado = pegarElemento("resultadoTexto");

    botao.addEventListener("click", function () {
        const textoDigitado = campoTexto.value.trim();
        resultado.textContent = textoDigitado || "Digite algum texto antes de exibir.";
    });
}

// Exercício 2: cria uma saudação usando o nome informado.
function configurarSaudacao() {
    const campoNome = pegarElemento("nomeUsuario");
    const botao = pegarElemento("botaoSaudar");
    const mensagem = pegarElemento("mensagemSaudacao");

    botao.addEventListener("click", function () {
        const nome = campoNome.value.trim();

        if (nome === "") {
            mensagem.textContent = "Por favor, digite seu nome.";
        } else {
            mensagem.textContent = "Boas-vindas, " + nome + "!";
        }
    });
}

// Exercício 3: aumenta o contador a cada clique.
function configurarContador() {
    const botao = pegarElemento("botaoContador");
    const valorContador = pegarElemento("valorContador");

    botao.addEventListener("click", function () {
        contadorCliques++;
        valorContador.textContent = contadorCliques;
    });
}

// Exercício 4: muda a cor de um texto usando botões com data-cor.
function configurarMudancaDeCor() {
    const textoColorido = pegarElemento("textoColorido");
    const botoesDeCor = document.querySelectorAll("#exercicio-4 button[data-cor]");

    botoesDeCor.forEach(function (botao) {
        botao.addEventListener("click", function () {
            textoColorido.style.color = botao.dataset.cor;
        });
    });
}

// Exercício 5: controla o tamanho da fonte com limite mínimo e máximo.
function configurarControleFonte() {
    const texto = pegarElemento("textoFonte");
    const botaoAumentar = pegarElemento("botaoAumentarFonte");
    const botaoDiminuir = pegarElemento("botaoDiminuirFonte");

    botaoAumentar.addEventListener("click", function () {
        if (tamanhoFonteAtual < 36) {
            tamanhoFonteAtual += 2;
            texto.style.fontSize = tamanhoFonteAtual + "px";
        }
    });

    botaoDiminuir.addEventListener("click", function () {
        if (tamanhoFonteAtual > 12) {
            tamanhoFonteAtual -= 2;
            texto.style.fontSize = tamanhoFonteAtual + "px";
        }
    });
}

// Exercício 6: alterna uma classe CSS para mostrar ou esconder a informação.
function configurarMostrarEsconder() {
    const conteudo = pegarElemento("conteudoOculto");
    const botao = pegarElemento("botaoMostrarEsconder");

    botao.addEventListener("click", function () {
        conteudo.classList.toggle("oculto");

        if (conteudo.classList.contains("oculto")) {
            botao.textContent = "Mostrar conteúdo";
        } else {
            botao.textContent = "Esconder conteúdo";
        }
    });
}

// Exercício 7: alterna a imagem entre duas opções.
function configurarTrocaImagem() {
    const imagem = pegarElemento("imagemAlternada");
    const botao = pegarElemento("botaoTrocarImagem");

    imagem.src = imagensAlternadas[indiceImagemAtual];

    botao.addEventListener("click", function () {
        indiceImagemAtual = indiceImagemAtual === 0 ? 1 : 0;
        imagem.src = imagensAlternadas[indiceImagemAtual];
    });
}

// Exercício 8: valida se o e-mail possui o caractere @.
function configurarValidacaoEmail() {
    const campoEmail = pegarElemento("emailUsuario");
    const botao = pegarElemento("botaoValidarEmail");
    const mensagem = pegarElemento("mensagemEmail");

    botao.addEventListener("click", function () {
        const email = campoEmail.value.trim();
        const emailValido = email.includes("@");

        mensagem.classList.remove("valido", "invalido");

        if (emailValido) {
            mensagem.textContent = "E-mail válido.";
            mensagem.classList.add("valido");
        } else {
            mensagem.textContent = "E-mail inválido. Digite um endereço com @.";
            mensagem.classList.add("invalido");
        }
    });
}

// Exercício 9: cria itens de lista conforme o usuário adiciona tarefas.
function configurarListaDinamica() {
    const campoTarefa = pegarElemento("textoTarefa");
    const botao = pegarElemento("botaoAdicionarTarefa");
    const lista = pegarElemento("listaTarefas");

    botao.addEventListener("click", function () {
        const textoTarefa = campoTarefa.value.trim();

        if (textoTarefa === "") {
            return;
        }

        const item = document.createElement("li");
        item.textContent = textoTarefa;
        lista.appendChild(item);
        campoTarefa.value = "";
        campoTarefa.focus();
    });
}

// Exercício 10: gera um cartão com os dados do formulário.
function configurarCartaoApresentacao() {
    const botao = pegarElemento("botaoGerarCartao");
    const cartao = pegarElemento("cartaoApresentacao");

    botao.addEventListener("click", function () {
        const nome = pegarElemento("cartaoNome").value.trim();
        const idade = pegarElemento("cartaoIdade").value.trim();
        const profissao = pegarElemento("cartaoProfissao").value.trim();
        const descricao = pegarElemento("cartaoDescricao").value.trim();

        cartao.innerHTML = "";

        const titulo = document.createElement("h3");
        const dados = document.createElement("p");
        const textoDescricao = document.createElement("p");

        titulo.textContent = nome || "Nome não informado";
        dados.textContent = "Idade: " + (idade || "não informada") + " | Profissão: " + (profissao || "não informada");
        textoDescricao.textContent = descricao || "Descrição não informada.";

        cartao.appendChild(titulo);
        cartao.appendChild(dados);
        cartao.appendChild(textoDescricao);
    });
}

// Exercício 11: aplica estilos informados pelo usuário em uma área visual.
function configurarPersonalizacaoVisual() {
    const botao = pegarElemento("botaoAplicarVisual");
    const area = pegarElemento("areaVisual");

    botao.addEventListener("click", function () {
        const corFundo = pegarElemento("corFundoArea").value;
        const largura = pegarElemento("larguraArea").value;
        const altura = pegarElemento("alturaArea").value;
        const corBorda = pegarElemento("corBordaArea").value;

        area.style.backgroundColor = corFundo;
        area.style.width = largura + "px";
        area.style.height = altura + "px";
        area.style.borderColor = corBorda;
    });
}

// Exercício 12: alterna o tema escuro da página inteira.
function configurarDarkMode() {
    const botaoTema = pegarElemento("botaoTema");

    botaoTema.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            botaoTema.textContent = "Desativar dark mode";
        } else {
            botaoTema.textContent = "Ativar dark mode";
        }
    });
}

// Desafio final: atualiza o cartão em tempo real conforme os controles mudam.
function configurarPainelFinal() {
    const cartao = pegarElemento("cartaoFinal");
    const controles = [
        "finalCorFundo",
        "finalCorTexto",
        "finalFonte",
        "finalBorda",
        "finalLargura",
        "finalAltura",
        "finalTemaEscuro"
    ];

    function atualizarCartaoFinal() {
        const temaEscuro = pegarElemento("finalTemaEscuro").checked;
        const corFundo = temaEscuro ? "#111827" : pegarElemento("finalCorFundo").value;
        const corTexto = temaEscuro ? "#f8fafc" : pegarElemento("finalCorTexto").value;

        cartao.style.backgroundColor = corFundo;
        cartao.style.color = corTexto;
        cartao.style.fontSize = pegarElemento("finalFonte").value + "px";
        cartao.style.borderRadius = pegarElemento("finalBorda").value + "px";
        cartao.style.width = pegarElemento("finalLargura").value + "px";
        cartao.style.height = pegarElemento("finalAltura").value + "px";
        cartao.style.borderColor = temaEscuro ? "#334155" : "#d7deea";
    }

    controles.forEach(function (idControle) {
        pegarElemento(idControle).addEventListener("input", atualizarCartaoFinal);
        pegarElemento(idControle).addEventListener("change", atualizarCartaoFinal);
    });

    atualizarCartaoFinal();
}

// Inicializa todas as funções depois que o HTML termina de carregar.
document.addEventListener("DOMContentLoaded", function () {
    configurarExibicaoTexto();
    configurarSaudacao();
    configurarContador();
    configurarMudancaDeCor();
    configurarControleFonte();
    configurarMostrarEsconder();
    configurarTrocaImagem();
    configurarValidacaoEmail();
    configurarListaDinamica();
    configurarCartaoApresentacao();
    configurarPersonalizacaoVisual();
    configurarDarkMode();
    configurarPainelFinal();
});
