var previousWidth = window.innerWidth;
var currentItem = -1;
var useMore = false;
var wasMobile = false;
const sizes = {
	"Overview":120,
	"Design":205,
	"Hardware":310,
	"Technology":429,
	"Exclusives":541,
	"Market Distribution":715,
	"UI/UX":792
};
const items = [
	["#Overview","../index.html" ,"Overview"],
	["#Design", "../199019088/Design.html", "Design"],
	["#Hardware", "../199026286/Hardware.html","Hardware"],
	["#Technology", "..//Technology.html", "Technology"],
	["#Exclusives", "..//Eclusives.HTML", "Exclusives"],
	["#Market","..//Market.html", "Market Distribution"],
	["#UIUX", "..//UIUX.html", "UI/UX"]
]
  
  
const moreSize = 71;

function createDropDown(){
	var moreBox = document.createElement("div");
	moreBox.setAttribute("id", "More");
	moreBox.setAttribute("class", "dropdown");

	var content = document.createElement("div");
	content.setAttribute("class", "DropDownItem");

	var innerText = document.createElement("a");
	innerText.innerHTML = "More";
	
	moreBox.appendChild(innerText);
	moreBox.appendChild(content);

	var navbar = document.getElementById("navbar");
	navbar.appendChild(moreBox);
	return content;
}

function resizeElements(link){
	var width = window.innerWidth;
	if(previousWidth != width || currentItem == -1){
		var possibleLength;
		if (wasMobile){
			possibleLength = 0
			wasMobile = false;
		} else {
			possibleLength = currentItem;
		}
		var alsoMore = useMore
		if (width > 480 ){
			if(width > previousWidth || possibleLength == -1){
				var foundSize = false;
				while (!foundSize){
					if (possibleLength == 6){
						alsoMore = false;
						foundSize = true;
					} else if (sizes[Object.keys(sizes)[possibleLength + 1]] <= width){
						possibleLength++
					} else if (sizes[Object.keys(sizes)[possibleLength]] + moreSize <= width && possibleLength != 5){
						foundSize = true;
						alsoMore = true;
					} else if (possibleLength == 0){
						alsoMore = true;
						foundSize = true;
					} else {
						possibleLength--;
						foundSize = true;
						alsoMore = true;
					}
				}
			} else if (width < previousWidth){
				var foundSize = false;
				while (!foundSize){
					if (possibleLength == 0){
						alsoMore = true;
						foundSize = true;
					} else if (sizes[Object.keys(sizes)[possibleLength]] > width){
						possibleLength--;
					} else if (sizes[Object.keys(sizes)[possibleLength]] + moreSize <= width && possibleLength != 6 && possibleLength != 5){
						alsoMore = true;
						foundSize = true;
					} else if (possibleLength == 5){
						possibleLength = 4
						alsoMore = true;
						foundSize = true;
					} else if (possibleLength == 6){
						alsoMore = false;
						foundSize = true;
					} else {
						possibleLength--;
						alsoMore = true;
						foundSize = true;
					}
				}
			}
		} else {
			possibleLength = 6;
			alsoMore = false;
			wasMobile = true;
		}	

		var navbar = document.getElementById("navbar");
		navbar.innerHTML = "";
		var i, index, newItem;
		if (link){
			index = 0
		} else {
			index = 1
		}
		for (i = 0; i <= possibleLength; i++){
			newItem = document.createElement("a");
			newItem.setAttribute("href", items[i][index]);
			newItem.innerHTML = items[i][2];
			navbar.appendChild(newItem);
		}
		if (alsoMore){
			var more = createDropDown();
			for (i = possibleLength + 1; i <= 6; i++){
				newItem = document.createElement("a");
				newItem.setAttribute("href", items[i][index]);
				newItem.innerHTML = items[i][2];
				more.appendChild(newItem);
			}
		}
		currentItem = possibleLength;
		useMore = alsoMore;
	}
	var parent = document.getElementById('navbar'),
		navItems = parent.getElementsByTagName('*');
		var i, e;
		for (i = 0; i < navItems.length; ++i) {
	}
	previousWidth = width;
}