let secretNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 10;

const guessInput = document.getElementById('guessInput');
const checkBtn = document.getElementById('checkBtn');
const feedback = document.getElementById('feedback');
const chances = document.getElementById('chances');

checkBtn.addEventListener('click', () => {
  const userGuess = Number(guessInput.value);

  if (!userGuess || userGuess < 1 || userGuess > 100) {
    feedback.textContent = 'Please enter a number between 1 and 100.';
    return;
  }

  if (userGuess === secretNumber) {
    feedback.textContent = `🎉 Correct! The number was ${secretNumber}`;
    feedback.classList.add('text-green-600', 'font-semibold');
    checkBtn.disabled = true;
    guessInput.disabled = true;
  } else {
    attemptsLeft--;
    if (attemptsLeft === 0) {
      feedback.textContent = `❌ Game Over! The number was ${secretNumber}`;
      feedback.classList.add('text-red-600');
      checkBtn.disabled = true;
      guessInput.disabled = true;
    } else {
      feedback.textContent = userGuess < secretNumber ? '🔼 Too low!' : '🔽 Too high!';
      chances.textContent = `You have ${attemptsLeft} chances`;
    }
  }

  guessInput.value = '';
  guessInput.focus();
});
