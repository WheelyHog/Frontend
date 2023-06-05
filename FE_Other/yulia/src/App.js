import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import CardPage from "./pages/CardPage/CardPage";
// import { useEffect, useState } from "react";
// import { getProducts } from "./request/getProduct";



function App() {

  // const [products, setProducts] = useState([])
  // useEffect(() => getProducts(setProducts), [])


  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<CardPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}


export default App;
