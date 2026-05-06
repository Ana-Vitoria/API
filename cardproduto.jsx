import { useNavigate } from "react-router-dom"

function CardProduto({ produto }) {
  const navigate = useNavigate()

  return (
    <div className="card" onClick={() => navigate(`/product/${produto.id}`)}>
      <img src={produto.image} />
      <h3>{produto.title}</h3>
      <p>R$ {produto.price}</p>
    </div>
  )
}

export default CardProduto