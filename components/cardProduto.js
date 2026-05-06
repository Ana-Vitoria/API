export function criarCard(produto) {
  const card = document.createElement("div")
  card.className = "card"

  card.innerHTML = `
    <img src="${produto.image}">
    <h3>${produto.title}</h3>
    <p>
      ${produto.price.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      })}
    </p>
  `

  return card
}