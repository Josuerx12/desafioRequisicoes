import "./App.sass";
import { useFetch } from "./hooks/useFetch";
const url = "http://localhost:3000/Products";
const App = () => {
  const { data, loading } = useFetch(url);

  return (
    <div className="app">
      <h1>Lista de produtos</h1>
      <ul>
        {!loading && <p>Carregando dados da API...</p>}
        {loading &&
          data.map((product) => (
            <li key={product.id}>
              {product.nome} - {product.preco} - {product.estoque}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default App;
