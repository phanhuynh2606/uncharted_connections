
const videoContainer = document.getElementById('watchvideo');
const playButton = document.querySelector('.button-play');

playButton.addEventListener('click', function () {
   videoContainer.classList.add('active');
});

   const videoPlayer = document.querySelector("video");

   playButton.addEventListener("click", () => {
      videoPlayer.play();
      document.getElementById("watchvideo").style.display = "block";
   });

// Lấy phần tử HTML liên quan đến nút điều hướng
var toggleButton = document.querySelector(".inner-menu-mobi .button-menu");

// Lấy phần tử HTML liên quan đến menu
var menu = document.querySelector("#show-menu");

// Thêm sự kiện "click" vào nút điều hướng
toggleButton.addEventListener("click", function() {
  // Thêm hoặc xóa lớp "show-menu" vào phần tử HTML liên quan đến menu
  menu.classList.toggle("show-menu");
});

// dung video
const closeButton = document.getElementById("close-video");
   let currentTime = 0;

   closeButton.addEventListener("click", () => {
      currentTime = videoPlayer.currentTime;
      videoPlayer.pause();
      document.getElementById("watchvideo").style.display = "none";
   });
