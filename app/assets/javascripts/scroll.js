$(document).ready(function() {
    var main_nav = $(".main-nav");
    var logo = $(".logo");
    var logo2 = $(".logo2");
    
    $(window).scroll(function(){
        if($(this).scrollTop() > 200)
        {
            main_nav.addClass("main-nav-scrolled");
            logo.addClass("logo-hidden");
        }
        else if(main_nav.hasClass("main-nav-scrolled") || logo.hasClass("logo-hidden"))
        {
            main_nav.removeClass("main-nav-scrolled");
            logo.removeClass("logo-hidden");
        }
        
        if($(this).scrollTop() > 110)
        {
            logo2.addClass("logo-hidden");
        }
        else if(logo2.hasClass("logo-hidden"))
        {
            logo2.removeClass("logo-hidden");
        }
    });
});