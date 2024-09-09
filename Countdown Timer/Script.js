document.getElementById('start-button').addEventListener('click', startCountdown);

let countdownInterval;

function startCountdown() {
    const dateInput = document.getElementById('date-input').value;
    const targetDate = new Date(dateInput).getTime();

    if (isNaN(targetDate)) {
        alert('Please select a valid date and time.');
        return;
    }

    clearInterval(countdownInterval); // Clear any existing interval before starting a new one

    countdownInterval = setInterval(() => {
        const currentTime = new Date().getTime();
        const timeDifference = targetDate - currentTime;

        if (timeDifference <= 0) {
            clearInterval(countdownInterval);
            alert('Countdown has ended!');
            return;
        }

        updateDisplay(timeDifference);
    }, 1000);
}

function updateDisplay(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}
