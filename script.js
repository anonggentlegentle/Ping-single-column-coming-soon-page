"use strict";

const notifyBtn = document.querySelector(".btn--submit");
const emailInputBox = document.querySelector(".main__input");
const errorMsg = document.querySelector(".main__error");

notifyBtn.addEventListener("click", function () {
  if (!emailInputBox.validity.valid) {
    errorMsg.classList.add("unhide");

    emailInputBox.classList.add("input-error-border");
  } else {
    errorMsg.classList.remove("unhide");

    emailInputBox.classList.remove("input-error-border");
  }
});
