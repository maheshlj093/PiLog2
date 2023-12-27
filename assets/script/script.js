const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function (manual) {
    console.log(manual);
    btns.forEach((btn) => { 
        btn.classList.remove("active"); 
    }); 
    slides.forEach((slide) => { 
        slide.classList.remove("active"); 
    }); 
    contents.forEach((content) => {
        content.classList.remove("active"); 
    }); 
    btns[manual].classList.add("active"); 
    slides[manual].classList.add("active"); 
    contents[manual].classList.add("active");

} 
btns.forEach((btn, i) => { 

    btn.addEventListener("click", () => { 
        sliderNav(i); 
    }); 
});

let currentSlideIndex = 0;

function autoActivateSlider() {
    sliderNav(currentSlideIndex);
    currentSlideIndex = (currentSlideIndex + 1) % btns.length;
}

const interval = 22000;
setInterval(autoActivateSlider, interval);
window.onscroll = function() {
    var header = document.querySelector('header');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      header.style.backgroundColor = 'rgb(38 73 134 / 96%)';
    } else {
      header.style.backgroundColor = 'transparent';
    }
  };
  window.onload = function() {
    window.scrollTo(0, 0);
};
$('.carousel').carousel({
    padding: 200
});
autoplay();
function autoplay() {
$('.carousel').carousel('next');
setTimeout(autoplay, 4500);
}