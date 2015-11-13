$(document).ready(function() {
    var main_nav = $(".main-nav");
    var logo = $(".logo");
    var logo2 = $(".logo2");
    var alertC = $(".alert");
    var logopic = $(".logo-pic");
    
    $(window).scroll(function(){
        if($(this).scrollTop() > 185)
        {
            main_nav.addClass("main-nav-scrolled");
            logo.addClass("logo-hidden");
            alertC.addClass("alert-scrolled");
            logopic.addClass("logo-hidden");
        }
        else
        {
            main_nav.removeClass("main-nav-scrolled");
            logo.removeClass("logo-hidden");
            alertC.removeClass("alert-scrolled");            
            logopic.removeClass("logo-hidden");
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