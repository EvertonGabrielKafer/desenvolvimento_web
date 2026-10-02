import { useState } from "react";
import "./App.css"
import ProductCard from "./productCard";
export default function app(){
  const [contador, setContador] = useState(0);
  const listaProdutos = [
    {id: 1, nome: "Teclado Razer", valor: 300.00},
    {id: 2, nome: "Mouse Razer", valor: 200.00},
    {id: 3, nome: "Xicra Razer", valor: 550.00},
    {id: 4, nome: "PS5 Razer", valor: 7000.00},
    {id: 5, nome: "TV Razer", valor: 5400.00}
  ]

  function Incrementar(){
    setContador(contador + 1)

    console.log(contador)
  }

  return(
    <div className="container">
      <h1>Contador</h1>
      <h3>{contador}</h3>
      <button onClick={Incrementar}>
        Incrementar
      </button>
      <hr/>
      <h4>Lista de podrutos: </h4>
      {listaProdutos.map(produto => <ProductCard key={produto.id} produto={produto}/>)}
    </div>
  )

}