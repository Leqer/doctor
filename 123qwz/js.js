const images = ["img/image1.png", "img/image2.png"];
let currentImageIndex = 0;

function changeImage(step) {
  currentImageIndex += step;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  } else if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  document.getElementById("main-image").style.opacity = 0;
  setTimeout(() => {
    document.getElementById("main-image").src = images[currentImageIndex];
    document.getElementById("main-image").style.opacity = 1;
  }, 200); // Adjust the duration for a smoother transition
}

let prevClickedBtn = null;

function handleButtonClick(btn) {
  if (prevClickedBtn) {
    prevClickedBtn.classList.remove('clicked');
  }
  btn.classList.add('clicked');
  prevClickedBtn = btn;
}

