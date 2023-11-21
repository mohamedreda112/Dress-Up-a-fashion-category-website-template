// swiper-slide
var swiper = new Swiper(".bg-slider-thumbs", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 0,
});
var swiper2 = new Swiper(".bg-slider", {
    loop: true,
    spaceBetween: 0,
    thumbs: {
      swiper: swiper,
    },
});


// Navigation bar effects on scroll
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
});

//Responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click",() => {
  navigation.classList.add("active")
});
closeBtn.addEventListener("click",() => {
  navigation.classList.remove("active")
});

let span = document.querySelector(".up");

window.onscroll = function () {
  if (this.scrollY >= 500) {
    span.classList.add("show");
  }else {
    span.classList.remove("show");
  }
}

span.onclick = () => {
  window.scrollTo({
    top:0,
    behavior:"smooth",
  })
}