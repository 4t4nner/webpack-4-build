// partials/burger-menu.js

$(function () {
    "use strict";
    var $document = $(document);

    /**
     * Открыть/закрыть бургер-меню.
     */
    $document.find('.js-burger, .burger-menu__close').click(function () {
        var $menu = $('.burger-menu');
        if ($menu.css('visibility') === 'visible') {
            $menu.css('visibility', 'hidden');
            $menu.css('opacity', '0');

            // if ($(window).width() < 992) {
            //     $menu.css('display', 'none');
            // }
        } else {
            $menu.css('visibility', 'visible');
            $menu.css('opacity', '1');

            // if ($(window).width() < 992) {
            //     $menu.css('display', 'block');
            // }
        }
    });

});