import { generateLi } from "./func-generateLi.js";
import { $ulBoxTasks } from "./app.js";
import { arrTasks } from "./func-returnLocalStorage.js";

function renderTasks(){
    $ulBoxTasks.innerHTML = '';

    arrTasks.forEach(taskObj =>{
        $ulBoxTasks.appendChild(generateLi(taskObj));
    });
};