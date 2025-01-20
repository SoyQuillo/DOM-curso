const wrapper = document.body.children[0]
console.log(wrapper)
const div = wrapper.children[1]
console.log(div)
const h1 = div.previousElementSibling
console.log(h1)



const anchor = div.children[0];

anchor.addEventListener('click', function(){
    document.documentElement.style.backgroundColor = "black";
    document.documentElement.style.color = "red"
});