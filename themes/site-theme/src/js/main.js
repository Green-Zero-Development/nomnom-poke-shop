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
  $(".mobile-menu-button").click(function() {
    $('body').addClass("overflow-hidden");
  });
});

$(function() {
  $(".close-menu").click(function() {
    $('.mobile-menu').removeClass("mobile-menu-toggle");
    $('body').removeClass("overflow-hidden");
  });
});

$(function() {
  $(".mobile-menu-item").click(function() {
    $('.mobile-menu').removeClass("mobile-menu-toggle");
    $('body').removeClass("overflow-hidden");
  });
});



$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        window.location.hash = hash;
      });
    }
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