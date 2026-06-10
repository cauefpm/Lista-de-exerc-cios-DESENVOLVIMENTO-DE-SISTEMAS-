// Guarda os elementos usados no desafio final
const inputCorFundo = document.getElementById("fundo");
const inputCorTexto = document.getElementById("texto");
const inputTamanhoFonte = document.getElementById("fonte");
const inputRaioBorda = document.getElementById("raio");
const inputLargura = document.getElementById("largura");
const inputAltura = document.getElementById("altura");
const inputTemaEscuro = document.getElementById("tema");
const divCartao = document.getElementById("cartao");

// Atualiza o cartao sempre que algum controle for alterado
function atualizarCartao() {
    const temaEscuroMarcado = inputTemaEscuro.checked;

    if (temaEscuroMarcado === true) {
        divCartao.style.backgroundColor = "#222222";
        divCartao.style.color = "white";
    } else {
        divCartao.style.backgroundColor = inputCorFundo.value;
        divCartao.style.color = inputCorTexto.value;
    }

    divCartao.style.fontSize = inputTamanhoFonte.value + "px";
    divCartao.style.borderRadius = inputRaioBorda.value + "px";
    divCartao.style.width = inputLargura.value + "px";
    divCartao.style.height = inputAltura.value + "px";
}

// Liga os eventos dos controles a funcao principal
inputCorFundo.oninput = atualizarCartao;
inputCorTexto.oninput = atualizarCartao;
inputTamanhoFonte.oninput = atualizarCartao;
inputRaioBorda.oninput = atualizarCartao;
inputLargura.oninput = atualizarCartao;
inputAltura.oninput = atualizarCartao;
inputTemaEscuro.onchange = atualizarCartao;

// Aplica o estado inicial do cartao
atualizarCartao();
