export let arrTasks = getArrTasks();

export function getArrTasks(){
    let arrTasksData = localStorage.getItem('tasks');
    arrTasksData = JSON.parse(arrTasksData);

    return arrTasksData && arrTasksData.length > 0 ? arrTasksData : [
        {
            name: "exemple",
            createdAt: Date.now(),
            completed: false 
        },
    ]
};

export function setNewData(){
    localStorage.setItem('tasks', JSON.stringify(arrTasks));
};