;
var BMI = BMI || {};
BMI.css = BMI.css || {};

BMI.css.Fallback = (function (BMI, Modernizr) {
	var fix = function() {	
		BMI.css.BorderRadiusFallback.fix();
	}
	return {
	    fix : fix
	};
})(BMI || {},  Modernizr);
