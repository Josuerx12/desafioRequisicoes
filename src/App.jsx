import { useState } from "react";
import "./App.sass";
import { useFetch } from "./hooks/useFetch";
import { usePost } from "./hooks/usePost";
import { useDelete } from "./hooks/useDelete";

const url = "http://localhost:3000/Products";
const App = () => {
  const { data: products, loading } = useFetch(url);
  const { post } = usePost(url);
  const { deleteItem } = useDelete(url);

  const [nome, setNome] = useState("");
  const [estoque, setEstoque] = useState("");
  const [preco, setPreco] = useState("");
  const limparCampos = () => {
    setNome("");
    setEstoque("");
    setPreco("");
  };

  const handleCadastrarProduto = (e) => {
    e.preventDefault();
    const produto = {
      nome: nome,
      estoque: estoque,
      preco: preco,
    };
    post(produto);
    limparCampos();
  };

  const handleDeletarProduto = (id) => {
    deleteItem(id);
  };
  return (
    <div className="app">
      <h1>Lista de produtos</h1>
      <ul>
        {loading && <p>Carregando dados...</p>}
        {products &&
          products.map((product) => (
            <li key={product.id}>
              Produto: {product.nome} - Qtd.:{product.estoque} - R$
              {product.preco}
              <button onClick={() => handleDeletarProduto(product.id)}>
                Deletar
              </button>
            </li>
          ))}
      </ul>
      <div className="cadastro">
        <form onSubmit={handleCadastrarProduto}>
          <label>
            <h3>Nome do produto:</h3>
            <input
              type="text"
              placeholder="Digite o nome do produto"
              name="nome"
              maxLength={20}
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </label>
          <label>
            <h3>Insira a quantidade em estoque:</h3>
            <input
              type="number"
              name="quantidade"
              placeholder="Qtd. estoque"
              required
              maxLength={3}
              value={estoque}
              onChange={(e) => setEstoque(e.target.value)}
            />
          </label>
          <label>
            <h3>Insira o preço:</h3>
            <input
              type="number"
              name="preco"
              placeholder="Digite um valor."
              maxLength={6}
              required
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
            />
          </label>
          <button type="submit">Cadastrar produtos</button>
        </form>
      </div>
    </div>
  );
};

export default App;
