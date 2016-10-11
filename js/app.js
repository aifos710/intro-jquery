window.addEventListener("load", cargarPagina);

//Create an array of every link on the page using document.querySelectorAll(cssSelector)
var links = document.querySelectorAll("a");

function cargarPagina(){

//Iterate through the array. In each iteration of the loop:
	for (var i = 0; i < links.length; i++) {
//Find the current href using element.getAttribute(name), and store into a variable
		var hRef =  links[i].getAttribute("href");
//Generate a thumbnail URL using youtube.generateThumbnailUrl(videoUrl)
		var videoTumb =  youtube.generateThumbnailUrl(hRef);
//Create an IMG element using document.createElement(tagName)
		var imag = document.createElement("img");
//Set the "src" of the IMG element using element.setAttribute(name, value)
		imag.setAttribute("src", videoTumb);
//Append the IMG to the link using element.appendChild(element)
		links[i].appendChild(imag);
	}
}
