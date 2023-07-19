const timerElement = document.querySelector('.timer-elem');
let date = new Date();
date.setHours(0);
date.setMinutes(0);
date.setSeconds(0);
const timer = setInterval(function() {
    date.setSeconds(date.getSeconds() + 1);
    timerElement.textContent = date.toTimeString().split(' ')[0]
}, 1000); 