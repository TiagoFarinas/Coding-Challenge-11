// DOM Elements
const productSelector = document.getElementById('product-selector');
const quantityInput = document.getElementById('quantity');
const totalPriceElement = document.getElementById('total-price');
const placeOrderButton = document.getElementById('place-order');
const orderSummary = document.getElementById('order-summary');

// Task 2: Add Event Listener for Product Selection

function updatePriceDisplay() {
    const productPrice = productSelector.value; //price of  selected product
    const quantity = quantityInput.value; //quantity entered by  user
    const totalPrice = productPrice * quantity; //get total price
    totalPriceElement.textContent = totalPrice.toFixed(2)}; // Update display total price

// Event listeners for product selection and quantity input
productSelector.addEventListener('change', updatePriceDisplay);
quantityInput.addEventListener('input', updatePriceDisplay);


