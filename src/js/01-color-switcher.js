

const startBtn = document.querySelector('button[Data-Start]');
const stopBtn = document.querySelector('button[Data-Stop]');
let stopBtnDisabled = stopBtn.setAttribute("disabled", true);
let startBtndisabled = startBtn.getAttribute("disabled", null);
let timerId = null;

startBtn.addEventListener('click', onStartClick);

stopBtn.addEventListener('click', onStopClick);

function onStartClick() { 
    startBtndisabled = startBtn.setAttribute("disabled", true);
    stopBtnDisabled = stopBtn.removeAttribute ("disabled");
        timerId = setInterval(() => {
            document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);  
    } 

function onStopClick() { 
    stopBtnDisabled = stopBtn.setAttribute("disabled", true);
    startBtndisabled = startBtn.removeAttribute("disabled");
    clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

