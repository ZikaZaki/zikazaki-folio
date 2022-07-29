const validRegex = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;
const email = document.forms.contactForm.userEmail;
const emailErrMsg = document.getElementById('emailErrMsg');
const contactSubmitBtn = document.forms.contactForm.submitBtn;
contactSubmitBtn.addEventListener('click', (event) => {
  if (!email.value.match(validRegex)) {
    event.preventDefault();
    emailErrMsg.textContent = 'Please enter email-address in lowercase!.';
  }
});

// const form = document.getElementById('contactForm');
// const errMsg = document.getElementById('errorMsg');
// const email = document.getElementById('email').value;

// form.addEventListener('click', (event) => {
//    if (!email === email.toLowerCase()) {
//       event.preventDefault();
//       errMsg.textContent = 'Please enter email-address in lowercase!.';
//    }
// });

// document.getElementById('contactSubmitBtn').addEventListener('click', (event) => {
//    const email = document.getElementById('email').value;
//    const errorMsg = document.getElementById('errorMsg');

//    if (!email === email.toLowerCase()) {
//       event.preventDefault();
//       errorMsg.textContent = 'Please enter email-address in lowercase.';
//    }
// });