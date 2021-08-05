$(function(){
  
  $('.loved__slider').slick({
    slidesToScroll: 1,
    slidesToShow: 4,
    dots: true,
    arrows: false,
    variableWidth: true,
    autoplay: 3000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          variableWidth: false,
          slidesToShow: 1,
        }
      },
    ]
  });
  $('.reviews__slider').slick({
    slidesToScroll: 1,
    slidesToShow: 2,
    dots: true,
    arrows: false,
    autoplay: 3000,
    responsive: [
      {
        breakpoint: 690,
        settings: {
          variableWidth: false,
          slidesToShow: 1,
        }
      },
    ]

  });
  $('.recipes__slider').slick({
    slidesToScroll: 1,
    slidesToShow: 3,
    dots: true,
    arrows: false,
    autoplay: 3000,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1,
        }
      },

    ]

  });


  $('.menu-btn').on('click', function() {
    $('.menu-btn').toggleClass('menu-btn--active');
    $('.mobMenu').toggleClass('mobMenu--active');
    $('body').toggleClass('lock');
    $('html').toggleClass('lock');
  })


  $('.mobMenu__list-link').on('click', function () {
    $('.mobMenu').removeClass('mobMenu--active'); 
    $('.menu-btn').toggleClass('menu-btn--active');
  });


  const animItems = document.querySelectorAll('._anim');
  
  if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
      for (let i = 0; i < animItems.length; i++) {
        const animItem = animItems[i];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top; //насколько объект ниже
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animStart > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }
        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
          animItem.classList.add('anim');
          animItem.classList.add('animed');
        } else {
          if (!animItem.classList.contains('animed')) {
            animItem.classList.remove('anim');
          }
        }
      }
    }
    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    animOnScroll();
  }
});