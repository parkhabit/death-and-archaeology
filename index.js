/* NAVIGATION*/

/* Open when someone clicks on the span element */
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



/* PAGE 1 ABOUT*/
document.querySelector('.navButton').addEventListener('mouseover', function(){
  this.style.opacity="0.1";
});
document.querySelector('.navButton').addEventListener('mouseout', function(){
  this.style.opacity='1';
});
/* END OF PAGE 1 ABOUT*/




/* PAGE 2 TYPES OF BEHAVIOUR*/
var lis = document.querySelectorAll(".responsive-img");

for(var i=0; i<lis.length; i++){
  lis[i].addEventListener("mouseover", function(){
    this.style.opacity="0";
  });
}
for(var i=0; i<lis.length; i++){
  lis[i].addEventListener("mouseout", function(){
    this.style.opacity="1";
  });
}


/* END OF PAGE 2 TYPES OF BEHAVIOUR*/





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
