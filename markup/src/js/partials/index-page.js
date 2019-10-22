// partials/burger-menu.js

$(function () {
    "use strict";
    var $document = $(document);

    $document.on('click','#index-page .features__list .link',function(){
        const $this = $(this)
        if($this.hasClass('clicked')){
            $(this).removeClass('clicked')
            $($(this).data('target')).collapse('hide')
        } else {
            const thisTarget = $this.data('target')
            $this.closest('.features__list').find('.link').each(function (i,el) {
                const $el = $(el)
                const elTarget = $el.data('target')
                if(elTarget === thisTarget){
                    return
                }

                $(el).removeClass('clicked')
                $(elTarget).collapse('hide')
            })
            $(this).addClass('clicked')
        }
    })

});
