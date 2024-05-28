// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

var numberItems = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    
    products.forEach(product => {
        
            if (id === product.id) {
                
                let productCart = cart.find(product => product.id === id);
                // 2. Add found product to the cart array
                if (productCart) {
                    productCart.quantity += 1;
                } else {
                    cart.push({...product, quantity: 1});
                }

                numberItems += 1;
                document.getElementById('count_product').textContent = numberItems;
            }
        
    });

    applyPromotionsCart();
    calculateTotal();
   
}

// Exercise 2
function cleanCart() {
    cart = [];
    
    printCart();
    numberItems = 0;
    
    document.getElementById('count_product').textContent = numberItems;

    document.getElementById('price_oil').innerHTML = '$10.50';
    document.getElementById('price_cupcakes').innerHTML = '$5.00';
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    total = cart.reduce(
    (accumulator, product) => accumulator + (product.price * product.quantity), 0
    );
    console.log(total.toFixed(2));
}

// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    cart.forEach (item => {
        if (item.id === 1) {
            if (item.quantity >= 3) {
                item.price = (10.5 * 0.8).toFixed(2);
                document.getElementById('price_oil').innerHTML = `<s>$10.5</s> Discount applies: $${item.price}`;
            } else if (item.quantity < 3) {
                item.price = 10.50;
                document.getElementById('price_oil').innerHTML = `$${item.price}`;
            }

        } else if (item.id === 3) {
            if (item.quantity >= 10) {
                item.price = (5 * 0.7).toFixed(2);
                document.getElementById('price_cupcakes').innerHTML = `<s>$5</s> Discount applies: $${item.price}`;
            } else if (item.quantity < 10) {
                item.price = 5.00;
                document.getElementById('price_cupcakes').innerHTML = `$${item.price}`;
            }
        }
    });
}

// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    const cartList = document.getElementById('cart_list');

    cartList.innerHTML = '';

    let totalPrice = 0;

    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        if (product) {
            const total = item.price * item.quantity;
            totalPrice += total;
            const itemPrice = parseFloat(item.price);

            const row = document.createElement('tr');
            row.innerHTML = `
                <th scope="row">${product.name}</th>
                <td>$${itemPrice.toFixed(2)}</td>
                <td>${item.quantity}</td>
                <td>$${total.toFixed(2)}</td>
            `;
            cartList.appendChild(row);
        }
    });
    document.getElementById('total_price').textContent = totalPrice.toFixed(2);
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {
    products.forEach(product => {
        if (id === product.id) {
            let productCart = cart.find(product => product.id === id);
            
            if (productCart) {
                if (productCart.quantity > 1) {
                    productCart.quantity -= 1;
                } else {
                    let productIndex = cart.findIndex(product => product.id === id);
                    cart.splice(productIndex, 1);
                }

            numberItems -= 1;
            document.getElementById('count_product').textContent = numberItems;
            }
        }
    });

    applyPromotionsCart();
    calculateTotal();     
}

function open_modal() {
    printCart();
}


