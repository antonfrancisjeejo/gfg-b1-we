function showTime() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let session = "AM";
  if (hours > 12) {
    session = "PM";
    hours -= 12;
  }

  //ternary operator ?:

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let time = `${hours}:${minutes}:${seconds} ${session}`;
  document.getElementById("clock").innerText = time;
  setTimeout(showTime, 1000);
}

showTime();
// setInterval(showTime, 1000);
