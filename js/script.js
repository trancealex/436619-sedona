var orderButton = document.querySelector(".order-button");
var bookingFormHide = document.querySelector(".booking-form-hide");
var bookingForm = document.querySelector(".booking-form");
var arrival = document.querySelector("[name=arrival]");
var departure = document.querySelector("[name=departure]");
var adult = document.querySelector("[name=adult]");
var child = document.querySelector("[name=child]");
var search = document.querySelector(".search-button");

bookingFormHide.classList.remove("booking-form");

orderButton.addEventListener("click", function(evt) {
 	evt.preventDefault();
 	bookingFormHide.classList.toggle("booking-form");
 });

bookingForm.addEventListener ("submit", function (evt) {
	if (!arrival.value || !departure.value || !adult.value || !child.value) {
		evt.preventDefault();
		search.classList.remove("form-error");
	  	search.offsetWidth = search.offsetWidth;
	  	search.classList.add("form-error");
	}
});