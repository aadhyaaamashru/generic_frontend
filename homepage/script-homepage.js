// Function to start the counter
function startCounter(counterElement, endValue, duration) {
  let startValue = 0;
  let interval = Math.floor(duration / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    counterElement.textContent = startValue;
    if (startValue >= endValue) {
      clearInterval(counter);
    }
  }, interval);
}

// Use Intersection Observer to trigger counter when elements are in the viewport
let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let counterNumElement = entry.target.querySelector(".counter-num");
      let endValue = parseInt(counterNumElement.getAttribute("data-val"));
      let duration = 4000; // Set your desired duration here
      startCounter(counterNumElement, endValue, duration);
      observer.unobserve(entry.target);
    }
  });
});

// Observe each counter container
let counterContainers = document.querySelectorAll(".counter-container");
counterContainers.forEach((container) => {
  observer.observe(container);
});
