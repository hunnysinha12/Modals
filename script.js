"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnShowModal = document.querySelectorAll(".show-modal");

// this code is for open the modal

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// this code is for close the modal

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// this code is for ittrate the btn

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener("click", openModal);
}

// this is the click event of the buttons

btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

// how keypress event works

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
