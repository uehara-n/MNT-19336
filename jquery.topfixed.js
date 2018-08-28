(function($){
	var $win = $(windows),
	var $main = $('#KeyVisual'),
	var $nav = $('#head'),
	var navHeight = $nav.outerHeight(),
	var navPos = $nav.offset().top,
	var fixedClass = 'is_fixed';

	$win.on('load scroll', function(){
		var value = $(this).scrollTop();
		if ( value > navPos ){
			$nav.addClass(fixedClass);
			$main.css('margin-top',navHeight);
		}else{
			$nav.removeClass(fixedClass);
			$main.cdd('margin-top','0');
		}
	});
})(jQuery);
