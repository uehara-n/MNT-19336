
$(function() {
	var $win = $(window),
			$main = $('#KeyVisual'),
			$nav = $('#head'),
			navHeight = $nav.outerHeight(),
			navPos = $nav.offset().top,
			fixedClass = 'is-fixed';

	$win.on('load scroll', function() {
		var value = $(this).scrollTop();
		if ( value > navPos ) {
			$nav.addClass(fixedClass);
			$main.css('margin-top', navHeight);
		} else {
			$nav.removeClass(fixedClass);
			$main.css('margin-top', '0');
		}
	});
});
