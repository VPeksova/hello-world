var hpLoop = setTimeout('promoLoop()', 7000);

function promoLoop() {
	if (jq('#promobox li.active').attr('id') == jq('#promobox li:last-child').attr('id')) {
		jq('#promobox li:first-child').trigger('click');
    	clearTimeout(hpLoop);
    	hpLoop = setTimeout('promoLoop()', 5000);
	}
	else {
        jq('#promobox li.active').next().trigger('click');
    	clearTimeout(hpLoop);
    	hpLoop = setTimeout('promoLoop()', 5000);
	}
}

function mapReset() {
	jq('#obsahMapy').fadeOut('400', function() {
        jq(this).css('backgroundPosition','0 0');
	});
};

jq(document).ready(function($) {

	var myWidth = 1100;

	function measure() {
		myWidth = 1000;
    	if( typeof( window.innerWidth ) == 'number' ) {
	    	//Non-IE
    		myWidth = window.innerWidth;
    	} else if( document.documentElement && document.documentElement.clientWidth ) {
	    	//IE 6+ in 'standards compliant mode'
    		myWidth = document.documentElement.clientWidth;
    	} else if( document.body && document.body.clientWidth ) {
	    	//IE 4 compatible
    		myWidth = document.body.clientWidth;
    	}
    };

    measure();

	function shrink() {
		if ($('#logo').css('left') == '-51px') {
			$('#logo').animate({
				left: '-2px'
			}, 250);
		}
	};
	function expand() {
		if ($('#logo').css('left') == '-2px') {
			$('#logo').animate({
				left: '-51px'
			}, 250);
		}
	};

	if (myWidth < 1072) {shrink();}
	if (myWidth >= 1072) {expand();}

	$(window).resize(function() {
		measure();
		if (myWidth < 1072) {
			shrink();
		}
		else {
			expand();
		}
	});

	/* tables */
	$('table.table tr th:first-child').addClass('first');
	$('table.table tr td:last-child').addClass('last');
	$('table.table tr:last-child td').addClass('bottom');

	// submenu

	// generate submenu shadows
	$('ul#menu li div.in').append('<div class="clear"></div><div class="l"></div><div class="r"></div><div class="tl"></div><div class="tr"></div><div class="bl"></div><div class="br"></div><div class="b"></div>');

	var mainMenuShowTimeout = "";
	var mainMenuHideTimeout = "";
	var menuElement = "";

	$('ul#menu li.menu-item').hover(
		function() {
			menuElement = $(this);
			$.data(menuElement,'hover', true);
			function showMenu() {
				if ($.data(menuElement,'hover')) {
					$('ul#menu li a').removeClass('hover');
				menuElement.children('a').addClass('hover');
				$('ul#menu li div.active').removeClass('active').stop('true','true').fadeOut(150);
				menuElement.children('div.submenu').addClass('active').fadeIn(150);
				var elm = $(this).find('div.in');
				var submenuHeight = elm.innerHeight();
				var submenuWidth = elm.innerWidth();
				elm.css({
					'height': submenuHeight,
					'width': submenuWidth
				});
				elm.find('.l, .r').css('height', submenuHeight);
				}
			};
			if (mainMenuHideTimeout) { clearTimeout(mainMenuHideTimeout); }
			if (!$(this).children('a').hasClass('hover')) {
				if ($('ul#menu').find('li div.active').length == 0) {
					mainMenuShowTimeout = setTimeout(showMenu, 250);
				}
				else { mainMenuShowTimeout = setTimeout(showMenu, 25); }
			};
		},
		function() {
			$.data(menuElement,'hover', false);
			function hideMenu() {
				$('ul#menu li div.active').fadeOut(150).removeClass('active');
				$('ul#menu li a').removeClass('hover');
			};
			mainMenuHideTimeout = setTimeout(hideMenu, 300);
		}
	);

	// promo

	// generate promo switch
	$('#promobox .in').append('<ul></ul>');
	$.each($('#promobox .item'), function() {
		var itemId = $(this).attr('id');
		var itemNr = itemId.replace(/item/g, '');
		$('#promobox .in ul').append('<li id="itemLink' + itemNr +'">' + itemNr + '</li>');
	});

	$('#promobox #itemLink1').addClass('active');

	$('#promobox li').click(function(){
		var itemId = $(this).attr('id');
		var itemNr = itemId.replace(/itemLink/g, '');
		if ($('#promobox #item' + itemNr).css('display') != 'block') {
			$('#promobox .item').fadeOut(500);
			$('#promobox #item' + itemNr).fadeIn(500);
			$('#promobox li').removeClass('active');
			$(this).addClass('active');
			clearTimeout(hpLoop);
            hpLoop = setTimeout('promoLoop()', 7000);
		}
	});

	$('#promobox h2').hover(
		function(){ $(this).addClass('hover'); },
		function(){ $(this).removeClass('hover'); }
	);

	// cufon
	Cufon.replace('h1, #random h2, #random p', { fontWeight: '400', fontFamily: 'Futura' });
	Cufon.replace('ul#menu li.menu-item a span', { fontWeight: '400', textShadow: '0 1px 0 #000000', fontFamily: 'Futura' });

	// CZSO bordel cufon
	Cufon.replace('.typ-2 #publikace h3', { fontWeight: '400', fontFamily: 'Futura' });

	// clickmap
	var mapTimeout = "";
	$('#mapa1').hover(
		function() { clearTimeout(mapTimeout); $('#obsahMapy').css('backgroundPosition','0 -720px').fadeIn('400'); },
		function() { mapTimeout = setTimeout('mapReset()',400); }
	);
	$('#mapa2').hover(
		function() { clearTimeout(mapTimeout); $('#obsahMapy').css('backgroundPosition','0 -540px').fadeIn('400'); },
		function() { mapTimeout = setTimeout('mapReset()',400);	}
	);
	$('#mapa3').hover(
		function() { clearTimeout(mapTimeout); $('#obsahMapy').css('backgroundPosition','0 -2520px').fadeIn('400'); },
		function() { mapTimeout = setTimeout('mapReset()',400);	}
	);
	$('#mapa4').hover(
		function() { clearTimeout(mapTimeout); $('#obsahMapy').css('backgroundPosition','0 -2340px').fadeIn('400'); },
		function() { mapTimeout = setTimeout('mapReset()',400);	}
	);
	$('#mapa5').hover(
		function() { clearTimeout(mapTimeout); $('#obsahMapy').css('backgroundPosition','0 -2160px').fadeIn('400'); },
		function() { mapTimeout = setTimeout('mapReset()',400);	}
	);
	$('#mapa6').hover(
		function() { clearTimeout(mapTimeout); $('#obsahMapy').css('backgroundPosition','0 -1980px').fadeIn('400'); },
		function() { mapTimeout = setTimeout('mapReset()',400);	}
	);
	$('#mapa7').hover(
		function() { clearTimeout(mapTimeout); $('#obsahMapy').css('backgroundPosition','0 -1800px').fadeIn('400'); },
		function() { mapTimeout = setTimeout('mapReset()',400);	}
	);
	$('#mapa8').hover(
		function() { clearTimeout(mapTimeout); $('#obsahMapy').css('backgroundPosition','0 -1620px').fadeIn('400'); },
		function() { mapTimeout = setTimeout('mapReset()',400);	}
	);
	$('#mapa9').hover(
		function() { clearTimeout(mapTimeout); $('#obsahMapy').css('backgroundPosition','0 -1440px').fadeIn('400'); },
		function() { mapTimeout = setTimeout('mapReset()',400);	}
	);
	$('#mapa10').hover(
		function() { clearTimeout(mapTimeout); $('#obsahMapy').css('backgroundPosition','0 -1260px').fadeIn('400'); },
		function() { mapTimeout = setTimeout('mapReset()',400);	}
	);
	$('#mapa11').hover(
		function() { clearTimeout(mapTimeout); $('#obsahMapy').css('backgroundPosition','0 -1080px').fadeIn('400'); },
		function() { mapTimeout = setTimeout('mapReset()',400);	}
	);
	$('#mapa12').hover(
		function() { clearTimeout(mapTimeout); $('#obsahMapy').css('backgroundPosition','0 -900px').fadeIn('400'); },
		function() { mapTimeout = setTimeout('mapReset()',400);	}
	);
	$('#mapa13').hover(
		function() { clearTimeout(mapTimeout); $('#obsahMapy').css('backgroundPosition','0 -180px').fadeIn('400'); },
		function() { mapTimeout = setTimeout('mapReset()',400);	}
	);
	$('#mapa14').hover(
		function() { clearTimeout(mapTimeout); $('#obsahMapy').css('backgroundPosition','0 -360px').fadeIn('400'); },
		function() { mapTimeout = setTimeout('mapReset()',400);	}
	);

});