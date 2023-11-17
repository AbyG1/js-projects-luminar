function clearAll(){
    localStorage.clear()
}

const carBrand = document.getElementById('brand')
const carPrice = document.getElementById('price')
const carKey = document.getElementById('key')

function storeRecord() {
    const car = {
        'key' : carKey.value,
        'brand': carBrand.value,
        'price': carPrice.value
    }
    localStorage.setItem(car.key,JSON.stringify(car))
}