const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");
const slide = document.querySelector(".move");
const hidden = document.querySelectorAll(".hidden");
const slideWidth = slide.offsetWidth + 50;
const pic = document.querySelectorAll(".picture");
const root = document.documentElement;
const len = pic.length;
var index = 1;

root.style.setProperty("--width", slideWidth - 50 + "px");

btnNext.addEventListener("click", function () {
  hidden[1].style.display = "block"; // hiện thẻ để che nút button
  slide.style.transition = "transform 0.5s linear";
  index++;
  slide.style.transform = "translateX(" + -slideWidth * index + "px)";
  if (index === len - 1) {
    //khi ảnh tới slide cuối thì chuyển qua slide dầu
    setTimeout(function () {
      slide.style.transition = "none";
      index = 1;
      slide.style.transform = "translateX(" + -slideWidth * index + "px)";
    }, 500);
  }
  setTimeout(function () {
    hidden[1].style.display = "none";
  }, 500);
});

btnPrev.addEventListener("click", function () {
  hidden[0].style.display = "block";
  slide.style.transition = "transform 0.5s linear";
  index--;
  slide.style.transform = "translateX(" + -slideWidth * index + "px)";
  if (index === 0) {
    setTimeout(() => {
      slide.style.transition = "none";
      index = 5;
      slide.style.transform = "translateX(" + -slideWidth * index + "px)";
    }, 500);
  }
  setTimeout(function () {
    hidden[0].style.display = "none";
  }, 500);
});
