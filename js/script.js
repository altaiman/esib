$(function() {

	// Табы
	$('.tabs__item').on('click', function() {
		$('.tabs__item.active').removeClass('active');
		$(this).addClass('active');

		var id = $(this).index();

		$('[data-tab]').hide();
		$('[data-tab="'+id+'"]').show().jScrollPane({
			autoReinitialise:true
		});
	})

	$('.tabs__item').first().trigger('click');


	// Красивые селекты
	$('select').niceSelect();


	// Фокус на полях
	$('.field input').focus(function(e) {
		e.preventDefault();

		$(this).parent().addClass('field_focus');
	});

	$('.field input').focusout(function(e) {
		e.preventDefault();

		if ($(this).val().trim().length !== 0) return;

		$(this).parent().removeClass('field_focus');
	})

	$('.field select').on('change', function() {
		if ($(this).val().trim() !== 0) {
			$(this).parent().addClass('field_focus');
		} else {
			$(this).parent().removeClass('field_focus');
		}

	});

	// Переход по якорям
	$('[data-anchor]').on('click', function(e){
	    e.preventDefault();

	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'data-anchor') ).offset().top
	    }, 1500);
	});

	// Мобильная навигация
	$('.mobile__menu').append($('.nav').clone());

	$('.mobile__btn').on('click', function(e) {
		e.preventDefault();

		$(this).parent().toggleClass('mobile_open');
	})

	// Все докладчики
	$('.speakers__all').on('click', function(e) {
		e.preventDefault();

		$(this).hide();

		$('.speaker:not(:visible)').fadeIn();
	});

	// Карта
	ymaps.ready(init);
    var myMap, 
        myPlacemark;

    function init(){ 
        myMap = new ymaps.Map("map", {
            center: [55.077942, 82.960387],
            zoom: 16,
            controls: ['smallMapDefaultSet']
        }); 

        myMap.behaviors.disable('scrollZoom'); 
    }

    // Модалка
    $('[data-open]').on('click', function(e) {
    	e.preventDefault();

    	var data = $(this).data('open');

    	$('.bg').addClass('bg_show');
    	$('[data-modal="'+data+'"]').addClass('modal_active');
    });

    $('.bg_show, .modal__close').on('click', function(e) {
    	e.preventDefault();

    	$('.bg_show').removeClass('bg_show');
    	$('.modal_active').removeClass('modal_active');


    });

    $('.personally__content').jScrollPane({
			autoReinitialise:true
	});;
});