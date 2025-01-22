const button = document.querySelector(".button");
const form = document.querySelector(".form");
const input = form.querySelector(".input");
const listContainer = document.querySelector('.list-container');

 form.addEventListener('submit', handleSubmit);

 function handleSubmit(e){
    e.preventDefault();

    const inputValue = input.value;

    createTask(inputValue);

    form.reset();


    
 }

 function createTask(value){
    const newTask = document.createElement("li");
    newTask.textContent = value;

    listContainer.appendChild(newTask);
    
 }

