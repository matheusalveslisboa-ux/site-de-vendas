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

// PRODUTOS (AGORA SÃO PLANTAS)
const products = [
    { id: "1", name: "Bromélia", price: 39.90, img: "https://images.unsplash.com/photo-1611078484309-d3e2f5c7e1ba?w=600" },
    { id: "2", name: "Cactos", price: 29.90, img: "https://images.unsplash.com/photo-1583827185221-9f0d372013ad?w=600" },
    { id: "3", name: "Orquídea Phalaenopsis", price: 99.90, img: "https://images.unsplash.com/photo-1616167451437-2fe9d2cfb34d?w=600" },
    { id: "4", name: "Lavanda", price: 54.90, img: "https://images.unsplash.com/photo-1583612341977-b9a2a383742a?w=600" },
    { id: "5", name: "Aloe Vera", price: 49.90, img: "https://images.unsplash.com/photo-1597848493920-5d5ca6a7bcfa?w=600" },
    { id: "6", name: "Rosa do Deserto", price: 79.90, img: "https://images.unsplash.com/photo-1583615990904-13c4e6225fd3?w=600" },
    { id: "7", name: "Lírio da Paz", price: 69.90, img: "https://images.unsplash.com/photo-1598274849651-6b7e98e9e4f7?w=600" },
    