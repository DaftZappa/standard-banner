$(function() {
	BMI.utils.Banner.init(animate);

	function animate() {

		var w = $('.banner').width();
		var h = $('.banner').height();
		new TimelineMax()
			.to('.banner',0,{display: 'block'})
			.from('.banner', 0.2, {opacity: 0 })
			.from('.content-container', 0.5, {opacity: 0 }, 0.5)
			.from('.logo', 0.5, {opacity: (Modernizr.opacity ? 0 : 1)}, 0.5)
			.from('.p2u', 0.5, {opacity: 0}, 0.5)
			.from('.phone', 0.5, {left: '+=' + w, top: '+=' + w }, 0.5)
			.from('.sticker', 0.5, {left: '+=' + w, top: '+=' + w }, 0.7)			
			.to('.p2u', 0.5, {opacity: 0}, 4)
			.from('.vodafone', 0.5, {opacity: 0}, 4.5)
			.append(function (){ 
				return new Pulse('.button',7);
			},2) ;
	}
});


var Pulse = function(target, repeat) {
	return new TimelineMax({repeat:repeat})
				.to(target, 0.2,{scale:1.1,alpha:1, ease:Circ.easeOut},"+=0")
				.to(target, 0.2,{scale:1,alpha:1, ease:Circ.easeIn},"+=0");
}