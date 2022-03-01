function currentTime() {
  const date = new Date(); 

  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  hour = formatTime(hour);
  min = formatTime(min);
  sec = formatTime(sec);
  document.getElementById("clock").innerText = hour + ":" + min + ":" + sec; 

  setTimeout(() => currentTime(), 1000);
}

function formatTime(timeSegment) {
  if (timeSegment < 10) {
    return "0" + timeSegment;       // prefix 0 to single digit number values
  }
  else {
    return timeSegment;            // else return double digit numbers
  }
}

currentTime(); 

