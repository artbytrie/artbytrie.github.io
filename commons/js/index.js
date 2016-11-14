(function main() {
	var active = $('ul.nav li.active');

	$('#ART').add('#credits').show(900);

	$('ul.nav').on('click', 'li', function() {
		$(active.removeClass('active')
		        .find('a')
		        .attr('href')).hide(300);
		$((active = $(this)).addClass('active')
		                    .find('a')
		                    .attr('href')).show(600);
	});
})();