// Guarda os elementos usados na atividade
const botaoTrocarImagem = document.getElementById("botao");
const imagemExibida = document.getElementById("imagem");
let numeroImagemAtual = 1;

// Alterna entre duas imagens
botaoTrocarImagem.onclick = function () {
    if (numeroImagemAtual === 1) {
        imagemExibida.src = "https://placehold.co/400x200/198754/ffffff?text=Imagem+2";
        numeroImagemAtual = 2;
    } else {
        imagemExibida.src = "https://placehold.co/400x200/0d6efd/ffffff?text=Imagem+1";
        numeroImagemAtual = 1;
    }
};
