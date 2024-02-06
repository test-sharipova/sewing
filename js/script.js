const menu = document.querySelector('.menu'),
menuItem = document.querySelectorAll('.menu__item'),
hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('menu_active');
});

menuItem.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });
});

$('.promo__slider').slick({
    infinite: false,
    
    responsive: [
        
        {
          breakpoint: 767,
          settings: {
            arrows: false,
            dots: true
          }
        }
        
      ]
});

$('.works__slider').slick({
  slidesToShow: 4,
  infinite: false,
  responsive: [
        
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 3,
        
      }
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        
        slidesToShow: 1,
      }
    }
    
  ]
});

$('.works__slider').magnificPopup({
  delegate: 'a',
  type: 'image',
  closeOnContentClick: false,
  closeBtnInside: false,
  mainClass: 'mfp-with-zoom mfp-img-mobile',
  image: {
    verticalFit: true,
   
  },
  gallery: {
    enabled: true
  },
  zoom: {
    enabled: true,
    duration: 300, // don't foget to change the duration also in CSS
    opener: function(element) {
      return element.find('img');
    }
  }
  
});