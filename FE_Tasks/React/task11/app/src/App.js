import { useSelector } from 'react-redux';
import './App.css';
import AddProductForm from './components/AddProductForm/AddProductForm';
import ProductsContainer from './components/ProductsContainer/ProductsContainer';

function App() {

  // let products = useSelector(store => store.products)

  // const addProduct = (e) => {

  // }

  return (
    <div>
      <AddProductForm />
      <ProductsContainer />
    </div>
  );
}

export default App;
