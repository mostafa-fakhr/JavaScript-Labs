const next = document.querySelector(".next");
const previous = document.querySelector(".previous");
const imagesContainer = document.querySelector(".images-container");

// Get all image elements inside the container
const allImages = Array.from(imagesContainer.querySelectorAll("img"));

// Set the initial image index to 0
let currentIndex = 0;

// Function to show the current image
function showImage() {
  allImages.forEach((image, index) => {
    image.style.display = index === currentIndex ? "block" : "none";
  });
}

// Function to handle the next button click
function nextImage() {
  currentIndex = currentIndex + 1;
  if (currentIndex == 6) {
    currentIndex = 0;
  }
  showImage();
}

// Function to handle the previous button click
function previousImage() {
  currentIndex = currentIndex - 1;
  if (currentIndex == -1) {
    currentIndex = 5;
  }
  showImage();
}

// Add event listeners to the next and previous buttons
next.addEventListener("click", nextImage);
previous.addEventListener("click", previousImage);

// Show the initial image
showImage();
