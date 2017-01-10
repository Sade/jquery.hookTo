/*!
 * Hook To - jQuery plugin
 * Move an element to another
 * with responsive back-in-place
 * @name jquery.hookto.js
 * @author Guillaume Bouillon (Agence'O)
 */
(function ($) {

    $.fn.hookTo = function (destinationHook, options) {

        var _plugin = this;
        var settings = $.extend({
            'hookOriginPrefix': 'hookto-orig',
            'position': 'after',
            'returnAt': '768'
        }, options);

        _plugin.init = function (el) {
            var $element = $(el);
            var origHash = settings.hookOriginPrefix + '-' + _plugin.getHash();
            var $origHook = $('<meta />').addClass('hookto-orig').attr({'id': origHash});

            $element.data({'hookedTo': origHash});

            $origHook.insertBefore($element);
            _plugin.setPosition(settings.position);

            $(window).resize(function () {
                if ($(window).width() <= settings.returnAt) {
                    _plugin.retrievePosition($element);
                } else {
                    _plugin.setPosition(settings.position);
                }
            }).resize();
        };

        _plugin.setPosition = function (position) {
            switch (position) {
                case 'default':
                case 'after':
                    $(this).insertAfter(destinationHook);
                    break;
                case 'before':
                    $(this).insertBefore(destinationHook);
                    break;
                case 'inside':
                    $(this).appendTo(destinationHook);
                    break;
            }
        };

        _plugin.retrievePosition = function (el) {
            var destination = $('#' + el.data('hookedTo'));
            destination.after(el);
        };

        _plugin.getHash = function () {
            var random = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for (var i = 0; i < 12; i++) {
                random += possible.charAt(Math.floor(Math.random() * possible.length));
            }

            return random;
        };

        return this.each(function () {
            _plugin.init(this);
        });
    };

    $('[data-hook-to]').each(function () {
        var hook = $(this).data('hook-to');
        $(this).hookTo(hook);
    });

})(jQuery);