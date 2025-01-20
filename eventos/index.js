const wrapper = document.querySelector('[data-id="wrapper"]');
const input = document.querySelector('[type = "text"]');
const changeUser = document.querySelector('[data-id="name"]');
const section = document.querySelector(".section");
const buttonShow = document.querySelector('[data-id="button-show"]');
const buttonHide = document.querySelector('[data-id="button-hide"]');

input.addEventListener('change', function(e){
    changeUser.textContent = e.target.value;
})

function controladorEvento(){
    const nombre = prompt("¿Cual es tu nombre")

    alert(`Hola, Bienvenido ${nombre}`);
}

buttonShow.onclick = controladorEvento;