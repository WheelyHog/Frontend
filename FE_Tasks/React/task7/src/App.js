import { Route, Routes } from "react-router-dom";
import NavMenu from "./components/NavMenu/NavMenu";
import MainPage from "./pages/MainPage/MainPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import s from './App.module.css'
import RolePage from "./pages/RolePage/RolePage";

function App() {
  return (
    <div className={s.container}>
      <NavMenu />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:role" element={<RolePage />} />
      </Routes>
    </div>

  );
}

export default App;
