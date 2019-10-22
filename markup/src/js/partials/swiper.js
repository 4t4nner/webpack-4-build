$(function () {
	"use strict";
	var $document = $(document);

	console.log(1)

	/**
	 * .swiper > .swiper-container > ...
	 *
	 */

	var mySwipers = $('.swiper-container').each(function(i,sContainer){
		const $sContainer = $(sContainer)
		const $outContainer = $sContainer.closest('.swiper')
		const $buttons = {
			prev: $outContainer.find('.swiper-button-prev'),
			next: $outContainer.find('.swiper-button-next'),
		}

		const params = Object.assign({
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			navigation: {
				nextEl: $buttons.next.length ? $buttons.next : false,
				prevEl: $buttons.prev.length ? $buttons.prev : false,
			},
		},
			$sContainer.data()
		)

		return new Swiper('.swiper-container', params)
	})

});
