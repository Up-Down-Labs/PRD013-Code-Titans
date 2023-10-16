<html>
<head>
<script>
function startTimer() {
  var timerElement = document.getElementById("timer");
  var seconds = 30;
  var timerInterval = setInterval(function() {
    if (seconds > 0) {
      timerElement.textContent = seconds;
      seconds--;
    } else {
      clearInterval(timerInterval);
      timerElement.textContent = "Time's Up!";
    }
  }, 1000);
}
</head>
<body>
<p>Time Remaining:<span id="timer">30</span>seconds</p>
<button onclick="startTimer()">Start Timer</button>
</script>
</body>
</html>

