function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById("taskList");
    const listItem = document.createElement("li");

    listItem.innerHTML = `
        <span>${taskText}</span>
        <button onclick="toggleComplete(this)">✓</button>
        <button class="remove" onclick="removeTask(this)">✗</button>
    `;

    taskList.appendChild(listItem);
    taskInput.value = "";
}

function toggleComplete(button) {
    const listItem = button.parentElement;
    listItem.classList.toggle("completed");
}

function removeTask(button) {
    const listItem = button.parentElement;
    listItem.remove();
}






// function addTask(){
//     const taskInput = document.getElementById("taskInput");
//     const taskText = taskInput.ariaValueMax.trim();
//     if(taskText === ""){
//         alert("Please enter the task");
//         return;
//     }
//     const taskList =document.getElementById("taskList");
//     const ListIteam = document.createElement("li");
//     ListIteam.innerHTML=`
//     <span>${taskText}</span>
//     <button onclick="toggleComplete(this)">✓</button>
//         <button class="remove" onclick="removeTask(this)">✗</button>
//     `;

//     taskList.appendChild(ListIteam);
//     taskInput.value = "";
// }

// function toggleComplete(button) {
//     const ListIteam = button.parentElement;
//     ListIteam.classList.toggle("completed");
// }

// function removeTask(button) {
//     const ListIteam = button.parentElement;
//     ListIteam.remove();
// }
