$(document).ready(function () {
	
	$('.lien').click(function () {

		var text = $(this).children('.card-text');

		if (text.is(':hidden')) {
			text.slideDown('200');
			$(this).next('p').html('moins');		
		} else {
			text.slideUp('200');
			$(this).next('p').html('lire plus');		
		}
		
	});

});