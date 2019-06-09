var buttonModal = document.querySelector(".feedback-btn");
var linkMap = document.querySelector(".link-map");
var popup = document.querySelector(".modal-feedback");
var popupMap = document.querySelector(".modal-map");
var close = document.querySelector(".modal-close");
var mapClose = document.querySelector(".modal-close-map");

var login = popup.querySelector("[name=user-name]");
var emailUser = popup.querySelector("[type=email]");
var textFeild = popup.querySelector("[name=text-feild]");
var form = popup.querySelector(".feedback-form");

var isStorageSupport = true;
var storage = "";
var storageEmail = "";

try {
    storage = localStorage.getItem("login");
    storageEmail = localStorage.getItem("emailUser");
} catch (err) {
    isStorageSupport = false;
};

buttonModal.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    if (storage || storageEmail) {
        login.value = storage;
        emailUser.value = storageEmail;
        textFeild.focus();
    } else {
        login.focus();
    };
});

linkMap.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupMap.classList.add("modal-show");

});

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
 });

mapClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupMap.classList.remove("modal-show");
});


form.addEventListener("submit", function(evt) {
    if (!login.value || !emailUser.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("login", login.value);
            localStorage.setItem("emailUser", emailUser.value);
        }
    }
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("modal-show") || popupMap.classList.contains("modal-show")) {
            evt.preventDefault();
            popup.classList.remove("modal-show");
            popupMap.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        }
    }
});
