import styles from './../css/main.css';
import $ from 'jquery';
import AOS from 'aos';
import slick from 'slick-carousel';
AOS.init({disable: 'mobile',once: true});

$(function() {
  $(".mobile-menu-button").click(function() {
    $('.mobile-menu').addClass("mobile-menu-toggle");
  });
});

$(function() {
  $(".close-menu").click(function() {
    $('.mobile-menu').removeClass("mobile-menu-toggle");
  });
});

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

$(document).ready(function(){
  $('.food-slider').slick({
    arrows: true,
    infinite: true,
    dots: true,
    dotsClass: 'flex w-full mx-auto food-slider-dots',
    prevArrow: '<i class="absolute text-6xl text-white z-50 pt-32 mt-32 pl-5 opacity-50 hover:opacity-100 hover:cursor-pointer fas fa-chevron-left slick-arrow"></i>',
    nextArrow: '<i class="absolute text-6xl text-white z-50 pin-r pin-t pt-32 mt-32 pr-5 opacity-50 hover:opacity-100 hover:cursor-pointer fas fa-chevron-right slick-arrow"></i>',
    speed: 500,
  });
});