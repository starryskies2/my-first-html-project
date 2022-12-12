/** @format */

var ball1Size = 100;
var ball2Size = 100;
var ball2SizeStep = 50;
var ball5Size = 1;
var isGrowing = true;

function onBall1Click() {
  var ball1 = document.querySelector(".ball1");
  ball1Size = ball1Size + 50;
  ball1.innerText = ball1Size;
  ball1.style.width = ball1Size + "px";
  ball1.style.height = ball1Size + "px";
  console.log(ball1.style.width);
  if (ball1Size == 400) {
    ball1Size = 50;
  }
  if (ball1Size == 400) {
    ball1.style.backgroundColor = "red";
  } else {
    ball1.style.backgroundColor = "yellow";
  }
}

function onBall2Click() {
  var ball2 = document.querySelector(".ball2");
  ball2.innerText = ball2Size;
  ball2.style.width = ball2Size + "px";
  ball2.style.height = ball2Size + "px";
  if (isGrowing && ball2Size >= 400) {
    isGrowing = false;
  }
  if (!isGrowing && ball2Size <= 100) {
    isGrowing = true;
  }
  if (isGrowing) {
    ball2Size = ball2Size + ball2SizeStep;
  } else {
    ball2Size = ball2Size - ball2SizeStep;
  }
}
function onBall3Click() {
  var ball3 = document.querySelector(".ball3");
  if (ball3.innerText == "on") {
    ball3.innerText = "off";
    ball3.style.backgroundColor = "gray";
  } else {
    ball3.innerText = "on";
    ball3.style.backgroundColor = "yellow";
  }
}
function onBall4Click() {
  var ball4 = document.querySelector(".ball4");
  var ball3 = document.querySelector(".ball3");
  ball4.innerText = "prompet";
  if (ball3.innerText == "on") {
    var givensize = prompt("enter the size of the ball");
    ball4.innerText = givensize;
    ball4.style.width = givensize + "px";
    ball4.style.height = givensize + "px";
    if (givensize > 1000) {
      alert(
        "the size of the ball is too big enter number bigger then 1000 please try again",
      );
      ball4.innerText = 100;
      ball4.style.width = 100 + "px";
      ball4.style.height = 100 + "px";
    }
  }
}

function onBall5Click() {
  alert("alert does nothing");
}
function hidepicture() {
  var y = document.getElementById("coding_picture");
  if (y.style.display === "none") {
    y.style.display = "block";
    document.getElementById("hidebutton").innerText = "click again to hide the picture";
  } else {
    y.style.display = "none";
    document.getElementById("hidebutton").innerText = "click again to show the picture";
  }
}
