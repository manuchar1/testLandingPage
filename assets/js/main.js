AOS.init();

$('.header__burger').click(function(){
	$(this).toggleClass("active");
	$('.header__menu').toggleClass("active");
	$('body').toggleClass('no-scroll');
})

// fixed header

let header = $('.header'),
    headerH = header.innerHeight(),
    scrollOffset = $(window).scrollTop();

checkScroll(scrollOffset)

$(window).on('scroll',function(){
    scrollOffset = $(window).scrollTop();
    checkScroll(scrollOffset)
});

function checkScroll(scrollOffset){
    if(scrollOffset >= headerH){
        header.addClass('fixed');
    } else {
        header.removeClass('fixed');
    }
}
