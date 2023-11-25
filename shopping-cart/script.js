fetch('https://dummyjson.com/carts')// bydefault get method -> object data
        .then(response => response.json())
        .then(data => displayContent(data)) // pass the parsed data to the displayContent function
        .catch(error => console.error('Error fetching data:', error))
        


        function displayContent(data){
            for(let cart of data.carts){
                for(let product of cart.products){
                    let htmlData = ` <div class='col-md-3'>
                                            <div class="card h-100 ">
                                                <img src="${product.thumbnail}" class="card-img-top" alt="..." style='height:20rem; object-fit: cover' >
                                                <div class="card-body">
                                                    <h5 class="card-title">${product.title}</h5>

                                                </div>
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item">Price: ${product.price}</li>
                                                    <li class="list-group-item">Quantity: ${product.quantity}</li>
                                                    <li class="list-group-item">Total Price: ${product.total}</li>
                                                    <li class="list-group-item">Discount Percentage: ${product.discountPercentage}</li>
                                                    <li class="list-group-item text-danger">Discount Price: ${product.discountedPrice}</li>
                                                </ul>
                                                <div class="card-body text-center">
                                                    <button class='btn btn-danger'>Buy Now</button>
                                                </div>
                                            </div>

            
            
              `
              result.innerHTML += htmlData
        }
}
}



//         <div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>
//   <ul class="list-group list-group-flush">
//     <li class="list-group-item">An item</li>
//     <li class="list-group-item">A second item</li>
//     <li class="list-group-item">A third item</li>
//   </ul>
//   <div class="card-body">
//     <a href="#" class="card-link">Card link</a>
//     <a href="#" class="card-link">Another link</a>
//   </div>
// </div>