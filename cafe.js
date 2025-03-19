const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  speed: 2000 
});


function openMenu() {
  const form = document.getElementById("openForm");
  form.style.display = "block"; 
  setTimeout(() => {
    form.classList.add("visible"); 
  }, 10); 
}

function closeForm() {
  const form = document.getElementById("openForm");
  form.classList.remove("visible"); 
  setTimeout(() => {
    form.style.display = "none"; 
  }, 500);
}


    document.addEventListener('DOMContentLoaded', () => {
        const menuToggle = document.querySelector('.menu-toggle');
        const navbar = document.querySelector('.navbar');

        menuToggle.addEventListener('click', () => {
            navbar.classList.toggle('active');
        });
    });
