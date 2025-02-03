function startGame() {
  let randomNumber1 = Math.random();
  randomNumber1 = Math.floor(randomNumber1 * 6) + 1;

  let randomSource1 = "images/dice" + randomNumber1 + ".png";

  document.querySelector(".img1").setAttribute("src", randomSource1);

  let randomNumber2 = Math.random();
  randomNumber2 = Math.floor(randomNumber2 * 6) + 1;

  let randomSource2 = "images/dice" + randomNumber2 + ".png";

  document.querySelector(".img2").setAttribute("src", randomSource2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
  } else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩It's a Tie🚩";
  } else {
    document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
  }
}

startGame();

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  startGame();
});
