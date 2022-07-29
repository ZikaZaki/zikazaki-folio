document.querySelector('.submit').addEventListener('click', (event)={
   const mail = document.getElementById('email').value;
   const errMsg = docuemnt.querySelector('.error');
   const toLowerCase = (str) => str === str.toLowerCase();

   if (!toLowerCase(email)) {
    event.preventDefault();
    errMsg.textContent = 'Please use only lower-case for email-address';
   }
});