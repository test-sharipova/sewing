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