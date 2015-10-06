$('.txt__podkat').on('click', function (e) {
    e.preventDefault();

    if ( $(this).hasClass('active') ) {
        $(this).removeClass('active');
        $('body').find('.' + $(this).data('tab')).slideUp();
    } else {
        $(this).addClass('active');
        $('body').find('.' + $(this).data('tab')).slideDown();
    }
});