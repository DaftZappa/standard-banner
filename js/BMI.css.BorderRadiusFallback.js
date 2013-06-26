;
var BMI = BMI || {};
BMI.css = BMI.css || {};

BMI.css.BorderRadiusFallback = (function (BMI, Modernizr) {

	var attributeName = "data-rounded-corner-fallback";

	var fix = function() {			
		if(!Modernizr.borderradius) {
			$('['+attributeName+']').each(function() {
				var path = 'images/'+$(this).attr(attributeName);
				path += Modernizr.svg ? '.svg': '.png';
				this.style.backgroundImage="url('"+path+"')";	
			});
		}
	}
	return {
	    fix : fix
	};
})(BMI || {},  Modernizr);
