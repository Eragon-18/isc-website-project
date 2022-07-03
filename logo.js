var images = [
  "mi.png",
  "csk.png",
  "rcb.png",
  "gt.png",
  "rr.svg",
  "srh.png",
  "pbks.png",
  "lsg.png",
  "kkr.svg",
  "dc.png",
];
var text = [
  "Mumbai Indians",
  "Chennai Super Kings",
  "Royal Challengers Bangalore",
  "Gujarat Titans",
  "Rajasthan Royals",
  "Sunrisers Hyderabad",
  "Punjab Kings",
  "Lucknow Super Giants",
  "Kolkata Knight Riders",
  "Delhi Capitals",
];
var carouselIndex1 = 0;
var carouselIndex2 = 1;
var carouselIndex3 = 2;
autoScroll = () => {
  document.getElementById("logoImage1").src =
    "images/" + images[carouselIndex1];
  document.getElementById("logoImage2").src =
    "images/" + images[carouselIndex2];
  document.getElementById("logoImage3").src =
    "images/" + images[carouselIndex3];
  document.getElementById("carouselText1").innerHTML = text[carouselIndex1];
  document.getElementById("carouselText2").innerHTML = text[carouselIndex2];
  document.getElementById("carouselText3").innerHTML = text[carouselIndex3];
  if (carouselIndex1 === 9) {
    carouselIndex1 = 0;
    carouselIndex2++;
    carouselIndex3++;
  } else if (carouselIndex2 === 9) {
    carouselIndex2 = 0;
    carouselIndex1++;
    carouselIndex3++;
  } else if (carouselIndex3 === 9) {
    carouselIndex3 = 0;
    carouselIndex1++;
    carouselIndex2++;
  } else {
    carouselIndex1++;
    carouselIndex2++;
    carouselIndex3++;
  }

  console.log("1: " + carouselIndex1);
  console.log("2: " + carouselIndex2);
  console.log("3: " + carouselIndex3);
};

document.addEventListener("DOMContentLoaded", function () {
  setInterval(autoScroll, 10000);
});

redirect = (imageNo) => {
  if (imageNo === 1) {
    window.location =
      "teams/" + images[carouselIndex1 - 1].split(".")[0] + ".html";
  } else if (imageNo === 2) {
    window.location =
      "teams/" + images[carouselIndex2 - 1].split(".")[0] + ".html";
  } else if (imageNo === 3) {
    window.location =
      "teams/" + images[carouselIndex3 - 1].split(".")[0] + ".html";
  }
};
    