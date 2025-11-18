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
    { id: "1", name: "Bromélia", price: 39.90, img: "https://tse1.mm.bing.net/th/id/OIP.1aIk4JtSaxf31cfj7i3u7QHaE7?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: "2", name: "Cactos", price: 29.90, img: "https://thumbs.dreamstime.com/b/cacto-no-fundo-branco-110935775.jpg" },
    { id: "3", name: "Orquídea Phalaenopsis", price: 99.90, img: "https://tse3.mm.bing.net/th/id/OIP.TvwTgDxVIojx0T9wM7zN-AHaIh?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: "4", name: "Lavanda", price: 54.90, img: "https://img.freepik.com/fotos-premium/fundo-branco-lavanda-isolado_198067-50.jpg" },
    { id: "5", name: "Aloe Vera", price: 49.90, img: "https://img.freepik.com/fotos-premium/fundo-branco-da-planta-de-aloe-vera_431161-25023.jpg" },
    { id: "6", name: "Rosa do Deserto", price: 79.90, img: "https://static.wixstatic.com/media/0f37d7_4960438534fd47bc90ab996c64c6018e~mv2.jpg" },
    { id: "7", name: "Lírio da Paz", price: 69.90, img: "https://thumbs.dreamstime.com/b/etapa-vegetativa-de-plantas-ervas-maconha-com-fundo-branco-165617426.jpg" },
    