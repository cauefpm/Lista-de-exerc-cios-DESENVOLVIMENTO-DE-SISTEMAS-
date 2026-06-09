var contador = 0;

document.getElementById("botao").onclick = function () {
    contador = contador + 1;
    document.getElementById("contador").textContent = contador;
};
