'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.number').innerHTML = String(secretNumber);
let score = 20;

document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);

  //Empty Number!
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';

    // Correct Score!
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';

    // Score Too high!
  } else if (guess > secretNumber) {
    score--;
    if (score > 0) {
      document.querySelector('.message').textContent = '📈 Too high!';
      document.querySelector('.score').textContent = String(score);
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = String(score);
    }

    // Score Too low!
  } else {
    score--;
    if (score > 0) {
      document.querySelector('.message').textContent = '📈 Too low!';
      document.querySelector('.score').textContent = String(score);
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = String(score);
    }
  }
});
