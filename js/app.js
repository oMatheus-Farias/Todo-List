import { generateLi } from "./func-generateLi.js";
import { arrTasks } from "./func-returnLocalStorage.js";
import { setNewData } from "./func-returnLocalStorage.js";

export const $inputNewTasks = document.querySelector('.input_newTask');
const $btnIncludeNewTask = document.querySelector('.fa-circle-plus');
const $tasksContainer = document.querySelector('.tasks-container');
export const $ulBoxTasks = document.querySelector('.box-tasks');
const $form = document.querySelector('.form');

$inputNewTasks.focus();
$form.addEventListener('submit', generateLi);

setNewData(arrTasks);