document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navlist = document.getElementById('nav-list');

    hamburgerBtn.addEventListener('click', function() {
        navlist.classList.toggle('show');
    });

    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navlist.classList.remove('show');
        });
    });

    document.addEventListener('click', function(event) {
        const isClickInsideNav = navlist.contains(event.target);
        const isClickOnHamburger = hamburgerBtn.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnHamburger && navlist.classList.contains('show')) {
            navlist.classList.remove('show');
        }
    });
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


function playMusic() {
  var audio = document.getElementById('audio');
  var playButton = document.querySelector('.play-button');
  var pauseButton = document.querySelector('.pause-button');

  audio.play();
  playButton.style.display = 'none'; 
  pauseButton.style.display = 'inline'; 
}

function pauseMusic() {
  var audio = document.getElementById('audio');
  var playButton = document.querySelector('.play-button');
  var pauseButton = document.querySelector('.pause-button');

  audio.pause();
  playButton.style.display = 'inline';
  pauseButton.style.display = 'none';
}