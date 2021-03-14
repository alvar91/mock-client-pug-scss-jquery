$(document).ready(function () {
  var menuList = $(".top-menu__list_menu");
  $(menuList).click(function(){
      if(menuList.css("height") != "0px") {
          menuList.removeClass("show-mobile-menu");
      }
  });

  $("#burger-menu").click(function(){
      menuList.addClass("show-mobile-menu");
  });

  $(window).resize(function(){
      menuList.removeClass("show-mobile-menu");
  });
});
