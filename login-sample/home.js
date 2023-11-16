let username = localStorage.getItem('USERNAME')
const uname = document.getElementById('name');
uname.textContent = username;



function logout() {
    localStorage.clear();
    window.location='./index.html'
}

let id = document.getElementById('empId')
let ename = document.getElementById('empName')
let address = document.getElementById('empAddress')
let designation = document.getElementById('empDesign')
let experience = document.getElementById('empExper')
let salary = document.getElementById('empSalary')


function storeData() {
   
    if (
        !id.value.trim() ||
        !ename.value.trim() ||
        !address.value.trim() ||
        !designation.value.trim() ||
        !experience.value.trim() ||
        !salary.value.trim()
    ) {
        alert('Enter all the details properly');
        return;
        
    } else {
        localStorage.setItem("EID",id.value)
        localStorage.setItem("ENAME",ename.value)
        localStorage.setItem("EADDRESS",address.value)
        localStorage.setItem("EDESIGNATION",designation.value)
        localStorage.setItem("EEXPERIENCE",experience.value)
        localStorage.setItem("ESALARY",salary.value)

        clearFields()
        alert(`Employee ${localStorage.getItem('EID')} added successfully.`)
    }
 
}

function clearFields() {
    id.value = '';
    ename.value = '';
    address.value = '';
    designation.value = '';
    experience.value = '';
    salary.value = '';
}