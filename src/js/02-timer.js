//import flatpickr from "flatpickr";
//import "flatpickr/dist/flatpickr.min.css";

const startBtn = document.querySelector('button[Data-Start]');
//const inputField = document.querySelector('#datetime-picker');

console.dir(startBtn);
//let startBtnDisabled = startBtn.setAttribute("disabled", false);
let startBtnDisabled = startBtn.removeAttribute("disabled");

//const options = {
//  enableTime: true,
//  time_24hr: true,
//  defaultDate: new Date(),
//  minuteIncrement: 1,
//  minDate: Date.now(),
//  onClose(selectedDates) {
  //  const currentDate = Date.now();
  // if (currentDate > selectedDates[0]) { 
  //    console.log("ERROR", currentDate);
  // }
  //  startBtnDisabled = startBtn.removeAttribute("disabled");
  //  console.log(dateStr);
  //  console.log(selectedDates[0]);
//  },
// };

//function CheckValidDate (selectedDates, inputField){ 
//  console.log(inputField);
//  console.log(options.defaultDate);
//}


//flatpickr(inputField, options)

//function convertMs(ms) {
  // Number of milliseconds per unit of time
// const second = 1000;
//  const minute = second * 60;
//  const hour = minute * 60;
//  const day = hour * 24;

  // Remaining days
//  const days = Math.floor(ms / day);
  // Remaining hours
//  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
//  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
//  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//  return { days, hours, minutes, seconds };
//}