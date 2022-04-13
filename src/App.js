import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  
  return (
    <>
      <BrowserRouter>
        <header className="App-header">
            <NavBar />
        </header>

        <main>
          <div className='contenedor'>
              <Routes>
                <Route path="/" element={<ItemListContainer />} />

                <Route path="/categoria/:categoriaId/" element={<ItemListContainer />}>
                  <Route path=":tipoId" element={<ItemListContainer />} />
                </Route>

                <Route path="/item/:productId" element={<ItemDetailContainer />} />
                <Route path="/nosotros" element={<AboutUs/>} />
                <Route path="/contacto" element={<Contact />} />
                <Route path="*" element={<h1>404 NOT FOUND</h1>} />
              </Routes>
          </div>
        </main>

        <footer>
          <div className='contenedor'>
            <Footer />
          </div>
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
