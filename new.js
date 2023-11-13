const frontImage = document.querySelector(".header--front");
const section1 = document.querySelector("#section--1");
const learnBtn = document.querySelector(".learnmore");
const navBar = document.querySelector(".nav");
const header = document.querySelector(".header");
const slides = document.querySelectorAll(".testimonial");
const btnRight = document.querySelector(".btn--right");
const btnLeft = document.querySelector(".btn--left");

const srtImage = function (src, text) {
  const headerImage = document
    .querySelector(".header--front")
    .querySelector("img");
  // console.log(headerImage);
  // console.log(src);
  if (headerImage) headerImage.parentNode.removeChild(headerImage);
  const imageContent = `<img src="${src}" alt="" />`;
  //   console.log(imageContent);
  frontImage.insertAdjacentHTML("afterBegin", imageContent);
  const headerText = document.querySelector(".header--text");
  if (headerText) headerText.parentNode.removeChild(headerText);
  // console.log(headerText);

  const textContent = `<div class="header--text">
                  ${text}
                </div>`;
  frontImage.insertAdjacentHTML("beforeEnd", textContent);
};
const newchange = function () {
  const slides = document.querySelector(".main__header--slides");
  const allSlides = document.querySelectorAll(".main__header--slide");
  let firstSlide;
  let nextSlides = [];
  allSlides.forEach((slide, index) => {
    if (index == 0) {
      firstSlide = slide;
      slide.parentNode.removeChild(slide);
    } else {
      nextSlides.push(slide);
      slide.parentNode.removeChild(slide);
    }
  });
  // const firstSlideImage = firstSlide.querySelector("img");
  // console.log(firstSlide.querySelector("img"));
  // console.log(nextSlides);
  srtImage(
    firstSlide.querySelector("img").getAttribute("src"),
    firstSlide.querySelector(".hidden").innerHTML
  );
  nextSlides.forEach((slide) => slides.appendChild(slide));
  slides.appendChild(firstSlide);
};
function moveToBottom(clickedSlide, allSlides) {
  allSlides.removeChild(clickedSlide);
  allSlides.appendChild(clickedSlide);
}
newchange();
//   change();
const changeSlide = setInterval(newchange, 5000);

// function adjustWidthToPreventScrollbar() {
//   const hasVerticalScrollbar =
//     window.innerHeight < document.body.scrollHeight;
//   document.documentElement.style.overflowY = hasVerticalScrollbar
//     ? "scroll"
//     : "";
//   document.body.style.width = hasVerticalScrollbar
//     ? "calc(100% - 17px)"
//     : "";
// }

// window.addEventListener("resize", adjustWidthToPreventScrollbar);
// adjustWidthToPreventScrollbar();
learnBtn.addEventListener("click", function (e) {
  e.preventDefault();
  section1.scrollIntoView({ behavior: "smooth" });
});

// const navHeight = navBar.getBoundingClientRect().height;
// console.log(navHeight)

// const stickyNav = function (entries) {
//   const [entry] = entries;
//   //console.log(entry.isIntersecting);
//   !entry.isIntersecting
//     ? navBar.classList.add("sticky")
//     : navBar.classList.remove("sticky");
// };

// const headerObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
//   rootMargin: `${navHeight}px`,
// });
// headerObserver.observe(header);

let currentSlide = 0;
const maxSlides = slides.length - 1;
const goToSlide = function (curSlide) {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;
  });
};

goToSlide(0);

const nextSlide = function () {
  maxSlides === currentSlide ? (currentSlide = 0) : currentSlide++;
  goToSlide(currentSlide);
  // activateDot(currentSlide);
};

const previousSlide = function () {
  currentSlide === 0 ? (currentSlide = maxSlides) : currentSlide--;
  goToSlide(currentSlide);
  // activateDot(currentSlide);
};

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", previousSlide);
