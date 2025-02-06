// add task
let tasks = [];
function addTask(){
    let pirority = document.getElementById("priority").value;
    let prioriityValue = 0;
    if(pirority==='low'){
        prioriityValue = 0;
    }else{
        prioriityValue = 1;
    }
    let getTask = document.getElementById("task");
    tasks.push(
        {
            description: getTask.value,
            prioriity:prioriityValue
        }
    );
    displayTasks(tasks)
}
let listTasks = document.getElementsByClassName('tasks')[0];
function displayTasks(){
    refreshTask();
    for(let task of tasks){
        let list = document.createElement('li');
        list.classList.add("task");
        console.log(task['prioriity']);
        if(task['prioriity'] === 0){
            list.classList.add("low-priority");
        }else{
            list.classList.add("high-priority");
        }
        list.innerText = task['description'];
        listTasks.appendChild(list);
    }
}
function refreshTask(){
    listTasks.replaceChildren();
}
function displayImportantTasks(){
    refreshTask();
    for(let task of tasks){
        if(task['prioriity'] === 1){
            let list = document.createElement('li');
            list.classList.add("task");
            list.classList.add("high-priority");
            list.innerText = task['description'];
            listTasks.appendChild(list);
        }
    }
}
function displayNotImportantTasks(){
    refreshTask();
    for(let task of tasks){
        if(task['prioriity'] === 0){
            let list = document.createElement('li');
            list.classList.add("task");
            list.classList.add("low-priority");
            list.innerText = task['description'];
            listTasks.appendChild(list);
        }
    }
}
