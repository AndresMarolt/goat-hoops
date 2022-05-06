import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import BuyerForm from './components/BuyerForm/BuyerForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from './context/CartContext';

const App = () => {
  
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <header className="App-header">
              <NavBar />
          </header>

          <main>
            {/* <img src="/img/etc/background.jpg" className='background-img'></img> */}
            <Routes>  
              <Route path="/" element={<ItemListContainer />} />  

              <Route path="/categoria/:categoriaId/" element={<ItemListContainer />}>
                <Route path=":tipoId" element={<ItemListContainer />} />
              </Route>

              <Route path="/item/:productId" element={<ItemDetailContainer />} />
              <Route path="/nosotros" element={<AboutUs/>} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/buyerform" element={<BuyerForm /> } />
              <Route path="*" element={<h1>404 NOT FOUND</h1>} />
            </Routes>
          </main>
        </BrowserRouter>
        <footer>
          <div className='contenedor'>
            <Footer />
          </div>
        </footer>
      </CartContextProvider>
    </>
  );
}

export default App;
