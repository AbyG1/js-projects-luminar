//register

function createAccount() {
    let userName = document.getElementById('registeruser').value 
    let accountNumber = document.getElementById('raccountno').value
    let password = document.getElementById('rpassword').value
    if(userName.trim() == '' || accountNumber.trim() == '' || password.trim() == ''){
        alert('Enter all fields properly')
    } else {
        const user = {
            name: userName,
            ano : accountNumber,
            pswd : password,
        }
        localStorage.setItem(user.ano,JSON.stringify(user))
        alert("Account created successfully. Please login")
        document.getElementById('registeruser').value = '';
        document.getElementById('raccountno').value = '';
        document.getElementById('rpassword').value = '';
        window.location = './login.html'
    }
}

//login 

    let accountNumber = document.getElementById('laccountno')
    let password = document.getElementById('lpassword')

function login() {
    
    let accountNumberValue = accountNumber.value
    let passwordValue = password.value
    if(accountNumberValue.trim() == '' || passwordValue.trim() == ''){
        alert('Fill the fields properly')
    } else {
        if(accountNumberValue in localStorage){
            let user = JSON.parse(localStorage.getItem(accountNumberValue))
            if(passwordValue === user.pswd){
                localStorage.setItem('currentUser', JSON.stringify(user.name));
                window.location = './home.html'
            } else {
                alert("Incorrect password")
                document.getElementById('lpassword').value = ''
            }
        } else{
            alert('This account doesnot exist')
        }
    }
}

//home

let accountHolder = document.getElementById('u-name')
let currentUser = JSON.parse(localStorage.getItem('currentUser'));
accountHolder.textContent = currentUser