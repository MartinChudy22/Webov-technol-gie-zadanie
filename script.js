function updateClock() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  var clockElement = document.getElementById("clock");
  clockElement.innerHTML = hours + ":" + minutes + ":" + seconds;
}

updateClock();
setInterval(updateClock, 1000);