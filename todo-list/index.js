const button = document.querySelector(".button");
const form = document.querySelector(".form");
const input = form.querySelector(".input");
const listContainer = document.querySelector('.list-container');

message();

 form.addEventListener('submit', handleSubmit);

 function message(){
   const h3 = document.createElement("h3");
   h3.classList.add('task-message');

   h3.textContent = listContainer.firstElementChild ? 'Tareas por hacer' : 'No hay tareas aun';
   const prevMeesage = document.querySelector('.task-message');
   

   if(prevMeesage){
      prevMeesage.replaceWith(h3);

      return;
   }

   listContainer.before(h3);
 }

 function handleSubmit(e){
    e.preventDefault();

    const inputValue = input.value;

    createTask(inputValue);

    form.reset();
    message();

    
 }

 function createTask(value){
    const newTask = document.createElement("li");
    newTask.textContent = value;

    listContainer.prepend(newTask);

    addEvents(newTask)
    
    
 }

 


 function addEvents(element){
   element.addEventListener('dblclick', function(){
      element.remove();
      message();
   })
 }