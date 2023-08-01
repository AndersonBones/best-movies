$(document).ready(function(){
    $(".dropdown").hover(function(){
        let nav_link =  $(this).children()[0];
        let dropdown_menu = $(this).children()[1];
            
        $(nav_link).addClass('show').attr('aria-expanded', true);

        $(dropdown_menu).addClass("show").attr('data-bs-popper', 'static')
    }, function(){
        let nav_link =  $(this).children()[0];
        let dropdown_menu = $(this).children()[1];
            
        $(nav_link).removeClass('show').removeAttr('aria-expanded');

        $(dropdown_menu).removeClass("show").removeAttr('data-bs-popper')
    });

    $(".dropdown").click(function(){
        let nav_link =  $(this).children()[0];
        let dropdown_menu = $(this).children()[1];
            
        $(nav_link).removeClass('show').removeAttr('aria-expanded');

        $(dropdown_menu).removeClass("show").removeAttr('data-bs-popper')
    })
}); 