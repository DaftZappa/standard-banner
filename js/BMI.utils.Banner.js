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

	var init = function(successCallback, addEventsCallback) {
		BMI.css.Fallback.fix();

		if(typeof addEventsCallback === 'undefined') {
			addEventListeners();
		} else {
			addEventsCallback.apply(this,[this]);
		}

		successCallback.apply(this,[this]);
	}
	return {
	    init : init

	};
})(BMI || {},navigator);
