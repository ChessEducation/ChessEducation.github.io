/* Strategy 1 Cycle */
const Strategy1Cycle = document.querySelector(".Strategy1Cycle");
let Strategy1Var = 1;

Strategy1Cycle.addEventListener("click", () => {
  if (Strategy1Cycle.classList.contains("Strategy1-1")) {
    Strategy1Cycle.classList.remove("Strategy1-1");
    Strategy1Cycle.classList.add("Strategy1-2");
  }
  else if (Strategy1Cycle.classList.contains("Strategy1-2")) {
    Strategy1Cycle.classList.remove("Strategy1-2");
    Strategy1Cycle.classList.add("Strategy1-3");
  }
  else {
    Strategy1Cycle.classList.remove("Strategy1-3");
    Strategy1Cycle.classList.add("Strategy1-1");
  }
});



/* Strategy 2 Cycle */
const Strategy2Cycle = document.querySelector(".Strategy2Cycle");
let Strategy2Var = 1;

Strategy2Cycle.addEventListener("click", () => {
  if (Strategy2Cycle.classList.contains("Strategy2-1")) {
    Strategy2Cycle.classList.remove("Strategy2-1");
    Strategy2Cycle.classList.add("Strategy2-2");
  }
  else if (Strategy2Cycle.classList.contains("Strategy2-2")) {
    Strategy2Cycle.classList.remove("Strategy2-2");
    Strategy2Cycle.classList.add("Strategy2-3");
  }
  else {
    Strategy2Cycle.classList.remove("Strategy2-3");
    Strategy2Cycle.classList.add("Strategy2-1");
  }
});



/* Strategy 3 Cycle */
const Strategy3Cycle = document.querySelector(".Strategy3Cycle");
let Strategy3Var = 1;

Strategy3Cycle.addEventListener("click", () => {
  if (Strategy3Cycle.classList.contains("Strategy3-1")) {
    Strategy3Cycle.classList.remove("Strategy3-1");
    Strategy3Cycle.classList.add("Strategy3-2");
  }
  else if (Strategy3Cycle.classList.contains("Strategy3-2")) {
    Strategy3Cycle.classList.remove("Strategy3-2");
    Strategy3Cycle.classList.add("Strategy3-3");
  }
  else {
    Strategy3Cycle.classList.remove("Strategy3-3");
    Strategy3Cycle.classList.add("Strategy3-1");
  }
});