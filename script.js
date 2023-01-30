let title = document.querySelector(".title");
let storyOpening = document.querySelector(".story-opening");
let buttons = document.querySelector(".buttons");
let optionOne = document.querySelector(".option-one");
let optionTwo = document.querySelector(".option-two");
let optionOneScreen = document.querySelector(".option-one-screen");
let optionTwoScreen = document.querySelector(".option-two-screen");
let optionOneEnd = document.querySelector(".option-one-end");
let optionTwoEnd = document.querySelector(".option-two-end");


title.onclick = function() {
    storyOpening.style.display = "block";
    title.style.display = "none";
}

storyOpening.onclick = function() {
    buttons.style.display = "block";
}

optionOne.onclick = function() {
    optionOneScreen.style.display = "block";
    title.style.display = "none";
    storyOpening.style.display = "none";
    buttons.style.display = "none";
}

optionTwo.onclick = function() {
    optionTwoScreen.style.display = "block";
    title.style.display = "none";
    storyOpening.style.display = "none";
    buttons.style.display = "none";
}

optionOneScreen.onclick = function() {
    optionOneEnd.style.display = "block";
    optionOneScreen.style.display = "none";
}

optionTwoScreen.onclick = function() {
    optionTwoEnd.style.display = "block";
    optionTwoScreen.style.display = "none";
}