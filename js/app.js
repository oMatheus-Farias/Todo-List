import { creatNewObj } from "./renderTasks.js";
import { getArrTasks } from "./func-returnLocalStorage.js";
import { setNewData } from "./func-returnLocalStorage.js";

export const $inputNewTasks = document.querySelector('.input_newTask');
const $btnIncludeNewTask = document.querySelector('.fa-circle-plus');
const $tasksContainer = document.querySelector('.tasks-container');
export const $ulBoxTasks = document.querySelector('.box-tasks');
export const $form = document.querySelector('.form');

getArrTasks();
setNewData();

$inputNewTasks.focus();

$form.addEventListener('submit', e =>{
    e.preventDefault();

    creatNewObj($inputNewTasks.value);
});