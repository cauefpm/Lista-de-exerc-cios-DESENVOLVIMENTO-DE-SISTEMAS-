document.getElementById("botao").onclick = function () {
    var area = document.getElementById("area");

    area.style.backgroundColor = document.getElementById("fundo").value;
    area.style.width = document.getElementById("largura").value + "px";
    area.style.height = document.getElementById("altura").value + "px";
    area.style.borderColor = document.getElementById("borda").value;
};
