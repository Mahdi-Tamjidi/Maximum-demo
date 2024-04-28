$(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
        $('#Navbar').addClass('fixed-top');
        $('#social').addClass('d-md-block');
        $('#social').addClass('d-lg-none');
        $('#brand').addClass('fix-brand');
        $('#nav-img').addClass('fix-img');
        $('#links').addClass('fix-links');
    }
    else {
        $('#Navbar').removeClass('fixed-top');
        $('#social').removeClass('d-md-block');
        $('#social').removeClass('d-lg-none');
        $('#brand').removeClass('fix-brand');
        $('#nav-img').removeClass('fix-img');
        $('#links').removeClass('fix-links');

    }

})

if ($(window).scrollTop() > 50) {
    $('#Navbar').addClass('fixed-top');
    $('#social').addClass('d-md-block');
    $('#social').addClass('d-lg-none');
    $('#brand').addClass('fix-brand');
    $('#nav-img').addClass('fix-img');
    $('#links').addClass('fix-links');
}
else {
    $('#Navbar').removeClass('fixed-top');
    $('#social').removeClass('d-md-block');
    $('#social').removeClass('d-lg-none');
    $('#brand').removeClass('fix-brand');
    $('#nav-img').removeClass('fix-img');
    $('#links').removeClass('fix-links');

}