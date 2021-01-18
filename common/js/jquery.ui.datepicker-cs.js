/* Czech initialisation for the jQuery UI date picker plugin. */
/* Written by Tomas Muller (tomas@tomas-muller.net). */
(function($) {
        $.ui.datepicker.regional['cs'] = {
                renderer: $.ui.datepicker.defaultRenderer,
                monthNames: ['leden','únor','bøezen','duben','kvìten','èerven',
        'èervenec','srpen','záøí','øíjen','listopad','prosinec'],
                monthNamesShort: ['led','úno','bøe','dub','kvì','èer',
                'èvc','srp','záø','øíj','lis','pro'],
                dayNames: ['nedìle', 'pondìlí', 'úterý', 'støeda', 'ètvrtek', 'pátek', 'sobota'],
                dayNamesShort: ['ne', 'po', 'út', 'st', 'èt', 'pá', 'so'],
                dayNamesMin: ['ne','po','út','st','èt','pá','so'],
                dateFormat: 'dd.mm.yyyy',
                firstDay: 1,
                prevText: '&#x3c;Døíve', prevStatus: '',
                prevJumpText: '&#x3c;&#x3c;', prevJumpStatus: '',
                nextText: 'Pozdìji&#x3e;', nextStatus: '',
                nextJumpText: '&#x3e;&#x3e;', nextJumpStatus: '',
                currentText: 'Nyní', currentStatus: '',
                todayText: 'Nyní', todayStatus: '',
                clearText: '-', clearStatus: '',
                closeText: 'Zavøít', closeStatus: '',
                yearStatus: '', monthStatus: '',
                weekText: 'Týd', weekStatus: '',
                dayStatus: 'DD d MM',
                defaultStatus: '',
                isRTL: false
        };
        $.extend($.ui.datepicker.defaults, $.ui.datepicker.regional['cs']);
})(jQuery);
