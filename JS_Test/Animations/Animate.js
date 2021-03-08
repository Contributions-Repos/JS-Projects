//Count down the counter
const counterElement = document.getElementById("counter");

const decreaseCounter = () => {
  const counter = Number(counterElement.textContent);
  counterElement.textContent = counter - 1;
};

setInterval(decreaseCounter, 1000);
