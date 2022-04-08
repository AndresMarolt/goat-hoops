import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
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
            <div>
              <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
                <Route path="/categoria/Camiseta/:tipoId" element={<ItemListContainer />} />
                <Route path="/Item/:productId" element={<ItemDetailContainer />} />
                <Route path="/nosotros"/>
                <Route path="/contacto"/>
                <Route path="*" element={<h1>404 NOT FOUND</h1>} />
              </Routes>
            </div>
          </div>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
