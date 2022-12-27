const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
let switchColor = null;

stopBtn.setAttribute("disabled", true);
startBtn.addEventListener("click", onStart);
stopBtn.addEventListener("click", onStop);

function onStart() {
  toggleDisabled();

  switchColor = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStop() {
  toggleDisabled();
  clearInterval(switchColor);
}

function toggleDisabled() {
  startBtn.toggleAttribute("disabled");
  stopBtn.toggleAttribute("disabled");
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
