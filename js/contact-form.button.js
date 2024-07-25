/* random
const contactFormButton = document.querySelector('.contact-form__button');
const buttonLabels = [
    'SEND',
    'SEND ME',
    'CLICK TO SEND',
    'SUBMIT'
];
const getRandomEl = (arr) => arr[Math.floor(Math.random() * arr.length)];
contactFormButton.value = getRandomEl(buttonLabels);
*/
const buttonLabels = [
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
