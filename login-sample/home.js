let username = localStorage.getItem('USERNAME')
const uname = document.getElementById('name');
uname.textContent = username;



function logout() {
    localStorage.clear();
    window.location='./index.html'
}