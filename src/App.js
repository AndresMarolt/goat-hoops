import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

const App = () => {
  
  return (
    <>
      <header className="App-header">
          <div className="contenedor">
            <NavBar />
          </div>
      </header>

      <main>
        <div className='contenedor'>
          <ItemListContainer />
          <ItemDetailContainer />
        </div>
      </main>
    </>
  );
}

export default App;
