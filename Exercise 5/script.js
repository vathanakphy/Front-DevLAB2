// add task
const TASKS = [];
document.getElementById("add-t").addEventListener("click",addTask)
document.getElementById("im-task").addEventListener("click",displayImportantTasks)
document.getElementById("not-task").addEventListener("click",displayNotImportantTasks)
document.getElementById("all-task").addEventListener("click",displayTasks)

function addTask(e){
    e.preventDefault();
    let pirority = document.getElementById("priority").value;
    let prioriityValue = 0;
    if(pirority==='low'){
        prioriityValue = 0;
    }else{
        prioriityValue = 1;
    }
    let getTask = document.getElementById("task");
    if(getTask.value!==''){
        TASKS.push(
            {
                description: getTask.value,
                prioriity:prioriityValue
            }
        );
    }else{
        alert("Task must be fill");
    }
    getTask.value = "";
    displayTasks(e)
}
let listTasks = document.getElementsByClassName('tasks')[0];
function displayTasks(e){
    e.preventDefault();
    refreshTask();
    for(let task of TASKS){
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
function displayImportantTasks(e){
    e.preventDefault();
    refreshTask();
    for(let task of TASKS){
        if(task['prioriity'] === 1){
            let list = document.createElement('li');
            list.classList.add("task");
            list.classList.add("high-priority");
            list.innerText = task['description'];
            listTasks.appendChild(list);
        }
    }
}
function displayNotImportantTasks(e){
    e.preventDefault();
    refreshTask();
    for(let task of TASKS){
        if(task['prioriity'] === 0){
            let list = document.createElement('li');
            list.classList.add("task");
            list.classList.add("low-priority");
            list.innerText = task['description'];
            listTasks.appendChild(list);
        }
    }
}
