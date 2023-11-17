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


    }
            
}
}