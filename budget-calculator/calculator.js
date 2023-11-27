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
 

    if(userName.trim() == '' || userMail.trim() == '' || userPassword.trim() == ''){
        alert("Enter all details properly")
    } else {
        if(userName in localStorage){
            alert("Username already exist change userName")
            registerName.value = ''
            registerMail.value = ''
            registerPassword.value = ''
        } else {

            localStorage.setItem(userName,JSON.stringify(user))
            registerName.value = ''
            registerMail.value = ''
            registerPassword.value = ''
        alert("Account created successfully")
        window.location = 'index.html'
             

   
        }
        
    }
    
}