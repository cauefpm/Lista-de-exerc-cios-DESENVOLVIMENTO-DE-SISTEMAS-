// Guarda os elementos usados na atividade
const botaoAdicionar = document.getElementById("botao");
const inputTarefa = document.getElementById("tarefa");
const listaTarefas = document.getElementById("lista");

// Adiciona a tarefa digitada na lista
botaoAdicionar.onclick = function () {
    const tarefaDigitada = inputTarefa.value;

    if (tarefaDigitada !== "") {
        const itemTarefa = document.createElement("li");
        itemTarefa.textContent = tarefaDigitada;
        listaTarefas.appendChild(itemTarefa);
        inputTarefa.value = "";
    }
};
