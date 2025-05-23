let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function startStopwatch() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    updateDisplay();
  }, 10);
}

function pauseStopwatch() {
  clearInterval(timerInterval);
}

function resetStopwatch() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  updateDisplay();
}

function updateDisplay() {
  const milliseconds = Math.floor(elapsedTime % 1000);
  const seconds = Math.floor((elapsedTime / 1000) % 60);
  const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));

  document.getElementById('display').textContent =
    `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(milliseconds, 3)}`;
}

function pad(num, size = 2) {
  return num.toString().padStart(size, '0');
}
