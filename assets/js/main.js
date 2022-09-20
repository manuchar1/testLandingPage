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
$('.header__nav-link, .header__logo, .header__menu-nav-link').click(function(event){
    event.preventDefault();

    $('.header__menu').removeClass('active');
    $('.header__burger').removeClass('active');
    $('body').removeClass('no-scroll');

    let $this = $(this),
        blockId = $this.data('scroll');
        blockOffset = $(blockId).offset().top - headerH;
    $('html, body').animate({
        scrollTop: blockOffset
    },1000)
})