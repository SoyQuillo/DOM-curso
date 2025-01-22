const title = document.querySelector(".title");
const inputColor = document.querySelector('[type="color"]');
const inputRange = document.querySelector('[type="range]');

document.documentElement.style.setProperty('--color--title', 'hotpink');

title.style.fontFamily = "cursive";
title.style.color = "var(--color--title)";

title.style.removeProperty("font-family");
title.style.color = "";

