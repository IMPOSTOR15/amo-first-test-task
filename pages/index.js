const timerCounter = document.querySelector('#timer-elem');
const timerInput = document.querySelector("#time-input");
let animationFrameId;
let isRunning = false;
let remainingTime = null;

function timer() {
    const currentTime = Date.now();
    const remaining = end - currentTime;

    if (remaining <= 0) {
        timerCounter.textContent = "00:00:00";
        cancelAnimationFrame(animationFrameId);
        isRunning = false;
        return;
    }

    const date = new Date(remaining);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();

    timerCounter.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    remainingTime = remaining;
    animationFrameId = requestAnimationFrame(timer);
}

function startTimer() {
    if (isRunning) return;

    if (remainingTime !== null) {
        end = Date.now() + remainingTime;
        remainingTime = null;
    } else {
        timeInSeconds = parseInt(timerInput.value, 10);
        if (isNaN(timeInSeconds) || timeInSeconds <= 0) {
            return;
        }
        timerInput.value = '';
        end = Date.now() + timeInSeconds * 1000;
    }

    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }

    isRunning = true;
    timer();
}

function stopTimer() {
    if (!isRunning) return;
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }
    isRunning = false;
}

function resetTimer() {
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }
    timerCounter.textContent = "00:00:00";
    remainingTime = null;
    isRunning = false;
}

document.querySelector("#start-btn").addEventListener("click", startTimer);
document.querySelector("#stop-btn").addEventListener("click", stopTimer);
document.querySelector("#reset-btn").addEventListener("click", resetTimer);
