var button = document.querySelector(".popup-search-button");
var popup = document.querySelector(".search-form-mini");
var arrival = document.querySelector("[name=arrival]");
var form = popup.querySelector("form");
var departure = popup.querySelector("[name=departure]");
var grown = popup.querySelector("[name=number-grown]");
var children = popup.querySelector("[name=number-children]");


popup.classList.add("form-none");

button.addEventListener("click", function(evt){
	evt.preventDefault();
	popup.classList.toggle("form-call");
	arrival.focus();
});

form.addEventListener("submit", function(evt){
	if (!arrival.value || !departure.value || !grown.value || !children.value) {
		evt.preventDefault();
		popup.classList.remove("form-error"); 
		popup.offsetWidth = popup.offsetWidth; 
		popup.classList.add("form-error");
	} else {
		localStorage.setItem("grown", grown.value);
		localStorage.setItem("children", children.value);
	}
});