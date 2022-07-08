const inputText = document.getElementById('inputText');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');
const passwordText = document.getElementById('password');
let password = "";

generateBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let numbers = '0123456789';
    let symbols = '@#$%^&*()-+<>?~';

    let chars = alphabets + numbers + symbols;
    console.log(chars);
    let passwordLength = 12;
    password = "";

    for(let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }

    passwordText.innerHTML = `${password}`;
    inputText.value = passwordText.textContent;
});

copyBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(!inputText.value){return;}
    navigator.clipboard.writeText(password);
});

