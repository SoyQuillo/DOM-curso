const button = document.querySelector(".button");
const form = document.querySelector(".form");
const input = form.querySelector(".input");
const listContainer = document.querySelector('.list-container');

 form.addEventListener('submit', handleSubmit);

 function message(){
   const h3 = document.createElement("h3");

   h3.textContent = listContainer.firstElementChild ? 'Tareas por hacer' : 'No hay tareas aun';

   listContainer.before(h3);
 }

 function handleSubmit(e){
    e.preventDefault();

    const inputValue = input.value;

    createTask(inputValue);

    form.reset();


    
 }

 function createTask(value){
    const newTask = document.createElement("li");
    newTask.textContent = value;

    listContainer.append(newTask);
    
 }

 message();
