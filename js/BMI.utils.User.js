;
var BMI = BMI || {};
BMI.utils = BMI.utils || {};

BMI.utils.User = (function (BMI, navigator) {
	var isMobile = function() {
		 return /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
	},
	return {
	    isMobile : isMobile
	};
})(BMI || {},navigator);
