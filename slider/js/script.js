var sliderContainer = document.querySelector('.slider-container');
var slideShow = document.querySelector('.slide-show');
var slide = document.querySelectorAll('.slide');
var prevBtn = document.querySelector('.prevbtn');
var nextBtn = document.querySelector('.nextbtn');
var dot = document.querySelectorAll('.dot');
var timer;
var rotationDuration=4000;
var animationDuration=1000;
var currentSlide = 0;

slideShow.style.transitionDuration= animationDuration + 'ms'; 

function plusSlides(nextSlide) {
  if (event) {
   event.preventDefault();
  }

  if (currentSlide>=slide.length-1 && nextSlide==1) {
    currentSlide=0;
  }
   else if (currentSlide<=0 && nextSlide==-1) {
    currentSlide=slide.length-1;  
  } 
  else {
      currentSlide=currentSlide+nextSlide;
  } 
changeSlide(currentSlide);
} 



function dots(dotIndex) {
    event.preventDefault();
    currentSlide=dotIndex-1;
    changeSlide(currentSlide);
}


function changeSlide(currentSlide) {

 slideShow.style.marginLeft = '-' + currentSlide * 400  + 'px';
   for (i=0; i<dot.length; i++) {
      if (currentSlide==i) {
        dot[i].classList.add("active");
      }

      else {
        dot[i].classList.remove("active");
      }
   
   }
animation();
}



animation();

function animation() {
  clearTimeout(timer);
  timer=setTimeout(function() {
      plusSlides(+1);
  }, rotationDuration);
}














