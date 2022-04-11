import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
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
                <Route path="/nosotros"/>
                <Route path="/contacto"/>
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
