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

function login() {
    let accountNumber = document.getElementById('laccountno').value
    let password = document.getElementById('lpassword').value

    if(accountNumber.trim() == '' || password.trim() == ''){
        alert('Fill the fields properly')
    } else {
        if(accountNumber in localStorage){
            let user = JSON.parse(localStorage.getItem(accountNumber))
            if(password === user.pswd){
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

