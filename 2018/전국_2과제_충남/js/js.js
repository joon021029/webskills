$(function(){

  /* header scroll */
  $(window).scroll(function(){
    var windowTop = $(window).scrollTop();
		var headerH = $("header > div").height();
    if(windowTop >= 1){
      $("header").css({"top" : "-" + headerH + "px", "position" : "fixed"});
    }
    if(windowTop == 0) {
      $("header").css({"top" : "0px", "position" : "relative"});
    }
    
  });
  
  /* menu scroll */
  $("nav > ul > li").click(function(e){
    var menu = ["#section1", "#section2", "#section3", "#section4", "#section5"];
    var menuIdx = $(this).index();
    var windowTop = $(window).scrollTop();
    
    if(windowTop == 0){
      $("html, body").stop().animate({
        "scrollTop" : $(menu[menuIdx]).offset().top - 150
      }, 500);
      
    } else {
      $("html, body").stop().animate({
        "scrollTop" : $(menu[menuIdx]).offset().top
      }, 500);
    }
    
  });

});