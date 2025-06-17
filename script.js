let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

function timeToString(time) {
  let hrs = Math.floor(time / 3600000);
  let mins = Math.floor((time % 3600000) / 60000);
  let secs = Math.floor((time % 60000) / 1000);

  return (
    String(hrs).padStart(2, '0') + ':' +
    String(mins).padStart(2, '0') + ':' +
    String(secs).padStart(2, '0')
  );
}

function startStopwatch() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      document.getElementById('display').textContent = timeToString(elapsedTime);
      document.getElementById('current').textContent = timeToString(elapsedTime);
    }, 1000);
    isRunning = true;
  }
}

function resetStopwatch() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  isRunning = false;
  document.getElementById('display').textContent = '00:00:00';
  document.getElementById('current').textContent = '00:00:00';
  document.getElementById('laps').innerHTML = '';
}

function lapTime() {
  if (isRunning) {
    const lapList = document.getElementById('laps');
    const li = document.createElement('li');
    li.textContent = timeToString(elapsedTime);
    lapList.appendChild(li);
  }
}
