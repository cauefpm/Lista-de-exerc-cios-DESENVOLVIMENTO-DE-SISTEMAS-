document.getElementById("botao").onclick = function () {
    var tarefa = document.getElementById("tarefa").value;

    if (tarefa !== "") {
        var item = document.createElement("li");
        item.textContent = tarefa;
        item.className = "list-group-item";
        document.getElementById("lista").appendChild(item);
        document.getElementById("tarefa").value = "";
    }
};
