function adicionar(evento){
    evento.preventDefault()

    if(evento.target[0].value === "" || evento.target[1].value === ""){
        alert("Cabaço")
        return;
    }

    const valorIso = evento.target[1].value;
        
    const dataObj = new Date(valorIso + 'T00:00:00');
        
    const dataFormatada = dataObj.toLocaleDateString('pt-BR');

    const tarefa = evento.target[0].value;
    const prazo = dataFormatada;

    const li = document.createElement("li");
    li.textContent = tarefa + " - " + prazo;

    li.addEventListener('click', () => remover(li))

    const ul = document.querySelector(".container");
    
    ul.appendChild(li);

    evento.target[0].value = "";
    evento.target[1].value = "";

}

function remover(elemento){
    elemento.remove();
}