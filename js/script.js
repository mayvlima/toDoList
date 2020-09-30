// criar uma função chamada criarTarefa que deve exibir um alerta "Tarefa criada", e ela deve ser executada
// quando o usuario fazer um clique no botão de adicionar

let botaoAdicionar = document.querySelector('#adicionar-tarefa')
let inputTarefa = document.querySelector('#tarefa-digitada')
let divTarefas = document.querySelector('#tarefas')

function addAcaoDeFinalizarTarefa(){
    let listaDeBotoes = document.querySelectorAll('.botao-tarefa')
    
    for(botao of listaDeBotoes){
        botao.addEventListener('click', function(){

            if(window.confirm("Você tem certeza que quer finalizar tarefa?")){
            botao.parentElement.parentElement.remove()
            }
        })
    }
}



function criarTarefa(){    

    if(inputTarefa.value.trim() == ""){
        inputTarefa.style.border = '2px solid red'
        return alert("Você deve digitar uma tarefa primeiro!")
    }else{
    let tarefa = `    
        <div class="col-md-4 mb-4">
            <div class="card-tarefa">
                <div class="texto-tarefa">
                ${inputTarefa.value}
                </div>
                <div class="botao-tarefa">
                 <img src="img/check.png" width="32" alt="Botão para finalizar tarefa" title="Botão para finalizar tarefa">
                </div>
            </div>
        </div>
    </div>`
    
    divTarefas.innerHTML += tarefa

    inputTarefa.value = ""
    inputTarefa.style.border = 'none'
    addAcaoDeFinalizarTarefa()
    }
}




botaoAdicionar.addEventListener('click', criarTarefa)

inputTarefa.addEventListener('keypress', function(event){
    if(event.key == 'Enter'){
        criarTarefa()
    }
})


