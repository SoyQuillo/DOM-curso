const wrapper = document.querySelector('[data-id="wrapper"]');
const input = document.querySelector('[type = "text"]');
const changeUser = document.querySelector('[data-id="name"]');
const section = document.querySelector(".section");
const buttonShow = document.querySelector('[data-id="button-show"]');
const buttonHide = document.querySelector('[data-id="button-hide"]');


function showSection(e){
    e.preventDefault()
    wrapper.className = "show";

    this.textContent = "HOLAAAA"

    console.log(this)
}

function hideSection(e){
    e.preventDefault()
    wrapper.className = "hide";
}

buttonShow.addEventListener('click', showSection);

buttonHide.addEventListener('click', hideSection);

buttonShow.removeEventListener('click', showSection);

input.addEventListener('change', function(e){
    
    changeUser.textContent = e.target.value;
})

wrapper.addEventListener('click', function(e){
    e.target.style.backgroundColor = "hotpink";
})



