/* Danger Square Cycle */
const DangerSqrCycle = document.querySelector(".DangerSqrCycle");
let DangerSqrVar = 1;

DangerSqrCycle.addEventListener("click", () => {
  if (DangerSqrCycle.classList.contains("DangerSqr-1")) {
    DangerSqrCycle.classList.remove("DangerSqr-1");
    DangerSqrCycle.classList.add("DangerSqr-2");
  }
  else if (DangerSqrCycle.classList.contains("DangerSqr-2")) {
    DangerSqrCycle.classList.remove("DangerSqr-2");
    DangerSqrCycle.classList.add("DangerSqr-3");
  }
  else {
    DangerSqrCycle.classList.remove("DangerSqr-3");
    DangerSqrCycle.classList.add("DangerSqr-1");
  }
});



/* Check Cycle */
const CheckCycle = document.querySelector(".CheckCycle");
let CheckVar = 1;

CheckCycle.addEventListener("click", () => {
  if (CheckCycle.classList.contains("Check-1")) {
    CheckCycle.classList.remove("Check-1");
    CheckCycle.classList.add("Check-2");
  }
  else if (CheckCycle.classList.contains("Check-2")) {
    CheckCycle.classList.remove("Check-2");
    CheckCycle.classList.add("Check-3");
  }
  else {
    CheckCycle.classList.remove("Check-3");
    CheckCycle.classList.add("Check-1");
  }
});



/* Checkmate Cycle */
const CheckmateCycle = document.querySelector(".CheckmateCycle");
let CheckmateVar = 1;

CheckmateCycle.addEventListener("click", () => {
  if (CheckmateCycle.classList.contains("Checkmate-1")) {
    CheckmateCycle.classList.remove("Checkmate-1");
    CheckmateCycle.classList.add("Checkmate-2");
  }
  else if (CheckmateCycle.classList.contains("Checkmate-2")) {
    CheckmateCycle.classList.remove("Checkmate-2");
    CheckmateCycle.classList.add("Checkmate-3");
  }
  else {
    CheckmateCycle.classList.remove("Checkmate-3");
    CheckmateCycle.classList.add("Checkmate-1");
  }
});



/* Stalemate Cycle */
const StalemateCycle = document.querySelector(".StalemateCycle");
let StalemateVar = 1;

StalemateCycle.addEventListener("click", () => {
  if (StalemateCycle.classList.contains("Stalemate-1")) {
    StalemateCycle.classList.remove("Stalemate-1");
    StalemateCycle.classList.add("Stalemate-2");
  }
  else if (StalemateCycle.classList.contains("Stalemate-2")) {
    StalemateCycle.classList.remove("Stalemate-2");
    StalemateCycle.classList.add("Stalemate-3");
  }
  else {
    StalemateCycle.classList.remove("Stalemate-3");
    StalemateCycle.classList.add("Stalemate-1");
  }
});



/* Repetition Cycle */
const RepetitionCycle = document.querySelector(".RepetitionCycle");
let RepetitionVar = 1;

RepetitionCycle.addEventListener("click", () => {
  if (RepetitionCycle.classList.contains("Repetition-1")) {
    RepetitionCycle.classList.remove("Repetition-1");
    RepetitionCycle.classList.add("Repetition-2");
  }
  else if (RepetitionCycle.classList.contains("Repetition-2")) {
    RepetitionCycle.classList.remove("Repetition-2");
    RepetitionCycle.classList.add("Repetition-3");
  }
  else {
    RepetitionCycle.classList.remove("Repetition-3");
    RepetitionCycle.classList.add("Repetition-1");
  }
});



/* Dead Position Cycle */
const DeadPositionCycle = document.querySelector(".DeadPositionCycle");
let DeadPositionVar = 1;

DeadPositionCycle.addEventListener("click", () => {
  if (DeadPositionCycle.classList.contains("DeadPosition-1")) {
    DeadPositionCycle.classList.remove("DeadPosition-1");
    DeadPositionCycle.classList.add("DeadPosition-2");
  }
  else if (DeadPositionCycle.classList.contains("DeadPosition-2")) {
    DeadPositionCycle.classList.remove("DeadPosition-2");
    DeadPositionCycle.classList.add("DeadPosition-3");
  }
  else {
    DeadPositionCycle.classList.remove("DeadPosition-3");
    DeadPositionCycle.classList.add("DeadPosition-1");
  }
});



/* Dead Position Cycle */
const FiftyMoveRuleCycle = document.querySelector(".FiftyMoveRuleCycle");
let FiftyMoveRuleVar = 1;

FiftyMoveRuleCycle.addEventListener("click", () => {
  if (FiftyMoveRuleCycle.classList.contains("FiftyMoveRule-1")) {
    FiftyMoveRuleCycle.classList.remove("FiftyMoveRule-1");
    FiftyMoveRuleCycle.classList.add("FiftyMoveRule-2");
  }
  else if (FiftyMoveRuleCycle.classList.contains("FiftyMoveRule-2")) {
    FiftyMoveRuleCycle.classList.remove("FiftyMoveRule-2");
    FiftyMoveRuleCycle.classList.add("FiftyMoveRule-3");
  }
  else {
    FiftyMoveRuleCycle.classList.remove("FiftyMoveRule-3");
    FiftyMoveRuleCycle.classList.add("FiftyMoveRule-1");
  }
});