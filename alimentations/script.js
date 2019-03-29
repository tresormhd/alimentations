$(document).ready(function(e){
	
	$('#acacher1 p').hide();$('#acacher2 p').hide();$('#acacher3 p').hide();
	$('#acacher4 p').hide();$('#acacher5 p').hide();$('#acacher6 p').hide();
	$('#acacher7 p').hide();$('#acacher8 p').hide();$('#acacher9 p').hide();
	$('#acacher10 p').hide();


	

	$('#lien1').click(function(e) {
		$('#acacher1 p').slideToggle();


		$('#acacher2 p').hide();$('#acacher3 p').hide();
		$('#acacher4 p').hide();$('#acacher5 p').hide();$('#acacher6 p').hide();
		$('#acacher7 p').hide();$('#acacher8 p').hide();$('#acacher9 p').hide();
		$('#acacher10 p').hide();$('#lien1').text("moins");
	});

	$('#lien2').click(function(e) {
		$('#acacher2 p').slideToggle();$('#acacher1 p').hide();$('#acacher3 p').hide();
		$('#acacher4 p').hide();$('#acacher5 p').hide();$('#acacher6 p').hide();	
		$('#acacher7 p').hide();$('#acacher8 p').hide();$('#acacher9 p').hide();
		$('#acacher10 p').hide();
		
	});
	$('#lien3').click(function(e) {
		$('#acacher1 p').hide();$('#acacher2 p').hide();$('#acacher3 p').slideToggle();
		$('#acacher4 p').hide();$('#acacher5 p').hide();$('#acacher6 p').hide();
		$('#acacher7 p').hide();$('#acacher8 p').hide();$('#acacher9 p').hide();
		$('#acacher10 p').hide();
		
	});
	$('#lien4').click(function(e) {
		$('#acacher1 p').hide();$('#acacher2 p').hide();$('#acacher3 p').hide();
		$('#acacher4 p').slideToggle();$('#acacher5 p').hide();$('#acacher6 p').hide();
		$('#acacher7 p').hide();$('#acacher8 p').hide();$('#acacher9 p').hide();
		$('#acacher10 p').hide();
		
	});
	$('#lien5').click(function(e) {
		$('#acacher1 p').hide();$('#acacher2 p').hide();$('#acacher3 p').hide();
		$('#acacher4 p').hide();$('#acacher5 p').slideToggle();$('#acacher6 p').hide();
		$('#acacher7 p').hide();$('#acacher8 p').hide();$('#acacher9 p').hide();
		$('#acacher10 p').hide();
		
	});
	$('#lien6').click(function(e) {
		$('#acacher1 p').hide();$('#acacher2 p').hide();$('#acacher3 p').hide();
		$('#acacher4 p').hide();$('#acacher5 p').hide();$('#acacher6 p').slideToggle();
		$('#acacher7 p').hide();$('#acacher8 p').hide();$('#acacher9 p').hide();
		$('#acacher10 p').hide();
		
	});
	$('#lien7').click(function(e) {
		$('#acacher1 p').hide();$('#acacher2 p').hide();$('#acacher3 p').hide();
		$('#acacher4 p').hide();$('#acacher5 p').hide();$('#acacher6 p').hide();
		$('#acacher7 p').slideToggle();$('#acacher8 p').hide();$('#acacher9 p').hide();
		$('#acacher10 p').hide();
		
	});
	$('#lien8').click(function(e) {
		$('#acacher1 p').hide();$('#acacher2 p').hide();$('#acacher3 p').hide();
		$('#acacher4 p').hide();$('#acacher5 p').hide();$('#acacher6 p').hide();
		$('#acacher7 p').hide();$('#acacher8 p').slideToggle();$('#acacher9 p').hide();
		$('#acacher10 p').hide();
		
	});
	$('#lien9').click(function(e) {
		$('#acacher1 p').hide();$('#acacher2 p').hide();$('#acacher3 p').hide();
		$('#acacher4 p').hide();$('#acacher5 p').hide();$('#acacher6 p').hide();
		$('#acacher7 p').hide();$('#acacher8 p').hide();$('#acacher9 p').slideToggle();
		$('#acacher10 p').hide();
		
	});
	$('#lien10').click(function(e) {
		$('#acacher1 p').hide();$('#acacher2 p').hide();$('#acacher3 p').hide();
		$('#acacher4 p').hide();$('#acacher5 p').hide();$('#acacher6 p').hide();
		$('#acacher7 p').hide();$('#acacher8 p').hide();$('#acacher9 p').hide();
		$('#acacher10 p').slideToggle();
		
	});


	$("#lien1").hover(function() {$( this ).fadeOut( 200 );$(this).fadeIn( 500 );	});

	$("#lien2").hover(function() {$( this ).fadeOut( 200 );$(this).fadeIn( 500 );	});

	$("#lien3").hover(function() {$( this ).fadeOut( 200 );$(this).fadeIn( 500 );	});

	$("#lien4").hover(function() {$( this ).fadeOut( 200 );$(this).fadeIn( 500 );	});

	$("#lien5").hover(function() {$( this ).fadeOut( 200 );$(this).fadeIn( 500 );	});

	$("#lien6").hover(function() {$( this ).fadeOut( 200 );$(this).fadeIn( 500 );	});

	$("#lien7").hover(function() {$( this ).fadeOut( 200 );$(this).fadeIn( 500 );	});

	$("#lien8").hover(function() {$( this ).fadeOut( 200 );$(this).fadeIn( 500 );	});

	$("#lien9").hover(function() {$( this ).fadeOut( 200 );$(this).fadeIn( 500 );	});

});
