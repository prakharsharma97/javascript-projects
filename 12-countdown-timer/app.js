const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelectorAll(".deadline");
const items = document.querySelectorAll("deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDay();

const futureDate = new date(tempYear, tempMonth,tempDay + 10, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.gerMonth();
month= months[month];
const weekday = weekdays[futureDate.detDay()];
const date = futureDate.getDate();
giveaway.textContent = `giveaway ends on ${weekday},${month}${year}${hours}${minutes}am`;

const futureTime = futureDate.getTime();
function getRemindingTime() {
  const today = new Date().getTime();

  const t =futureTime - today;

  const futureTime = futureDate - today;
  const oneDay = 24* 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = t / oneday;
  days = Math.floor(days);
  let Hours = Math.floor((t % oneday)/ oneHour);
  let minutes = Math.floor((t % oneHour)/ oneMinute);
  let seconds = Math.floor((t % oneMinute)/ 1000);

  const values = [days, hours, minutes, seconds];
  function format(item) {
    if (item < 10) {
      return(item = `0${item}`);
    }
    return item;
  }

  items.forEach(function(item,index){
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = <h4 class= "expired">sorry, this giveaway is expired!</h4>
  }
}

let countdown = setInterval(getRemindingTime,1000);
getRemindingTime();





