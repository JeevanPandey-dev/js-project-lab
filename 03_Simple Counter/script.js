const increBtn = document.getElementById('add-btn'); 
const decreBtn = document.getElementById('minus-btn'); 
const resetBtn = document.getElementById('reset-btn'); 
const counterLable = document.getElementById('counter-lable');
const countOnIncreClicks = document.getElementById('incrementCount');
const countOnDecreClicks = document.getElementById('decrementCount');
const countOnResetClicks = document.getElementById('resetCount');

let increClks = 0;
let decreClks = 0;
let resetClks = 0;
let count = 0;

increBtn.addEventListener("click", () => {
  count++;
  counterLable.textContent = count;
  increClks++;
  countOnIncreClicks.textContent = increClks;
});

decreBtn.addEventListener("click", () => {
  count--;
  counterLable.textContent = count;
  decreClks++;
  countOnDecreClicks.textContent = decreClks;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  counterLable.textContent = count;
  resetClks++;
  countOnResetClicks.textContent = resetClks;
})



