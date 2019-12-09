var parallaxVisible = false;
var observer = new IntersectionObserver(function(entries) {
	console.log(entries)
	// isIntersecting is true when element and viewport are overlapping
	// isIntersecting is false when element and viewport don't overlap
	if (entries[0].isIntersecting === true) parallaxVisible = true;
	else parallaxVisible = false;
	console.log(parallaxVisible)
}, { threshold: [0] });

function doParallax(){
	console.log(document.getElementById("Hardware").getBoundingClientRect());
	if (parallaxVisible){

	} else {

	}
}