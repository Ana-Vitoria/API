import { criarCard } from "../../components/cardProduto.js"

const grid = document.getElementById("gridProdutos")

console.log(grid)

async function carregarProdutos() {
  try {
    const resposta = await fetch("https://fakestoreapi.com/products")
    const produtos = await resposta.json()

    console.log(produtos)

    produtos.forEach(produto => {
      const card = criarCard(produto)
      grid.appendChild(card)
    })

  } catch (erro) {
    console.error("Erro:", erro)
  }
}

carregarProdutos()