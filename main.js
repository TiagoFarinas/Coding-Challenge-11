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

//Task 3: Calculate Total Price Dynamically
   
function calculateTotalPrice() {
    const productPrice = productSelector.value; // Get price of selected product
    const quantity = quantityInput.value; // Get quantity entered by user
    const totalPrice = productPrice * quantity; // Calculate total price
    totalPriceElement.textContent = totalPrice.toFixed(2)}; // Update display of total price
// Use calculateTotalPrice when there are changes
productSelector.addEventListener('change', calculateTotalPrice);
quantityInput.addEventListener('input', calculateTotalPrice);

// Task 4: Handle Order Submission
  
placeOrderButton.addEventListener('click', function() {
    const selectedProduct = productSelector.selectedOptions[0].text; // Get product name 
    const quantity = quantityInput.value; // Get quantity entered
    const totalPrice = totalPriceElement.textContent; // Get total price display
    orderSummary.textContent = `You ordered ${quantity} of ${selectedProduct}. Total price: $${totalPrice}`});// Display order summary