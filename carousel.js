var carouselIndex = 0;
var images = ["img1.jfif", "img2.jpg", "img3.jfif"];
var text = ["1", "2", "3"];

autoScroll = () => {
  document.getElementById("carouselImage").src =
    ".images/" + images[carouselIndex];
  document.getElementById("carouselText").innerHTML = text[carouselIndex];
  if (carouselIndex === 2) {
    carouselIndex = 0;
  } else {
    carouselIndex++;
  }
  console.log(carouselIndex);
};

document.addEventListener("DOMContentLoaded", function () {
  setInterval(autoScroll, 5000);
});
