// jQuery
$(function() {
   $(".menu-trigger").on("click", function() {
       $("body").toggleClass("active");
   });
   $(".l-header_navigation_link").on("click", function() {
       $("body").removeClass("active");
   });

 $(".js-scroll-top").on("click", function() {
     $("body, html").animate({ scrollTop: 0 }, 500);
 });
});

var scroll = new SmoothScroll('a[href*="#"]', {
   speed: 400
});
