let buttonColors = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];

let started = false;
let level = 0;

document.addEventListener("keypress", () => {
  if (!started) {
    document.querySelector("h1").innerHTML = "Level " + level;
    nextSequence();
    started = true;
  }
});

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    let userChosenColor = event.target.id;
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animateOnPress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
  });
});

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    document.querySelector("h1").innerHTML = "Game Over, Please restart";
    document.querySelector("body").classList.add("game-over");

    setTimeout(() => {
      document.querySelector("body").classList.remove("game-over");
    }, 200);
    startOver();
  }
}

function nextSequence() {
  userClickedPattern = [];
  level++;
  document.querySelector("h1").innerHTML = "Level " + level;
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  document
    .querySelector("#" + randomChosenColor)
    .setAttribute("style", "opacity:0.3");
  setTimeout(() => {
    document
      .querySelector("#" + randomChosenColor)
      .setAttribute("style", "opacity:1");
  }, 200);
  playSound(randomChosenColor);
}

function playSound(name) {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animateOnPress(color) {
  document.querySelector("#" + color).classList.add("pressed");
  setTimeout(() => {
    document.querySelector("#" + color).classList.remove("pressed");
  }, 100);
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
