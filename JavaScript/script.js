let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}

//Scroll spy

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.header .navbar a');


window.onscroll = () =>{
    searchForm.classList.remove('active'); /*Evita el cruce entre la busqueda y el menu de navegacion*/
    navbar.classList.remove('active');

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
    
    section.forEach(sec =>{  /*Para que el scroll sombree en el header la sección en la que estamos*/
      let top = window.scrollY;
      let offset = sec.offsetTop - 200;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if(top >=offset && top < offset + height){
        navLinks.forEach(link =>{
          link.classList.remove('active'); /*Si pasamos por otra sección, esta deja de sombrearse*/
          document.querySelector('.header .navbar a[href*='+id+']').classList.add('active');  /*Y se sombrea la actual*/
        })

      }
    })
}

window.onload = () =>{

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}


var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
  });

  var swiper = new Swiper(".products-slider", {
    spaceBetween: 20,
    loop:true,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    grabCursor:true,
    breakpoints: { /*Responsive*/
        0: {
          slidesPerView: 1, /*Numero de productos visibles del slider de acuerdo a la pantalla*/
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
      },
  });