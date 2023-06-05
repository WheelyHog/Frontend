
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductListPage from './components/ProductListPage';

function App() {

  let categories = [1, 2, 3, 4, 5]

  return (
    <div className="App">
      <div>
        <Link to={'/allproducts'}><button>All Products</button></Link>
        <Link to={'/productswithsale'}><button>Sale Products</button></Link>
        <div>
          {categories.map(elem =>
            <Link to={`/category/${elem}`} key={elem}><button>{elem}</button></Link>)}
        </div>
      </div>
      <div>

      </div>
      <Routes>
        <Route path='/category/:id' element={<ProductListPage type={'category'} />} />
        <Route path='/allproducts' element={<ProductListPage type={'all'} />} />
        <Route path='/productswithsale' element={<ProductListPage type={'sale'} />} />
      </Routes>
    </div>
  );
}

export default App;
