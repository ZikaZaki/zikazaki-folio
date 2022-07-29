const validRegex =
  /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;
const email = document.forms.contactForm.userEmail;
const emailErrMsg = document.getElementById("emailErrMsg");
const contactSubmitBtn = document.forms.contactForm.submitBtn;
contactSubmitBtn.addEventListener("click", (event) => {
  if (!email.value.match(validRegex)) {
    event.preventDefault();
    emailErrMsg.textContent = "Please enter email-address in lowercase!.";
  }
});
