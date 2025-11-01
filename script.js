let carrinho = [];
let total = 0;

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    total += preco;
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const lista = document.getElementById("lista-carrinho");
    const totalElement = document.getElementById("total");
    const contador = document.getElementById("contador-carrinho");

    lista.innerHTML = "";
    carrinho.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        lista.appendChild(li);
    });

    totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
    contador.textContent = carrinho.length;
}

function finalizarCompra() {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio! 🌿");
        return;
    }

    alert(`Compra finalizada com sucesso!\n\nTotal: R$ ${total.toFixed(2)}\n\nObrigado por comprar com a Verde Vida! 🌱`);
    carrinho = [];
    total = 0;
    atualizarCarrinho();
}
