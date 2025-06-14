/*
Theme: Atlanta - Free business bootstrap template
Description: Free to use for personal and commercial use
Author: Defan Soluções Digitais.com
Website: http://Defan Soluções Digitais.com
Note: Please do not remove the footer backlink (Defan Soluções Digitais.com)--(if you want to remove contact: Defan Soluções Digitais@gmail.com)
Licence: Creative Commons Attribution 3.0** - http://creativecommons.org/licenses/by/3.0/
*/
jQuery(document).ready(function ($) {
  // headroom
  $(".headroom").headroom({
    tolerance: 20,
    offset: 50,
    classes: {
      initial: "animated",
      pinned: "slideDown",
      unpinned: "slideUp",
    },
  });
  //da slider
  $("#da-slider").cslider({
    autoplay: true,
    bgincrement: 0,
  });
  //Set the carousel options
  $("#quote-carousel").carousel({
    pause: true,
    interval: 4000,
  });
  // fancybox
  $(".fancybox").fancybox();
  //isotope
  if ($(".isotopeWrapper").length) {
    var $container = $(".isotopeWrapper");
    var $resize = $(".isotopeWrapper").attr("id");
    // initialize isotope
    $container.isotope({
      itemSelector: ".isotopeItem",
      resizable: false, // disable normal resizing
      masonry: {
        columnWidth: $container.width() / $resize,
      },
    });
    $("a[href='#top']").click(function () {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        "slow"
      );
      return false;
    });
    $(".navbar-inverse").on("click", "li a", function () {
      $(".navbar-inverse .in")
        .addClass("collapse")
        .removeClass("in")
        .css("height", "1px");
    });
    $("#filter a").click(function () {
      $("#filter a").removeClass("current");
      $(this).addClass("current");
      var selector = $(this).attr("data-filter");
      $container.isotope({
        filter: selector,
        animationOptions: {
          duration: 1000,
          easing: "easeOutQuart",
          queue: false,
        },
      });
      return false;
    });
    $(window).smartresize(function () {
      $container.isotope({
        // update columnWidth to a percentage of container width
        masonry: {
          columnWidth: $container.width() / $resize,
        },
      });
    });
  }
});
