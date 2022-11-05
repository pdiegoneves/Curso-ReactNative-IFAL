let listElement = document.getElementById('lista')
let inputElement = document.querySelector('#app input')
let buttonElement = document.querySelector('#app button')

let tarefas = []

function adicionarTarefas() {
  if (inputElement.value === '') {
    alert('Digite alguma tarefa')
    return false
  } else {
    let novatarefa = inputElement.value
    tarefas.push(novatarefa)
    inputElement.value = ''
    rendertarefas()
  }
}

buttonElement.onclick = adicionarTarefas

function rendertarefas() {
  listElement.innerHTML = ''
  tarefas.map((todo) => {
    let liElement = document.createElement('li')
    let tarefaText = document.createTextNode(todo)

    liElement.appendChild(tarefaText)
    listElement.appendChild(liElement)

    let linkElement = document.createElement('a')
    // linkElement.setAttribute('href','#')
    linkElement.href = '#'
    let linkText = document.createTextNode(' X ')
    linkElement.appendChild(linkText)

    let posicao = tarefas.indexOf(todo)

    // linkElement.onclick = deletartarefa(posicao)
    linkElement.setAttribute('onclick', `deletartarefa(${posicao})`)

    liElement.appendChild(tarefaText)
    liElement.appendChild(linkElement)
    listElement.appendChild(liElement)
  })
}

function deletartarefa(posicao) {
  tarefas.splice(posicao, 1)
  rendertarefas()
}
