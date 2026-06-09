function atualizarCartao() {
    var cartao = document.getElementById("cartao");
    var tema = document.getElementById("tema").checked;

    if (tema === true) {
        cartao.style.backgroundColor = "#222222";
        cartao.style.color = "white";
    } else {
        cartao.style.backgroundColor = document.getElementById("fundo").value;
        cartao.style.color = document.getElementById("texto").value;
    }

    cartao.style.fontSize = document.getElementById("fonte").value + "px";
    cartao.style.borderRadius = document.getElementById("raio").value + "px";
    cartao.style.width = document.getElementById("largura").value + "px";
    cartao.style.height = document.getElementById("altura").value + "px";
}

document.getElementById("fundo").oninput = atualizarCartao;
document.getElementById("texto").oninput = atualizarCartao;
document.getElementById("fonte").oninput = atualizarCartao;
document.getElementById("raio").oninput = atualizarCartao;
document.getElementById("largura").oninput = atualizarCartao;
document.getElementById("altura").oninput = atualizarCartao;
document.getElementById("tema").onchange = atualizarCartao;

atualizarCartao();
