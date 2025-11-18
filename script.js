// REFERÊNCIAS
const productsEl = document.getElementById("products");
const cartBtn = document.getElementById("cart-btn");
const cartCountEl = document.getElementById("cart-count");
const cartModal = document.getElementById("cart-modal");
const closeCart = document.getElementById("close-cart");
const cartItemsEl = document.getElementById("cart-items");
const cartTotalEl = document.getElementById("cart-total");
const clearCartBtn = document.getElementById("clear-cart");
const checkoutBtn = document.getElementById("checkout");
const yearEl = document.getElementById("year");

// PRODUTOS
const products = [
    { id: "1", name: "Cacto em Vaso", price: 29.90, img: "https://images.unsplash.com/photo-1602018457560-63f75e8e38e9?w=600" },
    { id: "2", name: "Samambaia", price: 59.90, img: "https://images.unsplash.com/photo-1568000213-cc6caad00a68?w=600" },
    { id: "3", name: "Orquídea", price: 99.90, img: "https://images.unsplash.com/photo-1588665710910-4c290c8ad1d1?w=600" },
    { id: "4", name: "Suculenta", price: 39.90, img: "https://images.unsplash.com/photo-1597013413842-8f41b1e69810?w=600" },
    { id: "5", name: "Bambu da Sorte", price: 49.90, img: "https://images.unsplash.com/photo-1611902771487-f7e5b231710d?w=600" },
    { id: "6", name: "Palmeira Areca", price: 179.90, img: "https://images.unsplash.com/photo-1599301713371-212478d2c92f?w=600" },
];

// CARRINHO
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartCount() {
    const total = cart.reduce((acc, item) => acc + item.qty, 0);
    cartCountEl.textContent = total;
}

// FORMATADOR
function formatBRL(n) {
    return n.toFixed(2).replace(".", ",");
}

// RENDERIZAR PRODUTOS
