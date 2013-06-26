;
var BMI = BMI || {};
BMI.utils = BMI.utils || {};

BMI.utils.Banner = (function (BMI, navigator) {
	var bannerContainer = ".banner";
	
	var addEventListeners = function() {

		$('.banner').click(function() {
			window.open('http://www.google.nl', '_blank');
		});
	}

	var init = function(successCallback) {
		BMI.css.Fallback.fix();
		addEventListeners();

		successCallback.apply(this,[this]);
	}
	return {
	    init : init

	};
})(BMI || {},navigator);
