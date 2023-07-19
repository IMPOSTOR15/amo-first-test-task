const timerElement = document.querySelector('#timer-elem');
const startBtn = document.querySelector("#start-btn");
const timeInput = document.querySelector("#time-input");
let intervalId;

function startTimer() {
    if (intervalId) {
        clearInterval(intervalId);
    }

    let timeInSeconds = parseInt(timeInput.value, 10);
    if (isNaN(timeInSeconds) || timeInSeconds <= 0) {
        alert("Пожалуйста, введите корректное время в секундах.");
        return;
    }

    let date = new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(timeInSeconds);

    intervalId = setInterval(function() {
        if (date.getSeconds() > 0) {
            date.setSeconds(date.getSeconds() - 1);
            timerElement.textContent = date.toTimeString().split(' ')[0];
        } else {
            clearInterval(intervalId);
            intervalId = null;
            alert("Таймер завершен!");
        }
    }, 1000);
}

startBtn.addEventListener("click", startTimer);