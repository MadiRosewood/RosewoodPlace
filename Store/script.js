// Sample product data
const products = [
    { id: 1, name: 'nothing', price: 25.00, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'nothing but cheaper', price: 15.00, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'nothing but more expensive', price: 30.00, image: 'https://via.placeholder.com/150' }
  ];
  
  // Global Cart
  let cart = [];
  
  // Load Products into the Store
  function loadProducts() {
    const container = document.getElementById('products-container');
    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      container.appendChild(productElement);
    });
  }
  
  // Add Product to Cart
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingProductIndex = cart.findIndex(item => item.id === productId);
  
    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity++;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
  
    updateCartUI();
  }
  
  // Update Cart UI
  function updateCartUI() {
    // Update the cart count
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = cartCount;
  
    // Update the cart modal
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    let total = 0;
  
    cart.forEach(item => {
      const cartItemElement = document.createElement('li');
      cartItemElement.textContent = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
      cartItems.appendChild(cartItemElement);
      total += item.price * item.quantity;
    });
  
    cartTotal.textContent = total.toFixed(2);
  }
  
  // Toggle Cart Modal Visibility
  function toggleCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
  }
  
  // Checkout Function
  function checkout() {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
  
    // Normally, you'd handle the checkout process here with a payment gateway like Stripe or PayPal.
    alert('Thank you for your purchase!');
    cart = [];  // Clear cart after checkout
    updateCartUI();
  }
  
  // Load products on page load
  window.onload = loadProducts;
  