/** @format */

var h = 0; //global variables
var m = 0;
var s = 0;
var session = "AM";
let t;
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
  var h = hour; // 0 - 23
  var m = minute; // 0 - 59
  var s = seconds; // 0 - 59
  var session = "AM";
  if (h > 12) {
    session = "PM";
  } else {
    session = "AM";
  }
  function clicktimer() {
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    if (s <= 59) {
      s = s + 1;
    } else {
      s = s - 60;
      m = m + 1;
    }
    if (m == 59) {
      m = m - 59;
      h = h + 1;
    }
    if (h == 24) {
      h = 0;
    }

    if (h > 12) {
      session = "PM";
    } else {
      session = "AM";
    }
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  var time = h + ":" + m + ":" + s + " " + session;
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

async function fetchtimeLondon() {
  const api_london =
    "https://www.timeapi.io/api/Time/current/zone?timeZone=Europe/London";
  const response = await fetch(api_london);
  const data = await response.json();
  const { hour, minute, seconds } = data;
  showTime(hour, minute, seconds);
}

async function fetchtimeNewYork() {
  const api_NewYork =
    "https://www.timeapi.io/api/Time/current/zone?timeZone=America/New_York";
  const response = await fetch(api_NewYork);
  const data = await response.json();
  const { hour, minute, seconds } = data;
  showTime(hour, minute, seconds);
}

async function fetchtimeJerusalem() {
  const api_Jerusalem =
    "https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Jerusalem";
  const response = await fetch(api_Jerusalem);
  const data = await response.json();
  const { hour, minute, seconds } = data;
  showTime(hour, minute, seconds);
}

async function fetchtimeManila() {
  const api_Manila = "https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Manila";
  const response = await fetch(api_Manila);
  const data = await response.json();
  const { hour, minute, seconds } = data;
  showTime(hour, minute, seconds);
}

async function fetchtimeTokyo() {
  const api_Tokyo = "https://www.timeapi.io/api/Time/current/zone?timeZone=%09Asia/Tokyo";
  const response = await fetch(api_Tokyo);
  const data = await response.json();
  const { hour, minute, seconds } = data;
  showTime(hour, minute, seconds);
}
