$('.review__link--allpost').one('click', function (e) {
	e.preventDefault();

	$('.review__wrap--hidden').slideDown();
	$(this).hide();
});