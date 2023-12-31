
const videoContainer = document.getElementById('watchvideo');
const playButton = document.querySelector('.button-play');
const closeButton = document.getElementById('close-video');

playButton.addEventListener('click', function () {
   videoContainer.classList.add('active');
});
closeButton.addEventListener('click', () => {
  videoContainer.classList.remove('active');
});
// Lấy phần tử video trong iframe
var video = document.getElementById('video').contentWindow;

// Thêm hành động khi người dùng nhấn nút play
playButton.addEventListener("click", function() {
  // Phát video
  video.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
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
   // let currentTime = 0;

   // closeButton.addEventListener("click", () => {
   //    currentTime = videoPlayer.currentTime;
   //    videoPlayer.pause();
   //    document.getElementById("watchvideo").style.display = "none";
   // });
