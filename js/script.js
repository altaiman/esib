
$(function() {

	// Табы
	$('.tabs__item').on('click', function() {
		$('.tabs__item.active').removeClass('active');
		$(this).addClass('active');

		var id = $(this).index();

		$('[data-tab]').hide();
		$('[data-tab="'+id+'"]').show().jScrollPane();
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
});