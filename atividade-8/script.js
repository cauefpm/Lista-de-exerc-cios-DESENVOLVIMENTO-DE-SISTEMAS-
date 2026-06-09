document.getElementById("botao").onclick = function () {
    var email = document.getElementById("email").value;
    var resultado = document.getElementById("resultado");

    if (email.indexOf("@") >= 0) {
        resultado.textContent = "E-mail valido.";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "E-mail invalido.";
        resultado.style.color = "red";
    }
};
