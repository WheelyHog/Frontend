import styles from './App.module.css';
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Cards from "./components/Cards/Cards";
import Rental from "./components/Rental/Rental";

function App() {
    return (
        <div className={styles.app}>
            <Header/>
            <Banner/>
            <Services />
            <About />
            <Cards />
            <Rental />
        </div>
    );
}

export default App;
