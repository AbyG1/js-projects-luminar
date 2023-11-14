const button = document.querySelector('.btn')
const input = document.getElementById('inputText')
const container = document.getElementById('list')









button.addEventListener('click',() => {
    if(input.value == ''){
        alert('Enter something on the input box');
        return
    }

    const todoItem = document.createElement('div')
    const editButton = document.createElement('button')
    const deleteButton = document.createElement('button')
    todoItem.textContent = input.value;

    editButton.innerHTML ='<i class="bi bi-pencil-square"></i>'
    deleteButton.innerHTML ='<i class="bi bi-trash3"></i>'


    container.appendChild(todoItem)
    todoItem.appendChild(editButton)
    todoItem.appendChild(deleteButton)

    input.value= ' '

})
