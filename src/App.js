import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {

  const title = "Ecommerce";

  return (
    <>
      <header className="App-header">
          <div className="contenedor">
            <NavBar />
          </div>
      </header>

      <main>
        <div className='contenedor'>
          <ItemListContainer greeting={'Greeting de ItemListContainer'} />
        </div>
      </main>
    </>
  );
}

export default App;
