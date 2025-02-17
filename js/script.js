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


function openModal(index) {
    const modal = document.getElementById("myModal");
    const modalContent = document.getElementById("modalContent");
    const galleryItems = document.querySelectorAll(".gallery-container img, .gallery-container video");
    currentIndex = index;
    showItem(galleryItems[currentIndex]);
    modal.style.display = "flex"; 
}

function showItem(item) {
    const modalContent = document.getElementById("modalContent");
    if (item.tagName === "VIDEO") {
        modalContent.innerHTML = `
            <video controls autoplay muted class="modal-content">
                <source src="${item.querySelector("source").src}" type="video/mp4">
                Tu navegador no soporta el elemento de video.
            </video>`;
    } else {
        modalContent.innerHTML = `<img src="${item.src}" alt="${item.alt}" class="modal-content">`;
    }
}

function prevItem() {
    const galleryItems = document.querySelectorAll(".gallery-container img, .gallery-container video");
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    showItem(galleryItems[currentIndex]);
}
function nextItem() {
    const galleryItems = document.querySelectorAll(".gallery-container img, .gallery-container video");
    currentIndex = (currentIndex + 1) % galleryItems.length;
    showItem(galleryItems[currentIndex]);
}

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}

document.addEventListener('DOMContentLoaded', function() {
  var redirectIcons = document.querySelectorAll('.redirect');
  redirectIcons.forEach(function(icon) {
      icon.addEventListener('click', function(event) {
          event.preventDefault();
          window.location.href = this.getAttribute('data-href');
      });
  });
});


//https://www.w3schools.com/howto/howto_js_copy_clipboard.asp

function copyText() {
  var text = document.getElementById("text-to-copy").innerText;


  var tempElement = document.createElement("textarea");
  tempElement.value = text;
  document.body.appendChild(tempElement);


  tempElement.select();
  tempElement.setSelectionRange(0, 99999); // For mobile devices

  document.execCommand("copy");
  document.body.removeChild(tempElement);

  alert("done: " + text);
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