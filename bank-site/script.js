//register

function createAccount() {
    let userName = document.getElementById('registeruser').value 
    let accountNumber = document.getElementById('raccountno').value
    let password = document.getElementById('rpassword').value
    if(userName.trim() == '' || accountNumber.trim() == '' || password.trim() == ''){
        alert('Enter all fields properly')
    } else {
        if(accountNumber in localStorage) {
            alert('account already exist')
        }
                else {
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
                localStorage.setItem('password',JSON.stringify(user.pswd))
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
const depContainer = document.getElementById('display1')
const witContainer = document.getElementById('display2')


let totalBalance = 0;

function depositAmount() {
    const depositValue = parseFloat(document.getElementById('damount').value);
    const passwordValue = document.getElementById('dPassword').value;
    
    // Get the stored password for the current user
    const storedPassword = JSON.parse(localStorage.getItem('password'));

    if (passwordValue !== storedPassword) {
        alert('Incorrect password');
    } else {
        // Update the total balance
        totalBalance = totalBalance + depositValue;
          // Clear existing content in depContainer
          depContainer.innerHTML = '';
          witContainer.innerHTML = '';
        // Display the updated balance
        const para = document.createElement('p');
        para.textContent = `Balance: ${totalBalance}`;
        depContainer.appendChild(para);
    }
}


function withdrawAmount() {
    const withdrawValue = parseFloat(document.getElementById('wamount').value);
    const passwordValue = document.getElementById('wPassword').value;

    // Get the stored password for the current user
    const storedPassword = JSON.parse(localStorage.getItem('password'));

    if (passwordValue !== storedPassword) {
        alert('Incorrect password');
    } else {
        if (withdrawValue > totalBalance) {
            alert('Insufficient funds');
        } else {
            // Update the total balance
            totalBalance = totalBalance - withdrawValue;

            // Clear existing content in witContainer
            depContainer.innerHTML= '';
            witContainer.innerHTML = '';

            // Display the updated balance
            const para = document.createElement('p');
            para.textContent = `Balance: ${totalBalance}`;
            witContainer.appendChild(para);
        }
    }
}