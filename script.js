console.log("Welcome to spotify");
// initialize the variables
let songIndex = 0;
let audioElement = new Audio("1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songs = [
  { songName: "Ram Siya Ram", filePath: "1.mp3", coverPath: "1.jpg" },
  { songName: "Ram Naam se Jagmag Hai", filePath: "2.m4r", coverPath: "cover/1.jpg" },
  { songName: "Patthar pe Raam Naam", filePath: "3.mp3", coverPath: "cover/1.jpg" },
  { songName: "Ram Aynge", filePath: "4.mp3", coverPath: "cover/1.jpg" },
  { songName: "Yug Ram Raj Ka Aa Gaya", filePath: "5.mp3", coverPath: "cover/1.jpg" },
  { songName: "Sab Kuch Tera ", filePath: "6.mp3", coverPath: "cover/1.jpg" },
  { songName: "Bharat Ka Baccha Baccha", filePath: "7.mp3", coverPath: "cover/1.jpg" },
];


// audioElement.play();

// Handel Play/Pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});
// Listen to Events
audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
  //Update Seekbar
});
myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});
