import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { useState } from 'react';
import ItemList from './components/ItemList/ItemList';

const App = () => {

  const [show, setShow] = useState('list');
  
  return (
    <>
      <header className="App-header">
          <div className="contenedor">
            <NavBar />
          </div>
      </header>

      <main>
        <div className='contenedor'>
          <div>
            <button onClick={() => setShow('list')}>List</button>
            <button onClick={() => setShow('detail')}>Detail</button>
          </div>
          {show === 'list' ? <ItemListContainer /> : null}
          {show === 'detail' ? <ItemDetailContainer /> : null}
          {/* <ItemListContainer /> */}
          {/* <ItemDetailContainer /> */}
        </div>
      </main>
    </>
  );
}

export default App;
