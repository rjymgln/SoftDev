    var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: -10,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }
    }
  );


/* navbar */ 
document.addEventListener('DOMContentLoaded', () => {
        const menuToggle = document.querySelector('.menu-toggle');
        const navbar = document.querySelector('.navbar');

        menuToggle.addEventListener('click', () => {
            navbar.classList.toggle('active');
        });
    });


    function openSimplePopup(name, price, image) {
      document.getElementById('simplePopupName').textContent = name;
      document.getElementById('simplePopupPrice').textContent = price;
      document.getElementById('simplePopupImage').src = image;
      document.getElementById('simplePopupDrinkInput').value = name;
      document.getElementById('simplePopup').style.display = 'block';
      popup.style.animation = 'popupAnimation 0.3s forwards';
    }

// PRODUCT RATING & LABEL


document.addEventListener('DOMContentLoaded', function () {
    const productPopups = document.querySelectorAll('.product-popup');
  
    productPopups.forEach(popup => {
      const radios = popup.querySelectorAll('input[name="rating"]');
  
      const selectedRatingDiv = popup.querySelector('div[id^="selectedRating"]');
  
      radios.forEach(radio => {
        radio.addEventListener('change', function () {
          const selectedValue = this.value;
          if (selectedRatingDiv) {
            selectedRatingDiv.textContent = `You selected: ${selectedValue} star(s)`;
          }
        });
      });
    });
  });
  
