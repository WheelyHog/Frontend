import './App.css';
import AddProductForm from './components/AddProductForm/AddProductForm';
import Cart from './components/Cart/Cart';
import ProductsContainer from './components/ProductsContainer/ProductsContainer';

function App() {
  return (
    <div>
      <AddProductForm />
      <ProductsContainer />
      <Cart />
    </div>
  );
}

export default App;
