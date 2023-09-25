export let arrTasks = getArrTasks();

function getArrTasks(){
    let arrTasksData = localStorage.getItem('tasks');
    arrTasksData = JSON.parse(arrTasksData);

    return arrTasksData && arrTasksData.length > 0 ? arrTasksData : [
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
    ]
};

export function setNewData(data){
    localStorage.setItem('task', JSON.stringify(data));
};