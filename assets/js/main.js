var audio = document.getElementById("music");
audio.volume = 0.02;
var isPlaying = false;

function play() {
  isPlaying ? music.pause() : music.play();
};

music.onplaying = function () {
  isPlaying = true;
};

music.onpause = function () {
  isPlaying = false;
}