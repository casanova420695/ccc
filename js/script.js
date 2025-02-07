let navbar = document.querySelector('.header .navbar');
//let searchForm = document.querySelector('.header .search-form');
//let loginForm = document.querySelector('.header .login-form');
let contactInfo = document.querySelector('.contact-info');
let currentIndex = 0;
const images = document.querySelectorAll('.gallery-container img');
const modal = document.getElementById('myModal');
const modalImg = document.getElementById('modalImg');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   //searchForm.classList.remove('active');
  // loginForm.classList.remove('active');
};

//document.querySelector('#search-btn').onclick = () =>{
//   searchForm.classList.toggle('active');
//   navbar.classList.remove('active');
//   loginForm.classList.remove('active');
//};

//document.querySelector('#login-btn').onclick = () =>{
//   loginForm.classList.toggle('active');
//   navbar.classList.remove('active');
//   searchForm.classList.remove('active'); 
//};

document.querySelector('#info-btn').onclick = () =>{
   contactInfo.classList.add('active');
}

document.querySelector('#close-contact-info').onclick = () =>{
   contactInfo.classList.remove('active');
}
document.querySelectorAll('.projects .box .image a').forEach(anchor => {
  anchor.addEventListener('click', event => {
      event.stopPropagation(); 
  });
});

document.querySelectorAll('.projects .box .content').forEach(content => {
  content.addEventListener('click', event => {
      event.stopPropagation(); 
  });
});



document.addEventListener('DOMContentLoaded', function() {
  var redirectIcons = document.querySelectorAll('.redirect');
  redirectIcons.forEach(function(icon) {
      icon.addEventListener('click', function(event) {
          event.preventDefault();
          window.location.href = this.getAttribute('data-href');
      });
  });
});

function openModal(index) {
  currentIndex = index;
  modal.style.display = "block";
  modalImg.src = images[currentIndex].src;
}

function closeModal() {
  modal.style.display = "none";
}

function changeImage(n) {
  currentIndex += n;
  if (currentIndex >= images.length) {
      currentIndex = 0;
  } else if (currentIndex < 0) {
      currentIndex = images.length - 1;
  }
  modalImg.src = images[currentIndex].src;
}

window.onscroll = () =>{
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
   contactInfo.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
   loop:true,
   grabCursor:true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".reviews-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});


var swiper = new Swiper(".blogs-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".logo-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      450: {
         slidesPerView: 2,
       },
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1000: {
        slidesPerView: 5,
      },
   },
});