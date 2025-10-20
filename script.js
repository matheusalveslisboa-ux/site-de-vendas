// Definindo os produtos: 5 motos e 5 carros
const products = [
  // Motos
  {
    id: 1,
    name: 'Honda CB 500X',
    category: 'moto',
    price: 30000,
    img: 'https://www.motociclismo.com.br/wp-content/uploads/2022/04/honda_cb_500x_2022.jpg'
  },
  {
    id: 2,
    name: 'Yamaha MT-07',
    category: 'moto',
    price: 28000,
    img: 'https://www.motociclismo.com.br/wp-content/uploads/2022/02/yamaha_mt07.jpg'
  },
  {
    id: 3,
    name: 'Kawasaki Ninja 400',
    category: 'moto',
    price: 35000,
    img: 'https://www.kawasaki.com.br/uploads/ninja-400-2023.jpg'
  },
  {
    id: 4,
    name: 'Suzuki V-Strom 650',
    category: 'moto',
    price: 36000,
    img: 'https://www.suzuki.com.br/imagens/modelos/vstrom-650-2023.jpg'
  },
  {
    id: 5,
    name: 'BMW G 310 GS',
    category: 'moto',
    price: 26000,
    img: 'https://www.bmw-motorrad.com.br/media/2921/g310gs_home.jpg'
  },

  // Carros
  {
    id: 6,
    name: 'Fiat Uno 2023',
    category: 'carro',
    price: 50000,
    img: 'https://quatrorodas.abril.com.br/wp-content/uploads/2022/02/fiat-uno-2022.jpg'
  },
  {
    id: 7,
    name: 'Chevrolet Onix 2023',
    category: 'carro',
    price: 65000,
    img: 'https://quatrorodas.abril.com.br/wp-content/uploads/2021/06/chevrolet-onix-2021.jpg'
  },
  {
    id: 8,
    name: 'Volkswagen Polo 2023',
    category: 'carro',
    price: 75000,
    img: 'https://www.volkswagen.com.br/content/dam/vw/website/experiencia-vw/nossos-modelos/polo/polo2023.jpg'
  },
  {
    id: 9,
    name: 'Toyota Corolla 2023',
    category: 'carro',
    price: 120000,
    img: 'https://quatrorodas.abril.com.br/wp-content/uploads/2022/04/toyota-corolla-2023.jpg'
  },
  {
    id: 10,
    name: 'Honda Civic 2023',
    category: 'carro',
    price: 115000,
    img: 'https://quatrorodas.abril.com.br/wp-content/uploads/2022/03/honda-civic-2022.jpg'
  }
];

// Função para carregar os produtos na página
function loadProducts(filterCategory = 'todos', filterPrice = 0, searchTerm = '') {
  const productList = document.getElementById('product-list');
  productList.innerHTML = '';  // Limpar a lista antes de adicionar os produtos filtrados

  // Filtrar os produtos com base nas categorias, preços e termos de pesquisa
  const filteredProducts = products.filter(product => {
    const isCategoryMatch = filterCategory === 'todos' || product.category === filterCategory;
    const isPriceMatch = product.price <= filterPrice || filterPrice === 0;
    const isSearchMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return isCategoryMatch && isPriceMatch && isSearchMatch;
  });

  // Adicionar os produtos filtrados ao HTML
  filteredProducts.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>R$ ${product.price.toLocaleString()}</p>
      <button>Comprar</button>
    `;
    productList.appendChild(productDiv);
  });
}

// Evento de busca no campo de pesquisa
document.getElementById('searchButton').addEventListener('click', () => {
  const searchTerm = document.getElementById('searchInput').value;
  loadProducts('todos', 0, searchTerm);
});

// Evento de filtro de categoria e preço
document.getElementById('filterForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const category = document.getElementById('category').value;
  const price = parseInt(document.getElementById('price').value) || 0;
  loadProducts(category, price);
});

// Carregar todos os produtos ao abrir a página
loadProducts();
