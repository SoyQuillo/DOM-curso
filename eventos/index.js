const wrapper = document.querySelector('[data-id="wrapper"]');
const input = document.querySelector('[type = "text"]');
const changeUser = document.querySelector('[data-id="name"]');
const section = document.querySelector(".section");
const buttonShow = document.querySelector('[data-id="button-show"]');
const buttonHide = document.querySelector('[data-id="button-hide"]');

const elements = document.querySelectorAll("[data-id]");

console.log(elements);

for(element of elements){
    const currentElement = element.matches('[data-id = "button-show"]');

    if(currentElement){
        console.log(element)
        console.log(`Elemento ${element.nodeName} contiene el valor buttonShow en su atributo`);
    }

}

console.log(input.closest('.wrapper'));
