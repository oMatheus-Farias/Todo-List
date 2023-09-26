import { generateLi } from "./func-generateLi.js";
import { $ulBoxTasks } from "./app.js";
import { arrTasks } from "./func-returnLocalStorage.js";
import { setNewData } from "./func-returnLocalStorage.js";

export function creatNewObj(name){
    arrTasks.push({
        name: name,
        createdAt: Date.now(),
        completed: false
    });

    setNewData();
};

function renderTasks(){
    $ulBoxTasks.innerHTML = '';

    arrTasks.forEach(taskObj =>{
        $ulBoxTasks.appendChild(generateLi(taskObj));
    });
};