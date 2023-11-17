function clearAll(){
    localStorage.clear()
}

const carBrand = document.getElementById('brand')
const carPrice = document.getElementById('price')
const carKey = document.getElementById('key')


function storeRecord() {
    if (carBrand.value.trim() === '' || carPrice.value.trim() === '' || carKey.value.trim() === '') {
        alert('Fill in all details');
        return;
    } else {

    if(carKey.value in localStorage){
        alert('Key already exist in records')
    } else {
        const car = {
            'key' : carKey.value,
            'brand': carBrand.value,
            'price': carPrice.value
        }
        localStorage.setItem(car.key,JSON.stringify(car))
        f1.reset()

    }
            
}
}

const div = document.getElementById('show')
const newDiv = document.createElement('div')


function retrieveRecord() {
    const key = document.getElementById('rkey').value
    if(key in localStorage){

    
    const car = JSON.parse(localStorage.getItem(key))
  
   
    newDiv.innerHTML = `
    <button onclick='closeDetails()' class='btn'><i class="bi bi-x-circle"></i></button>
    <h4 class='text-center text-primary'>Car Details</h4>
    <p class='text-primary p-1'>Brand: ${car.brand}</p>
    <p class='text-primary p-1'>Price: ${car.price}</p>
    `
    div.appendChild(newDiv)
 } else {
    alert("Key doesnot exist in Records")
 }
}

function closeDetails() {
    div.removeChild(newDiv)
}

function deleteRecords(){
    const key = document.getElementById('rkey').value 
    if(key in localStorage) {
        localStorage.removeItem(key)
        alert('Item removed successfully')
    } else {
        alert('Item doesnot exist')
    }
    
}