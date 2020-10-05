/*global $ , console*/
$(function () {

  "use strict";

    /******* Start Header ***********/
    
    /******* Start slider ***********/
    $(".home-header .slider ol li").on("click", function () {  

      $(this).addClass("active").siblings().removeClass("active");
      var num = $(this).data("class");
      
      $("header .home-header .slider .content li:nth-child("+ num+ ")");
         var item = $("header .home-header .slider .content li:nth-child("+ num+ ")");
         check(item);
    });
    function check(item) {
      
      item.addClass("active").siblings().removeClass("active next prev");
      item.removeClass("next prev").nextAll().addClass("next");
      item.removeClass("next prev").prevAll().addClass("prev");
    }
    check($("header .home-header .slider .content li.active"));
    /******* End slider ***********/

    // On Scroll Event 
    var scrollCount = 0;
    $(window).on("scroll", function () {  
        var winScroll = $(window).scrollTop();
        $("header").css({
          backgroundPositionY :  winScroll / 2
        });
        //Add Fixed class to navbar 
        if (winScroll >= $("header").height()) {
          $("nav").addClass("fixed-top");
        } else {
          $("nav").removeClass("fixed-top");
        }
        
          //Trriger Function that change image position
         sectionChangeImgPos(".parallax1");
         sectionChangeImgPos(".parallax2");
         sectionChangeImgPos(".parallax3");
         sectionChangeImgPos(".parallax4");
         goTopOpacity();

         if (winScroll >= $(".about .how-agency").offset().top - 500) {

          if (scrollCount === 0) {
            counter(".about .how-agency .content .box-one .num" , 680);
            counter(".about .how-agency .content .box-two .num" , 85);
            counter(".about .how-agency .content .box-three .num" , 120);
            counter(".about .how-agency .content .box-four .num" , 22);
            scrollCount = 1;
          }
         }


    });
    /******* End Header ***********/

    /******* Start Navbar ***********/
    $(".navbar .navbar-collapse .navbar-nav .nav-item").on("click", function () {  
      $(this).addClass("active").siblings().removeClass("active");
      var dataNav = $(this).data("nav");
      $("html,body").animate({
        scrollTop : $(dataNav).offset().top - $("nav").height()
      });
    });
    /******* End Navbar ***********/

    // Change Section Image When I Scrolling Using Class Name
    function sectionChangeImgPos($className) {
      
      if ($(window).scrollTop() >= ($($className).offset().top - 800 )) {

        if ($(window).width() >= 991 )
        {
          $($className).css({
            backgroundPositionY:   ( ( $(window).scrollTop()) - $($className).offset().top  - $($className).height() + 100) / 3 
          });
        } else {
          $($className).css({
            backgroundPositionY:   ( ( $(window).scrollTop()) - $($className).offset().top  - $($className).height() + 600) / 3 
          });
        }

      }
    }
    // Go Top Function
    function goTopOpacity() {  
      if ($(window).scrollTop() >= $("header").height()) {
        $(".go-top").css({
          opacity : 1
        });
      } else {
        $(".go-top").css({
          opacity : 0
        });
      }
    }
    goTopOpacity();
    
    //Trigger MixItUp
    var mixer = mixitup('.mixit-port');
    
    $(".go-top").on("click", function () {  
      $("html, body").animate({
        scrollTop : 0
      }, 1000);
    });
    // About Us Counter
    

  function counter(selector , num) {  
      
      var i = 0;
      if (num <= 200){
        var setInter = setInterval(function () {  
          
          i += 1;
          if (i <= num) {
              $(selector).text(i);
          } else {
              clearInterval(setInter);
          }
         }, 10);
      } else {
        var setInter = setInterval(function () {  
          
          i += 4;
          if (i <= num) {
              $(selector).text(i);
          } else {
              clearInterval(setInter);
          }
         }, 10);
      }

   }
});

