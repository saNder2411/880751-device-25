var buttonService1 = document.querySelector(".service-btn-1");
var buttonService2 = document.querySelector(".service-btn-2");
var buttonService3 = document.querySelector(".service-btn-3");

var serviceSlide1 = document.querySelector(".services-slider-item-1");
var serviceSlide2 = document.querySelector(".services-slider-item-2");
var serviceSlide3 = document.querySelector(".services-slider-item-3");

buttonService1.addEventListener("click", function(evt) {
    evt.preventDefault();
    serviceSlide1.classList.add("service-show");
    serviceSlide1.classList.remove("service-show-slider-1");
    serviceSlide2.classList.remove("service-show");
    serviceSlide3.classList.remove("service-show");

    buttonService1.classList.add("service-btn-1");
    buttonService3.classList.remove("service-btn-js-3");
    buttonService2.classList.remove("service-btn-js-2");
});

buttonService2.addEventListener("focus", function(evt) {
    evt.preventDefault();
    serviceSlide2.classList.add("service-show");
    serviceSlide1.classList.remove("service-show");
    serviceSlide1.classList.add("service-show-slider-1");
    serviceSlide3.classList.remove("service-show");

    buttonService2.classList.add("service-btn-js-2");
    buttonService1.classList.remove("service-btn-1");
    buttonService3.classList.remove("service-btn-js-3");
});

buttonService3.addEventListener("focus", function(evt) {
    evt.preventDefault();
    serviceSlide3.classList.add("service-show");
    serviceSlide1.classList.remove("service-show");
    serviceSlide1.classList.add("service-show-slider-1");
    serviceSlide2.classList.remove("service-show");

    buttonService3.classList.add("service-btn-js-3");
    buttonService1.classList.remove("service-btn-1");
    buttonService2.classList.remove("service-btn-js-2");
});
