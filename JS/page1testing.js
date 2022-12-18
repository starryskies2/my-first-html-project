/** @format */

let session = "AM";
let t;
function showTime(hour, minute, seconds) {
  clearInterval(t);
  var session = "AM";
  if (seconds <= 58) {
    seconds = seconds + 1;
  } else {
    seconds = 0;
    minute = minute + 1;
  }
  if (minute == 58) {
    minute = 0;
    hour = hour + 1;
  }
  if (hour == 24) {
    hour = 0;
  }

  if (hour > 12) {
    session = "PM";
  } else {
    session = "AM";
  }
 hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  var time = hour + ":" + minute + ":" + seconds + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;
  t = setInterval(function(){clicktimer();},1000);
}

function clicktimer() {
  var time = hour + ":" + minute + ":" + seconds + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;
  if (seconds <= 58) {
    seconds = seconds + 1;
  } else {
    seconds = 0;
    minute = minute + 1;
  }
  if (minute == 58) {
    minute = 0;
    hour = hour + 1;
  }
  if (hour == 24) {
    hour = 0;
  }

  if (hour > 12) {
    session = "PM";
  } else {
    session = "AM";
  }
}