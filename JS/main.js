let timerElement = document.getElementById("timer");
    let startTime;
    let elapsedTime = 0;
    let timerInterval;
    let timeInSeconds;
    let isStopped = true;

    function startStopwatch() {
      if (!isStopped) {
        return; // Stopwatch is already running, do nothing
      }

      if (!timerInterval) {
        timeInSeconds = parseInt(prompt("Enter time in seconds:"));
        if (!isNaN(timeInSeconds) && timeInSeconds > 0) {
          startTime = Date.now() - elapsedTime;
          timerInterval = setInterval(updateStopwatch, 10);
          isStopped = false;
        } else {
          alert("Please enter a valid time in seconds.");
        }
      } else {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateStopwatch, 10);
        isStopped = false;
      }
    }

    function stopStopwatch() {
        clearInterval(timerInterval);
        console.log(timerInterval);
        isStopped = true;
        if (elapsedTime >= timeInSeconds * 1000) {
            alert("timer reached destination given by you please reset and start again. thank you");

          }
    }

    function resetTimer() {
      clearInterval(timerInterval);
      elapsedTime = 0;
        displayTime(elapsedTime);
        timerElement.style.color = "black";
        timerInterval = false;
      isStopped = true;
    }

    function updateStopwatch() {
      let currentTime = Date.now();
      elapsedTime = currentTime - startTime;
      displayTime(elapsedTime);

      if (elapsedTime >= timeInSeconds * 1000) {
        clearInterval(timerInterval);
        timerElement.style.color = "red";
      }
    }

    function displayTime(time) {
      let milliseconds = Math.floor((time % 1000) / 10);
      let seconds = Math.floor((time / 1000) % 60);
      let minutes = Math.floor((time / (1000 * 60)) % 60);
      let hours = Math.floor((time / (1000 * 60 * 60)) % 24);

      milliseconds = milliseconds < 10 ? "0" + milliseconds : milliseconds;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      hours = hours < 10 ? "0" + hours : hours;

      timerElement.innerHTML = hours + ":" + minutes + ":" + seconds;
    }

    displayTime(elapsedTime); // Display initial time