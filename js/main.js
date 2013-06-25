$(function() {
	var w = $('.banner').width();
	var h = $('.banner').height();
	new TimelineMax()
		.from('.banner', 0.2, {opacity: 0 })
		.from('.content-container', 0.5, {opacity: 0 }, 0.5)
		.from('.logo', 0.5, {opacity: 0}, 0.5)
		.from('.p2u', 0.5, {opacity: 0}, 0.5)
		.from('.phone', 0.5, {left: '+=' + w, top: '+=' + w }, 0.5)
		.from('.sticker', 0.5, {left: '+=' + w, top: '+=' + w }, 0.7)
		.to('.p2u', 0.5, {opacity: 0}, 4)
		.from('.vodafone', 0.5, {opacity: 0}, 4.5);

	$('.banner').click(function() {
		window.open('http://www.google.nl', '_blank');
	});
});