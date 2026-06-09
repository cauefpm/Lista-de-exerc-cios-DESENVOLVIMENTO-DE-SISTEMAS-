var imagemAtual = 1;

document.getElementById("botao").onclick = function () {
    var imagem = document.getElementById("imagem");

    if (imagemAtual === 1) {
        imagem.src = "https://placehold.co/400x200/198754/ffffff?text=Imagem+2";
        imagemAtual = 2;
    } else {
        imagem.src = "https://placehold.co/400x200/0d6efd/ffffff?text=Imagem+1";
        imagemAtual = 1;
    }
};
