import { useEffect, useState } from "react";
import ProductForm from "./components/ProductForm/ProductForm";
import ProductContainer from "./components/ProductContainer/ProductContainer";
import { getProducts } from "./products_req";

function App() {

  const [products, setProducts] = useState([])

  useEffect(() => getProducts(setProducts), [])


  return (
    <div className="App">
      <ProductForm />
      <ProductContainer products={products} />
    </div>
  );
}

export default App;
