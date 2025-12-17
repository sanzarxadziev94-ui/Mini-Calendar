const dateEl = document.getElementById("date");
const dayEl = document.getElementById("day");
const monthEl = document.getElementById("month");
const yearEl = document.getElementById("year");

const today = new Date();

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

dateEl.innerHTML = today.getDate().toString().padStart(2, "0");
dayEl.innerHTML = weekDays[today.getDay()];
monthEl.innerHTML = allMonths[today.getMonth()];
yearEl.innerHTML = today.getFullYear();
