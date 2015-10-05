    var menu = $('.mobile>.top-menu').hide(),
        item = $('.mobile>.top-menu>li>a:not(:only-child)'),
        subMenu = $('.mobile>.top-menu>li>ul').hide();


    $('.txt__podkat').on('click', function (e) {
        e.preventDefault();

        if ( $(this).hasClass('active') ) return;

        $(this).addClass('active');


    });