import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputField = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const dataDate = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');


let timerStartTime = null;
let timerID = null;
let startBtnDisabled = startBtn.setAttribute("disabled", true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  //minDate: Date.now(), - один з варіантів не дозволяти користувачу обрати дату з минулого
  onClose(selectedDates) {
  const currentDate = Date.now(); 
   if (currentDate > selectedDates[0]) { 
     Notify.failure("Please choose a date in the future");
     return;
   }
  startBtnDisabled = startBtn.removeAttribute("disabled");
  startBtn.addEventListener('click', startTimer);
  
    let timerStartTime = selectedDates[0] - currentDate;

  function startTimer() {
    startBtnDisabled = startBtn.setAttribute("disabled", true); // не даємо повторно натискати кнопку після запуску таймеру
    inputField.setAttribute('disabled', true); // не даємо повторно обирати дату після натискання кнопки Start
    timerID = setInterval(() => {
      //враховуючи те, що я працюю з мілісекундами - мені необхідно зробити перевірку так,
      // що якщо залищилось часу меньш ніж одна секунда(<1000ms) - таймер зупиняється.
      if (timerStartTime < 1000) { 
        clearInterval(timerID);
        return;
      }
      timerStartTime = timerStartTime -= 1000;   
      const { days, hours, minutes, seconds } = convertMs(timerStartTime);
      updateTamerInterfase({ days, hours, minutes, seconds });
      }, 1000)
    };

  
  },
};

flatpickr(inputField, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));// довго думал чи дадатвати 0 до кількості днів і вирішив додати
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  return { days, hours, minutes, seconds };
};

function addLeadingZero(value) { 
  return String(value).padStart(2, '0');
};

function updateTamerInterfase({ days, hours, minutes, seconds }) { 
  dataDate.textContent =  days.toString();
  dataHours.textContent = hours.toString();
  dataMinutes.textContent = minutes.toString();
  dataSeconds.textContent = seconds.toString();
}