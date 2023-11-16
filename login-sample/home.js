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


function addEmployee() {
   
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



        const employee = {
            id: id.value,
            name: ename.value,
            add : address.value,
            design : designation.value,
            exp: experience.value,
            sal : salary.value
        }
        
        if(employee.id in localStorage) {
            alert("Employee already Exists")
            document.getElementById('myform').reset()//reset the form
        } else {
            localStorage.setItem(employee.id,JSON.stringify(employee))
    

        alert(`Employee ${employee.id} added successfully.`)
        document.getElementById('myform').reset()//reset the form
    }
 
}
}



// function clearFields() {
//     id.value = '';
//     ename.value = '';
//     address.value = '';
//     designation.value = '';
//     experience.value = '';
//     salary.value = '';
// }



// const employeediv = document.createElement('div');


// const parent = document.querySelector('#show')

// const searchId = document.querySelector('#search')


// function showDetails() {

//     if(searchId.value != localStorage.getItem('EID')){
//         alert("Employee doesnot exist")
//         return
//     }

//     employeediv.innerHTML = '<div class="card">' +
//                      '<div class="card-header">Employee</div>' +
//                         '<ul class="list-group list-group-flush">' +
//                             `<li class="list-group-item">ID: ${localStorage.getItem('EID')}</li>` +
//                             `<li class="list-group-item">NAME: ${localStorage.getItem('ENAME')}</li>` +
//                             `<li class="list-group-item">ADDRESS: ${localStorage.getItem('EADDRESS')}</li>` +
//                             `<li class="list-group-item">DESIGNATION: ${localStorage.getItem('EDESIGNATION')}</li>` +
//                             `<li class="list-group-item">EXPERIENCE: ${localStorage.getItem('EEXPERIENCE')}</li>` +
//                             `<li class="list-group-item">SALARY: ${localStorage.getItem('ESALARY')}</li>` +
//                          '</ul>' +
//                 '</div>';

//     parent.appendChild(employeediv)

// }

