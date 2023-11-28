//register

let registerName = document.querySelector('#r-username')
let registerMail = document.querySelector('#r-email')
let registerPassword = document.querySelector('#r-password')


function registerUser() {
    let userName = registerName.value.toLowerCase()
    let userMail = registerMail.value
    let userPassword = registerPassword.value

    const user = {
        userName,
        userMail,
        userPassword
    }
 

    if(userName.trim() == '' || userMail.trim() == '' || userPassword == ''){
        alert("Enter all details properly")
    } else {
        if(userName in localStorage){
            alert("Username already exist change userName")
            registerName.value = ''
            registerMail.value = ''
            registerPassword.value = ''
        } else {

            localStorage.setItem(user.userName,JSON.stringify(user))
            registerName.value = ''
            registerMail.value = ''
            registerPassword.value = ''
        alert("Account created successfully")
        window.location = 'index.html'
             

   
        }
        
    }
    
}

//login



let loginName = document.querySelector('#l-username')
let loginPassword = document.querySelector('#l-password')


function login(){
    let username = loginName.value.toLowerCase();
    let password = loginPassword.value;
    if(username.trim() == '' || password == ''){
        alert("Enter all details properly")
    } else {
            if(username in localStorage){
                let user = JSON.parse(localStorage.getItem(username))
                console.log(user)
                if(password === user.userPassword){
                    alert("login successful")
                    localStorage.setItem('dname',user.userName)
                    window.location="home.html"
                } else {
                    alert("incorrect password")
                    loginPassword.value = '';
                }

            } else {
                alert("Account does not exist")
                loginName.value = ''
                loginPassword.value = ''
                
            }
        

    }
}

//home


let displayName = document.getElementById('name');
displayName.textContent = localStorage.getItem('dname');

function logoutUser() {
    window.location = 'index.html';
    localStorage.removeItem('balance');
    localStorage.removeItem('incomeTable');
    localStorage.removeItem('expenseTable'); 
}

let balance = 0;
let balanceValue = document.getElementById("balance-amount");
balanceValue.textContent = balance;

function addIncome() {
    let description = document.getElementById('income-des').value;
    let incomeAmount = document.getElementById('income-amt').value;

    if (description.trim() == '' || incomeAmount.trim() == '') {
        alert("Enter all the details");
    } else {
        incomeAmount = parseFloat(incomeAmount);
        balance = balance + incomeAmount;
        updateBalance(balance);
        UpdateIncomeTable(description, incomeAmount, balance);
        document.getElementById('income-amt').value = '';
     
    }
}

function reduceExpense() {
    let description = document.getElementById('exp-type').value;
    let expenseAmount = document.getElementById('exp-amt').value;

    if (description.trim() == '' || expenseAmount.trim() == '') {
        alert("Enter all the details");
    } else {
        expenseAmount = parseFloat(expenseAmount);
        balance = balance - expenseAmount; 
        updateBalance(balance);
        UpdateExpenseTable(description, expenseAmount, balance); 
        document.getElementById('exp-amt').value = '';
        
    }
}

 function updateBalance(newBalance) {
    localStorage.setItem('balance', newBalance);
     balanceValue.textContent = newBalance;
    
 }

let incTableBody = document.getElementById('income-table-body');
let decTableBody = document.getElementById('expense-table-body');

function UpdateIncomeTable(des, inc, bal) {
    let tableContent = `<tr>
                                <td>${des}</td>   
                                <td>${inc}</td>
                                <td>${bal}</td>
                        </tr>`;
    incTableBody.innerHTML += tableContent;
    localStorage.setItem('incomeTable', incTableBody.innerHTML);
}

function UpdateExpenseTable(des, inc, bal) {
    let tableContent = `<tr>
                                <td>${des}</td>   
                                <td>${inc}</td>
                                <td>${bal}</td>
                        </tr>`;
    decTableBody.innerHTML += tableContent;
    localStorage.setItem('expenseTable', decTableBody.innerHTML);
}

window.addEventListener('load', () => {
    let storedBalance = localStorage.getItem('balance');
    balance = storedBalance ? parseFloat(storedBalance) : 0; 
    balanceValue.textContent = balance;

    incTableBody.innerHTML = localStorage.getItem('incomeTable') || '';
    decTableBody.innerHTML = localStorage.getItem('expenseTable') || '';
});
