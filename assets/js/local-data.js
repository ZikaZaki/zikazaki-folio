const userName = document.getElementById('name');
const userEmail = document.getElementById('email');
const userMsg =document.getElementById('msg');

function storeData(){
    localData = {
        name = userName.value,
        email = userEmail.value,
        message = userMsg.value,
    };
    localStorage.setItem('form', JSON.stringify(localData));
}