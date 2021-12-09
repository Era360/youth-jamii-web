var ppbutton = document.getElementById("vidbutton");

ppbutton.addEventListener("click", playPause);

myVideo = document.getElementById("corona_vid");

function playPause() {
  if (myVideo.paused) {
    myVideo.play();
    ppbutton.innerHTML = '<i class="fas fa-pause fa-3x">' + "</i>";
    // ppbutton.innerHTML = <i class="fas fa-pause fa-3x"></i>;
    // ppbutton.innerHTML = "Pause";
  } else {
    myVideo.pause();
    ppbutton.innerHTML = '<i class="fas fa-play fa-3x">' + "</i>";
    // ppbutton.innerHTML = <i class="fas fa-play fa-3x"></i>;
    // ppbutton.innerHTML = "Play";
  }
}
