let counterValueDisplays = document.querySelectorAll(".counter-num");
let interval = 4000;

counterValueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue >= endValue) { // Use greater than or equal to
      clearInterval(counter);
    }
  }, duration);
});
