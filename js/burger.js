$('#header__mobile-burger').click(function() {
    $(this).toggleClass('open');
    $('.header__cat').slideToggle('slow')
    if ($(this).hasClass('open')) {
        $('body, html').css({
            overflow: 'hidden'
        })
    }
    else {
        $('body, html').css({
            overflow: 'visible'
        })
    }
});