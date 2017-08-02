

$document.ready(function(){
/* NAVIGATION*/

/* Open when someone clicks*/
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

/* END OF NAVIGATION*/


/*HEADING PAGE*/

document.querySelector('.titlePage').addEventListener('click', function() {
  this.classList.toggle('titlePageInverted');
});





/*PAGE 4*/
var bord = document.querySelectorAll(".section");
for(var i=0; i<bord.length; i++){
  bord[i].addEventListener("mouseover", function(){
    this.style.borderColor="#eee";
  });
}
for(var i=0; i<bord.length; i++){
  bord[i].addEventListener("mouseout", function(){
    this.style.borderColor="#fff";
  });
}





/*SLIDER*/
var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}
});
