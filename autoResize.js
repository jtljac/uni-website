var previousWidth = window.innerWidth;
var currentItem = -1;
var useMore = false;
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
	["#Overview","Overview"],
	["#Design", "Design"],
	["#Hardware", "Hardware"],
	["#Technology", "Technology"],
	["#Exclusives", "Exclusives"],
	["#Market", "Market Distribution"],
	["#UIUX", "UI/UX"]
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

function resizeElements(){
	var width = window.innerWidth;
	if(previousWidth != width || currentItem == -1){
		var possibleLength = currentItem;
		var alsoMore = useMore
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
		console.log(possibleLength);

		var navbar = document.getElementById("navbar");
		navbar.innerHTML = "";
		var i, newItem;
		for (i = 0; i <= possibleLength; i++){
			newItem = document.createElement("a");
			newItem.setAttribute("href", items[i][0]);
			newItem.innerHTML = items[i][1];
			navbar.appendChild(newItem);
		}
		if (alsoMore){
			var more = createDropDown();
			for (i = possibleLength; i <= 6; i++){
				newItem = document.createElement("a");
				newItem.setAttribute("href", items[i][0]);
				newItem.innerHTML = items[i][1];
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
		console.log(navItems[i].innerHTML + " " + navItems[i].clientWidth);
	}
	previousWidth = width;
}