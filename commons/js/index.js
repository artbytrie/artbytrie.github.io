(function main() {
	var active = $('ul.nav li.active');

	$('#ART').add('#credits').fadeIn(900);

	$('ul.nav').on('click', 'li', function() {
		$(active.removeClass('active')
		        .find('a')
		        .attr('href')).css("display","none");
		$((active = $(this)).addClass('active')
		                    .find('a')
		                    .attr('href')).fadeIn(900);
	});
})();