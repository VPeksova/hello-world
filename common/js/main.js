Liferay.Portlet.ready(

	/*
	This function gets loaded after each and every portlet on the page.

	portletId: the current portlet's id
	node: the Alloy Node object of the current portlet
	*/
	function(portletId, jQueryObj) {
	}

);

jq(document).ready(function(){
	/*
	This function gets loaded when all the HTML, not including the portlets, is
	loaded.
	*/
    accordion();
	showChildMenu();
	initAutocomplete();
	initFaqVTabulce();
	updateMenu();
	setMap();
});

jq(document).last(
	/*
	This function gets loaded when everything, including the portlets, is on
	the page.
	*/
	function() {
	}
);

/**
 * Click event binding pro FAQ ve Vykazech.
 */
var initFaqVTabulce = function() {
	$("table.faq-v-tabulce p.odpoved-link").click(  function() { 
		$("div.odpoved", $(this).parent().next()).toggle();
	});
}

/**
 * Nastaveni spravnych rozmeru childmenu podle jejich obsahu.
 */
var updateMenu = function() {
	$(".nav-main-child-menu").css('width', 'auto');
	$(".nav-child-menu").css('width', 'auto');
	$(".nav-main-child-menu").css('left', 'auto');
	$(".nav-main-child-menu").css('margin-left', '-15px');
	$("#navigation > ul > li").each(function(index) {

	var eDivSubMenu = $("div.nav-main-child-menu", $(this));
	var sirkaCelehoMenu = $("nav#navigation").outerWidth();
	var pocetSloupcu = $("div.nav-child-menu > ul.child-menu", $(this)).size();
	var sirkaChildMenu;

	if (pocetSloupcu == 3) {
		eDivSubMenu.css('width', sirkaCelehoMenu).css('left', '0');
	} else if (pocetSloupcu == 2) {
		sirkaChildMenu = $("ul.child-menu", $(this)).outerWidth() * pocetSloupcu;
		eDivSubMenu.css('width', sirkaChildMenu);
	} else if (pocetSloupcu == 1) {
		sirkaChildMenu = $("ul.child-menu", $(this)).outerWidth();
		eDivSubMenu.css('width', sirkaChildMenu);
	}

	var levyOkraj = Math.round($(this).position().left);
	var pravyOkraj = levyOkraj + sirkaChildMenu;
	if (pravyOkraj > sirkaCelehoMenu && pocetSloupcu < 3) {
		rozdil = pravyOkraj - sirkaCelehoMenu;
		novaPozice = levyOkraj - rozdil;
		eDivSubMenu.css('left', novaPozice + 'px');
	}
});
}


var accordion = function() {
    /*jq('ul.rozbalovaci-sekce > li > ul').hide();*/
    // prvotni zabaleni pouze v pripade, ze neni pritomna css trida "nezabalene"
    // nekde jsou nektere sekce predrozbalene
    $('ul.rozbalovaci-sekce > li > ul').each(function () {
    	if (!$(this).hasClass("nezabalene")) {
    		$(this).hide();
    	}
    });

    jq('ul.rozbalovaci-sekce > li').click(function(){
        var $ul = jq(this).children('ul');
        if($ul.is(':hidden')) {
            $ul.slideDown(0);
        } else {
            $ul.slideUp(0);
        }
    });

    jq('ul.rozbalovaci-sekce > li > ul').click(function(e){
    	e.stopPropagation();
    });
};

function showChildMenu() {

    jq('#nav-mala-menu').click(function(){
        var menuStat = jq('#navigation').css("display");

        if(menuStat == "none") {
            jq('#navigation').css({display: "block"});
        } else {
            jq('#navigation').removeAttr("style");
        }
    });



    jq('#nav-mala-menu-search').click(function(){
        var menuStat = jq('#search').css("display");

        if(menuStat == "none") {
            jq('#search').css({display: "block"});
        } else {
            jq('#search').removeAttr("style");
        }
    });
}

function split(val) {
	return val.split(" ");
}
function extractLast(term) {
	return split(term).pop();
}
function getLocation(href) {
	var l = document.createElement("a");
	l.href = href;
	return l;
}
function initAutocomplete() {
	var l = getLocation(themeDisplay.getURLHome());

	jq('input[name=_3_keywords]').autocomplete({
		source: function( request, response ) {


		jq.getJSON(sorlAutocompleteUrl + themeDisplay.getLanguageId() + "?q=" + extractLast(request.term) + "&sort=score%20desc&wt=json&json.wrf=?",
        function( data ) {
					var array = data.spellcheck.suggestions[1];
					if (array.numFound != 0) {
						response( jq.map( array.suggestion, function( item ) {
							return {
								label: item,
								value: item
							};
						}));
					}
				}
			);
		},
		focus: function (event, ui) {
			var menu = jq(this).data("uiAutocomplete").menu.element,
		    focused = menu.find("li:has(a.ui-state-focus)");

			jq(focused).parent().children("li").each(function(element) {
				jq(this).removeClass('focused');
			});
			jq(focused).addClass('focused');

			return false;
		},
		select: function (event, ui) {

			var terms = split( this.value );

			console.log("before pop: " + terms);
			// remove the current input
			terms.pop();
			// add the selected item
			console.log("after pop: " + terms);
			console.log("ui.item.value: " + ui.item.value);

			terms.push( ui.item.value );

			console.log("after push: " + terms);

			// add placeholder to get the comma-and-space at the end
			terms.push( "" );

			console.log("concatenated: " + terms);

			this.value = terms.join( " " );

			return false;
		}
	});
}

function mapReset() {
	jq('#obsahMapy').fadeOut('500', function() {
        jq(this).css('backgroundPosition','0 0');
	});
};


var setMap = function() {
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
}