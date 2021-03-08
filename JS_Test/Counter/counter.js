//Write-Your-Code-Here
const counterElement = document.getElementById("counter");

const startTimer = () => {
  const counter = Number(counterElement.textContent);
  counterElement.textContent = counter + 1;
};

const timer = document.getElementById("start");
timer.addEventListener("click", () => {
  console.log("Event Fired");
  setInterval(startTimer, 1000);
});
