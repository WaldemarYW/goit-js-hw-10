import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const startButton = document.getElementById('start-timer');
const dateTimePicker = document.getElementById('datetime-picker');

let timerInterval;
let timerStarted = false;

function startTimer() {
  const endDate = new Date(dateTimePicker.value).getTime();

  timerStarted = true;
  startButton.disabled = true;
  dateTimePicker.disabled = true;

  timerInterval = setInterval(function () {
    const now = new Date().getTime();
    const distance = endDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysElement.textContent = formatTime(days);
    hoursElement.textContent = formatTime(hours);
    minutesElement.textContent = formatTime(minutes);
    secondsElement.textContent = formatTime(seconds);

    if (distance < 0) {
      clearInterval(timerInterval);
      daysElement.textContent = '00';
      hoursElement.textContent = '00';
      minutesElement.textContent = '00';
      secondsElement.textContent = '00';
      timerStarted = false;
      startButton.disabled = false;
      dateTimePicker.disabled = false;
    }
  }, 1000);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

startButton.addEventListener('click', function () {
  if (!timerStarted) {
    startTimer();
  }
});

let userSelectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    const currentDate = new Date();

    if (userSelectedDate < currentDate) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
      });
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
    }
  },
};

const datetimePicker = document.getElementById('datetime-picker');
flatpickr(datetimePicker, options);
