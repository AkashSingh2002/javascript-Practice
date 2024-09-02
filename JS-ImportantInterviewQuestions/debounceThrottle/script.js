const inputField = document.querySelector("input");
const defaultText = document.querySelector("#default");
const debounceText = document.getElementById("debounce");
const throttleText = document.getElementById("throttle");

function updateTextContent(e) {
  defaultText.textContent = e.target.value;
}

function updateDebounceTextContent(e) {
  debounceText.textContent = e.target.value;
}

function updateThrottleTextContent(e) {
  throttleText.textContent = e.target.value;
}

function debounce(callback, delay) {
  let timer;
  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => callback(...args), delay);
  };
}

function throttle(callback, delay) {
  let isThrottle = false;
  return (...args) => {
    if (isThrottle) {
      return;
    }
    callback(...args);
    isThrottle = true;
    setTimeout(() => {
      callback(...args);
      isThrottle = false;
    }, delay);
  };
}

const debounceFunction = debounce(updateDebounceTextContent, 2000);

const throttleFunction = throttle(updateThrottleTextContent, 2000);

inputField.addEventListener("input", (e) => throttleFunction(e));

// function updateText(e){
//     let default = document.getElementById("default");
//     default.textContent = e.target.value
// }

// document.addEventListener("input", () => {

// })
