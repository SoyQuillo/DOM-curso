const title = document.querySelector(".title");
const inputColor = document.querySelector('[type="color"]');
const inputRange = document.querySelector('[type="range"]');

inputColor.addEventListener('change', function(e){
    const newColor = e.target.value;
    
    title.style.color = newColor;
})

inputRange.addEventListener('change', function(e){
    const newRange = e.target.value;
    title.style.fontSize = newRange +'px'
    title.style.setProperty('font-size', newRange+'px');
})


console.log(getComputedStyle(title).background);

