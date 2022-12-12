/** @format */

 //global variables
let session = "AM";
let t;
const Cities = [
  "Europe/London",
  "Asia/Jerusalem",
  "Asia/Tokyo",
  "Asia/Manila",
  "America/New_York",
];

function random() {
  alert("i lied,it does something");
}
function times2() {
  let x = prompt("please enter a number and you will get the number times 2");
  let y = 2;
  let z = x * y;
  document.getElementById("result").innerHTML = z;
}
function times3() {
  let x = prompt("please enter a number and you will get the number times 2");
  let y = 3;
  let z = x * y;
  document.getElementById("result").innerHTML = z;
}

function divide() {
  let x = prompt("please enter a number and you will get the number divided by 2");
  let y = 2;
  let z = x / y;
  document.getElementById("result").innerHTML = z;
}

function hideresult() {
  var y = document.getElementById("result");
  var x = document.getElementById("toggleresult");
  if (y.style.display === "none") {
    y.style.display = "block";
    document.getElementById("toggleresult").innerText = "click again to hide the result";
  } else {
    y.style.display = "none";
    document.getElementById("toggleresult").innerText = "click again to show the result";
  }
}
function login() {
  var nameInput = document.getElementById("username");
  var Password = document.getElementById("password");
  var Terms = document.getElementById("myCheck");
  if (nameInput.value !== "elichay" && Password.value !== "1234") {
    alert("Incorrect username or passwrd please verify them and try again");
  } else {
    alert("well done you logged into the website");
    hidelog();
  }
}

function popup() {
  var popup = document.getElementById("mypopup");
  popup.classList.toggle("show");
}

function hidelog() {
  var loggedin = document.getElementById("loggedin");
  var y = document.getElementById("loggedin");
  var x = document.getElementById("loginbutton");
  if (y.style.display === "none") {
    y.style.display = "block";
    x.style.display = "none";
  } else {
    y.style.display = "none";
  }
}

function hideclock() {
  var clockstart = document.getElementById("MyClockDisplay");
  var y = document.getElementById("MyClockDisplay");
  if (y.style.display === "none") {
    y.style.display = "block";
    document.getElementById("clockstart").innerText = "click again to hide the clock";
  } else {
    y.style.display = "none";
    document.getElementById("clockstart").innerText = "click again to show the clock";
  }
}
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
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  var time = hour + ":" + minute + ":" + seconds + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;
  t = setInterval(function () {
    clicktimer();
  }, 1000);
}
function dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
async function fetchTime(city) {
  const api = `https://www.timeapi.io/api/Time/current/zone?timeZone=${city}`;
  const response = await fetch(api);
  const data = await response.json();
  const { hour, minute, seconds } = data;
  showTime(hour, minute, seconds);
}
