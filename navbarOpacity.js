window.onscroll = function() {
	var opacity;
	if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
		opacity = 1 - clamp((document.documentElement.scrollTop - 30) / 100, 0, .3);
	  } else {
		opacity = 1
	  }
	  document.getElementById("navbar").style.opacity =  opacity;
};

function clamp(value, min, max){
	if (value > max){
		return max;
	} else if (value < min){
		return min;
	} else {
		return value;
	}
}