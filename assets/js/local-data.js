/*================Declaration of The Input Fields to be Stored in JSON================ */
const userName = document.getElementById('name');
const userEmail = document.getElementById('email');
const userMsg =document.getElementById('msg');

/*=============This Function Stores The Form Data into JSON==================== */
function storeData(){
    jsonData = {
        name: userName.value,
        email: userEmail.value,
        message: userMsg.value,
    };
    localStorage.setItem('contactForm', JSON.stringify(jsonData));
}

/*=============This Function Parse Data Stored in JSON to Form==================== */
document.addEventListener('DOMContentLoaded', () => {
    const storedData = JSON.parse(localStorage.getItem('contactForm'));
    if (storedData) {
        userName.value = storedData.name; // JSON.parse(storedData).name;
        userEmail.value = storedData.email;  // JSON.parse(storedData).email;
        userMsg.value = storedData.message; // JSON.parse(storedData).message;
    }
});

/*==============Call The Store Function for Every Input Field================== */
userName.onchange = storeData;
userEmail.onchange = storeData;
userMsg.onchange = storeData;
