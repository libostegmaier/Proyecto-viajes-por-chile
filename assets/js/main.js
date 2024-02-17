//Desplazamiento
ocument.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/* Función para cambiar los colores según se mueve y según se abre */
$(document).ready(function () {
    var navbar = $('.navbar');
    var navbarToggler = $('.navbar-toggler');

    $(window).scroll(function () {
      if ($(this).scrollTop() > 50 || navbarToggler.attr('aria-expanded') === 'true') {
        navbar.addClass('navbar-scrolled');  /* Si el usuario se mueve más de 50 px se activa la clase que crees en el css, en este caso "navbar-scrolled" sino se desactiva  */
      } else {
        navbar.removeClass('navbar-scrolled');
      }
    });