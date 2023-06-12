import Notiflix from 'notiflix';

Notiflix.Notify.init({
  timeout: 9000 //трохи збільшив ТаймАут
});
//const form = document.querySelector('.form');на відео відомості у полях залишаються, тому форму не треба чистити
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
    return;
  } else {
    for (let i = 0; i < amount; i++) {
      position = i + 1;
      const newDelay = delay + step * i;
      createPromise(position, newDelay).then(({ position, newDelay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${newDelay}ms`);
      }).catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${newDelay}ms`);
      });
    };
  }
}

  function createPromise(position, newDelay) {
    
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
  if (shouldResolve) {
   resolve({ position, newDelay });
 } else {
    reject({ position, newDelay });
     }    
}, newDelay);
  });
  }