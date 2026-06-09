var tamanho = 16;

document.getElementById("aumentar").onclick = function () {
    tamanho = tamanho + 2;
    document.getElementById("texto").style.fontSize = tamanho + "px";
};

document.getElementById("diminuir").onclick = function () {
    tamanho = tamanho - 2;
    document.getElementById("texto").style.fontSize = tamanho + "px";
};
