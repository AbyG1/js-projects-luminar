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
    let username = loginName.value;
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

let displayName =document.getElementById('name')
displayName.textContent = localStorage.getItem('dname')

function logoutUser() {
    window.location='index.html'
}