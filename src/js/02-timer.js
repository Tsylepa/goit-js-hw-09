import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDates[0].getTime() - Date.now() > 0
      ? start.removeAttribute("disabled")
      : Notiflix.Notify.failure("Please choose a date in the future");
  },
};

const labels = document.querySelectorAll(".timer .value");
const start = document.querySelector("[data-start]");
const date = flatpickr("#datetime-picker", options);

const timer = [
  { name: "days", modificator: 1000 * 60 * 60 * 24, value: 0 },
  { name: "hours", modificator: 1000 * 60 * 60, value: 0 },
  { name: "minutes", modificator: 1000 * 60, value: 0 },
  { name: "seconds", modificator: 1000, value: 0 },
];

start.setAttribute("disabled", true);
start.addEventListener("click", onStart);

function onStart() {
  const setTimer = setInterval(() => {
    const currentDate = new Date();
    let countdown = date.selectedDates[0].getTime() - currentDate;

    if (countdown > 0) {
      const rest = timer.map((date) => {
        const x = Math.floor(countdown / date.modificator);
        countdown -= x * date.modificator;
        return x.toString().padStart(2, "0");
      });

      for (let i = 0; i < rest.length; i += 1) {
        labels[i].textContent = rest[i];
      }
    } else {
      clearInterval(setTimer);
    }
  }, 1000);
}
