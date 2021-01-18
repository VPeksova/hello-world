/* Czech initialisation for the jQuery UI date picker plugin. */
/* Written by Tomas Muller (tomas@tomas-muller.net). */
(function($) {
        $.ui.datepicker.regional['cs'] = {
                renderer: $.ui.datepicker.defaultRenderer,
                monthNames: ['leden','�nor','b�ezen','duben','kv�ten','�erven',
        '�ervenec','srpen','z���','��jen','listopad','prosinec'],
                monthNamesShort: ['led','�no','b�e','dub','kv�','�er',
                '�vc','srp','z��','��j','lis','pro'],
                dayNames: ['ned�le', 'pond�l�', '�ter�', 'st�eda', '�tvrtek', 'p�tek', 'sobota'],
                dayNamesShort: ['ne', 'po', '�t', 'st', '�t', 'p�', 'so'],
                dayNamesMin: ['ne','po','�t','st','�t','p�','so'],
                dateFormat: 'dd.mm.yyyy',
                firstDay: 1,
                prevText: '&#x3c;D��ve', prevStatus: '',
                prevJumpText: '&#x3c;&#x3c;', prevJumpStatus: '',
                nextText: 'Pozd�ji&#x3e;', nextStatus: '',
                nextJumpText: '&#x3e;&#x3e;', nextJumpStatus: '',
                currentText: 'Nyn�', currentStatus: '',
                todayText: 'Nyn�', todayStatus: '',
                clearText: '-', clearStatus: '',
                closeText: 'Zav��t', closeStatus: '',
                yearStatus: '', monthStatus: '',
                weekText: 'T�d', weekStatus: '',
                dayStatus: 'DD d MM',
                defaultStatus: '',
                isRTL: false
        };
        $.extend($.ui.datepicker.defaults, $.ui.datepicker.regional['cs']);
})(jQuery);
