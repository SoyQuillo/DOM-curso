const button = document.querySelector(".button");
const modal = document.querySelector(".modal");
const modal_close = document.querySelector(".modal-close");


button.addEventListener('click', function(){
    modal.classList.add('show');
})

modal_close.addEventListener('click', function(){

    modal.classList.remove('show');
})

button.addEventListener('click', function(){
    button.classList.toggle('red');
})


