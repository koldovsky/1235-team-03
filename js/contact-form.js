let buttonLabels = [
  "CLICK HERE PLEASE",
  "TO SEND US",
  "YOUR QUESTION",
  "WE'LL GET BACK TO YOU",
  "AS SOON AS POSSIBLE",
];
let currentLabelId = 0;
function animatedMessage() {
  const contactFormButton = document.querySelector(".contact-form__button");
  contactFormButton.value = buttonLabels[currentLabelId];
}
function nextButtonLabel() {
  currentLabelId =
    currentLabelId + 1 >= buttonLabels.length ? 0 : currentLabelId + 1;
  animatedMessage();
}
setInterval(nextButtonLabel, 1000);
animatedMessage();

const form = document.getElementById("form");
const userName = document.getElementById("name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const message = document.getElementById("message");
const formStatus = document.getElementById("form-status");

function showError(input, errorMessageText) {
  const formControl = input.parentElement;
  formControl.className = "contact-form__input-field error";
  const errorMessage = formControl.querySelector(
    ".contact-form__error-message"
  );
  errorMessage.innerText = errorMessageText;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "contact-form__input-field success";
}

function checkRequiredCorrect(inputArr) {
  let requiredCorrect = true;
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required:`);
      requiredCorrect = false;
    }
  });
  return requiredCorrect;
}

function checkEmailCorrect(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
    return true;
  } else {
    showError(input, "Email is not valid:");
    return false;
  }
}

function checkLengthCorrect(input, min, max) {
  let lengthCorrect = true;
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters:`
    );
    lengthCorrect = false;
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters:`
    );
    lengthCorrect = false;
  } else {
    showSuccess(input);
  }
  return lengthCorrect;
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

async function handleSubmit(event) {
  event.preventDefault();

  if (checkRequiredCorrect([userName, phone, email])) {
    if (
      checkLengthCorrect(userName, 2, 40) &&
      checkLengthCorrect(phone, 9, 11) &&
      checkEmailCorrect(email) &&
      checkLengthCorrect(message, 0, 2000)
    ) {
      try {
        const response = await fetch(event.target.action, {
          method: form.method,
          body: new FormData(event.target),
          headers: {
            Accept: "application/json",
          },
        });
        if (response.ok) {
          form.reset();
          buttonLabels = ["GOT IT   THANK YOU"];
        } else {
          formStatus.innerHTML =
            "Oops! There was a problem submitting your form";
        }
      } catch {
        formStatus.innerHTML = "Oops! There was a problem submitting your form";
      }
    }
  }
}

form.addEventListener("submit", handleSubmit);
