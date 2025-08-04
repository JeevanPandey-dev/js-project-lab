const body = document.querySelector('.js-body');
const heading = document.querySelector('.js-heading');
const hslColorBtn = document.querySelector('.js-hslColorCode');
const rgbColorBtn = document.querySelector('.js-rgbColorCode');
const hexColorBtn = document.querySelector('.js-hexColorCode');
const btn = document.querySelector('.js-btn');

let currentMode = "hex" //Default Mode 

const hexVal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

function getRandomHexColor() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        let randomVal = Math.floor(Math.random() * hexVal.length);
        hexColor += hexVal[randomVal];
    }
    return hexColor;
};

function getRandomRgbColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`
};

function getRandomHslColor() {
    const hue = Math.floor(Math.random() * 361);
    const saturation = Math.floor(Math.random() * 101);
    const lightness = Math.floor(Math.random() * 101);
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};


//Add EventListeners to Switch Modes
hexColorBtn.addEventListener("click",function () {
    currentMode = "hex Mode";
    btn.textContent = "#ffffff";
    body.style.backgroundColor = "#ffffff";
    heading.style.color = "#000000"
});

hslColorBtn.addEventListener("click",function () {
    currentMode = "hsl Mode";
    btn.textContent = "hsl(0, 0%, 100%)";
    body.style.backgroundColor = "0, 0%, 100%";
    heading.style.color = "0, 0%, 0%"
});

rgbColorBtn.addEventListener("click",function () {
    currentMode = "rgb Mode";
    btn.textContent = "rgb(255, 255, 255)";
    body.style.backgroundColor = "#ffffff";
    heading.style.color = "#000000"
});


//Generate random Color Based on Current Mode
btn.addEventListener("click", function(){
    let color;
    if (currentMode === "hex Mode") {
        color = getRandomHexColor();
    } else if (currentMode === "hsl Mode") {
        color = getRandomHslColor();
    } else if (currentMode === "rgb Mode") {
        color = getRandomRgbColor();
    }
    else{
       alert("Please Select a Color Mode first") 
    }

    btn.textContent = color;
    body.style.backgroundColor = color;
});
