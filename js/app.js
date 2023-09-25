import { generateLi } from "./func-generateLi.js";

const arrTasks = [
    {
        name: "task1",
        createdAt: Date.now(),
        completed: false 
    },
    {
        name: "task2",
        createdAt: Date.now(),
        completed: false
    }
];

export const $inputNewTasks = document.querySelector('.input_newTask');
const $btnIncludeNewTask = document.querySelector('.fa-circle-plus');
const $tasksContainer = document.querySelector('.tasks-container');
export const $ulBoxTasks = document.querySelector('.box-tasks');
const $form = document.querySelector('.form');

$inputNewTasks.focus();

$form.addEventListener('submit', generateLi);