var orderButton = document.querySelector(".order-button");
var bookingForm = document.querySelector(".booking-form");
var arrival = document.querySelector("[name=arrival]");
var departure = document.querySelector("[name=departure]");
var adult = document.querySelector("[name=adult]");

bookingForm.classList.add("booking-form-hide");

orderButton.addEventListener("click", function(evt) {
 	evt.preventDefault();
 	bookingForm.classList.toggle("booking-form-hide");
 });

bookingForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (!arrival.value || !departure.value || !adult.value) {
    bookingForm.classList.remove("booking-form-error");
    setTimeout(function() {
    bookingForm.classList.add("booking-form-error");
    }, 1)
  } else {
    bookingForm.submit();
  }
});