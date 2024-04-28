var coverHeight = $('#carousel-owl-fi').height();
$(window).scroll(function () {
    if ($(window).scrollTop() > coverHeight)
        $('#backtotop').addClass('visible');
    else
        $('#backtotop').removeClass('visible');

})


if ($(window).scrollTop() > coverHeight)
    $('#backtotop').addClass('visible');
else
    $('#backtotop').removeClass('visible');