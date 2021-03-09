//Minute Timer
const minuteElement = document.getElementById("minute");
const secondElement = document.getElementById("second");

const startTimer = () => {
  console.log("I am fired");
  if (secondElement.textContent > 59) {
    //Increase minute here
    let counter = Number(minuteElement.textContent);
    minuteElement.textContent = counter + 1;
    //Set seconds to 00
    secondElement.textContent = 0;
  }
  //Increase secondElement per second
  let counter = Number(secondElement.textContent);
  secondElement.textContent = counter + 1;
};

let intervalId;
//Starting the Timer
const start = document.getElementById("start");
start.addEventListener("click", () => {
  intervalId = setInterval(startTimer, 1000);
});

//Stoping the Timer
const stop = document.getElementById("stop");
stop.addEventListener("click", () => {
  clearInterval(intervalId);
});

//Reset the Timer
const reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  minuteElement.textContent = "00";
  secondElement.textContent = "00";
  clearInterval(intervalId);
});
