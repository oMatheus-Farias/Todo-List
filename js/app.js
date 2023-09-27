;(function(){
    'use strict';

    const $inputNewTasks = document.querySelector('.input_newTask');
    const $ulBoxTasks = document.querySelector('.box-tasks');
    const $lis = document.getElementsByTagName('li');
    const $form = document.querySelector('.form');

    let arrTasks = getArrTasks();

    function getArrTasks(){
        let arrTasksData = localStorage.getItem('tasks');
        arrTasksData = JSON.parse(arrTasksData);
    
        return arrTasksData && arrTasksData.length > 0 ? arrTasksData : [
            {
                name: "exemple",
                createdAt: Date.now(),
                completed: false 
            },
        ];
    };
    
    function setNewData(){
        localStorage.setItem('tasks', JSON.stringify(arrTasks));
    };

    setNewData();

    function generateLi(obj){

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
        divCheckBox.setAttribute('data-action', 'checkBtn');
        
        spanCheck.classList.add('check');
        spanCheck.setAttribute('data-action', 'checkBtn');
        spanCheck.setAttribute('style', `${obj.completed ? 'display:block' : 'display:none'}`);
        divCheckBox.appendChild(spanCheck);
        
        li.appendChild(divCheckBox);

        pText.classList.add('taskLi_text');
        pText.innerText = obj.name;
        li.appendChild(pText);
    
        editBtn.classList.add('fa-solid');
        editBtn.classList.add('fa-pen-to-square');
        editBtn.setAttribute('data-action', 'editBtn');
        li.appendChild(editBtn);
    
        deleteBtn.classList.add('fa-solid');
        deleteBtn.classList.add('fa-trash');
        deleteBtn.setAttribute('data-action', 'deleteBtn');
        li.appendChild(deleteBtn);
    
        divBoxEditContainer.classList.add('boxEdit-container');
    
        inputNewText.classList.add('boxEdit_newText');
        inputNewText.setAttribute('type', 'text');
        inputNewText.setAttribute('placeholder', 'New text');
        inputNewText.value = obj.name;
        divBoxEditContainer.appendChild(inputNewText);
    
        btnConfirmEdit.classList.add('boxEdit_btn');
        btnConfirmEdit.classList.add('edit_btn');
        btnConfirmEdit.setAttribute('data-action', 'btnConfirmEdit');
        btnConfirmEdit.innerText = 'Edit';
        divBoxEditContainer.appendChild(btnConfirmEdit);
    
        btnCancelEdit.classList.add('boxEdit_btn');
        btnCancelEdit.classList.add('cancel_btn');
        btnCancelEdit.setAttribute('data-action', 'btnCancelEdit');
        btnCancelEdit.innerText = 'Cancel';
        divBoxEditContainer.appendChild(btnCancelEdit);
    
        li.appendChild(divBoxEditContainer);
    
        return li;
    };

    function renderTasks(){
        $ulBoxTasks.innerHTML = '';
    
        arrTasks.forEach(taskObj =>{
            $ulBoxTasks.appendChild(generateLi(taskObj));
        });
    };

    function creatNewObj(name){
        arrTasks.push({
            name: name,
            createdAt: Date.now(),
            completed: false
        });
    
        setNewData();
    };

    function clickedUl(e){
        const dataAction = e.target.getAttribute('data-action');

        if(!dataAction) return;

        let currentLi = e.target;

        while(currentLi.nodeName !== 'LI'){
            currentLi = currentLi.parentElement;
        };

        const currentLiIndex = [...$lis].indexOf(currentLi);

        const actions = {
            editBtn: function(){
                const boxEditContainer = currentLi.querySelector('.boxEdit-container');

                [...$ulBoxTasks.querySelectorAll('.boxEdit-container')].forEach(container =>{
                    container.removeAttribute('style');
                });

                boxEditContainer.style.display = 'flex';
            },
            deleteBtn: function(){
                arrTasks.splice(currentLiIndex, 1);
                setNewData();
                renderTasks();
            },
            btnConfirmEdit: function(){
                const val = currentLi.querySelector('.boxEdit_newText').value;
                arrTasks[currentLiIndex].name = val;
                setNewData();
                renderTasks();
            },
            btnCancelEdit: function(){
                currentLi.querySelector('.boxEdit-container').removeAttribute('style');
            },
            checkBtn: function(){
                arrTasks[currentLiIndex].completed = !arrTasks[currentLiIndex].completed;

                if(arrTasks[currentLiIndex].completed){
                    currentLi.querySelector('.check').style.display = 'block';
                }else{
                    currentLi.querySelector('.check').style.display = 'none';
                };
                setNewData();
                renderTasks();
            }
        };

        if(actions[dataAction]){
            actions[dataAction]();
        };
    };

    $form.addEventListener('submit', e =>{
        e.preventDefault();

        creatNewObj($inputNewTasks.value);
        renderTasks();

        $inputNewTasks.focus();
        $inputNewTasks.value = '';
    });

    $ulBoxTasks.addEventListener('click', clickedUl);

    $inputNewTasks.focus();
    renderTasks();
})();