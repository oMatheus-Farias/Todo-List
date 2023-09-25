import { $inputNewTasks } from "./app.js";
import { arrTasks } from "./func-returnLocalStorage.js";

export function generateLi(e, obj){
    e.preventDefault();

    const inputNewTasksValue = $inputNewTasks.value;

    const li = document.createElement('li');
    const divCheckBox = document.createElement('div');
    const spanCheck = document.createElement('span');
    const pText = document.createElement('p');
    const editBtn = document.createElement('i');
    const deleteBtn = document.createElement('i');

    const divBoxEditContainer = document.createElement('div');
    const inputNewText = document.createElement('input');
    const btnConfirmEdit = document.createElement('button');
    const btnCancelEdit = document.createElement('button');

    li.classList.add('taskLi');

    divCheckBox.classList.add('checkBox');
    li.appendChild(divCheckBox);

    spanCheck.classList.add('check');
    li.appendChild(spanCheck);

    pText.classList.add('taskLi_text');
    pText.innerText = inputNewTasksValue;
    li.appendChild(pText);

    editBtn.classList.add('fa-solid');
    editBtn.classList.add('fa-pen-to-square');
    li.appendChild(editBtn);

    deleteBtn.classList.add('fa-solid');
    deleteBtn.classList.add('fa-trash');
    li.appendChild(deleteBtn);

    divBoxEditContainer.classList.add('boxEdit-container');
    divBoxEditContainer.setAttribute('style', 'display: none');

    inputNewText.classList.add('boxEdit_newText');
    inputNewText.setAttribute('type', 'text');
    inputNewText.setAttribute('placeholder', 'New text');
    divBoxEditContainer.appendChild(inputNewText);

    btnConfirmEdit.classList.add('boxEdit_btn');
    btnConfirmEdit.classList.add('edit_btn');
    btnConfirmEdit.innerText = 'Edit';
    divBoxEditContainer.appendChild(btnConfirmEdit);

    btnCancelEdit.classList.add('boxEdit_btn');
    btnCancelEdit.classList.add('cancel_btn');
    btnCancelEdit.innerText = 'Cancel';
    divBoxEditContainer.appendChild(btnCancelEdit);

    li.appendChild(divBoxEditContainer);

    // console.log(obj)
    // console.log(e)

    return li;
};