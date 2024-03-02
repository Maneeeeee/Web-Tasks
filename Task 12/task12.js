let images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg"
  ];
  
  let currentIndex = 0;
  
  let sliderImage = document.getElementById("sliderImage");
  let prevButton = document.getElementById("prevButton");
  let nextButton = document.getElementById("nextButton");
  
  function updateSlider() {
    sliderImage.src = images[currentIndex];
  }
  
  nextButton.addEventListener("click", function() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0; 
    }
    updateSlider();
  });
  
  prevButton.addEventListener("click", function() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1; 
    }
    updateSlider();
  });
  
  updateSlider();
  