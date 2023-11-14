const button = document.querySelector('.btn')
const input = document.getElementById('inputText')
const container = document.getElementById('main')




button.addEventListener('click',() => {
    if(input.value == ''){
        alert('Enter something on the input box');
        return
    }

    const todoContainer = document.createElement('div');


    const todoItem = document.createElement('p');
    todoItem.textContent = input.value;

    
     const editButton = createEditButton(todoItem);
     const deleteButton = createDeleteButton(todoContainer);

 

    // Append the elements to the container div
    todoContainer.appendChild(todoItem);
    todoContainer.appendChild(editButton);
    todoContainer.appendChild(deleteButton);

    todoContainer.style.borderBottom = '1px solid black'


    // Append the container div to the main container
    container.appendChild(todoContainer);

    // Clear the input field after adding a todo item
    input.value = '';
});


function createEditButton(todoItem){
    const editButton = document.createElement('button');
    editButton.innerHTML = '<i class="bi bi-pencil-square"></i>';
    editButton.addEventListener('click', () => {
        // Create an input field for editing
        const inputField = document.createElement('input');
        inputField.value = todoItem.textContent;

        // Replace the text with the input field
        todoItem.replaceWith(inputField);

        // Focus on the input field
        inputField.focus();

        // Add blur event listener to save changes on focus loss
        inputField.addEventListener('blur', () => {
            todoItem.textContent = inputField.value;
            inputField.replaceWith(todoItem);
        });
    });

    return editButton;
}
    


function createDeleteButton(todoContainer){
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="bi bi-trash3"></i>';
    
    deleteButton.addEventListener('click', () => {
        container.removeChild(todoContainer);
    });
    
    
    return deleteButton

}