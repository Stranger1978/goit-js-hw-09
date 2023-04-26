//import { formats } from 'flatpickr/dist/utils/formatting';
import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const delayField = document.querySelector('input[name="delay"]');  
const stepField = document.querySelector('input[name="step"]'); 
const amountField = document.querySelector('input[name="amount"]');
const SubmitForm = document.addEventListener('submit', UserSubmit);
let position = 0;

function UserSubmit(evt) {
  evt.preventDefault();

  let delay = Number(delayField.value);
  let step = Number(stepField.value);
  let amount = Number(amountField.value);

  if (delay < 0 || step < 0 || amount <= 0) {
    Notiflix.Notify.failure(`Please enter a correct value`);
  
  }

  const intervalId = setInterval(() => {
    position++;
    if (position === amount) {
      clearInterval(intervalId);
    }
    createPromise(position, delay).then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    }).catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    delay += step;//есть вопрос
  }, step);
  form.reset();    
  position = 0;
}
  function createPromise(position, delay) {
    
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(
    () => {
  if (shouldResolve) {
   resolve({ position, delay });
 } else {
   reject({ position, delay })
     };    
}, delay);
  });
}
