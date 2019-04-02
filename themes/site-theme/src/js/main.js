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
  $('.food-slider').slick({
    arrows: true,
    infinite: true,
    dots: true,
    fade: true,
    dotsClass: 'flex w-full mx-auto food-slider-dots',
    prevArrow: '<i class="absolute text-4xl text-white z-50 pt-32 mt-32 pl-5 fas fa-chevron-left slick-arrow"></i>',
    nextArrow: '<i class="absolute text-4xl text-white z-50 pin-r pin-t pt-32 mt-32 pr-5 fas fa-chevron-right slick-arrow"></i>',
    speed: 500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          fade: false,
          arrows: false,
          infinite: true,
          dots: true,
          speed: 500,
        }
      }
    ]
  });
});