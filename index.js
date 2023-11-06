let timerId; // переменная, которая будет хранить ID таймера


const startButton = document.getElementById("start");
startButton.addEventListener('click', function startTimer() {
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ setInterval
    timerId = setInterval(updateClock, 1000); // запускаем  updateClock() каждую секунду
    startButton.removeEventListener("click", startTimer);
});


const stopButton = document.getElementById("stop");
stopButton.addEventListener('click', function Stop() {
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ clearInterval
    clearInterval(timerId); // останавливаем таймер
    startButton.addEventListener('click', function startTimer() {
        timerId = setInterval(updateClock, 1000);
        startButton.removeEventListener('click', startTimer);
    });
});


function updateClock() {
    const clock = document.getElementById('clock');
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ new Date()
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    clock.textContent = hours + ':' + minutes + ':' + seconds;
}


