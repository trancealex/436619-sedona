var orderButton = document.querySelector(".order-button");
var bookingFormHide = document.querySelector(".booking-form-hide");

bookingFormHide.classList.remove("booking-form");

orderButton.addEventListener("click", function(evt) {
	evt.preventDefault();
	bookingFormHide.classList.toggle("booking-form");
});
