let username = localStorage.getItem('USERNAME')
const uname = document.getElementById('name');
uname.textContent = username;


//ivide teacher h1 tag id koduth
// id veche target cheythu, innerhtml vechu matti
//
//
//
//

function logout() {
    localStorage.clear();
    window.location='./index.html'
}