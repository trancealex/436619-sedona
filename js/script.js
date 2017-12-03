var orderButton = document.querySelector(".order-button");
var bookingFormHide = document.querySelector(".booking-form-hide");

orderButton.addEventListener("click", function(evt) {
	evt.preventDefault();
	bookingFormHide.classList.toggle("booking-form");
}); 
