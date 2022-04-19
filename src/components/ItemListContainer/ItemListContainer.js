import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import { obtainProducts, obtainTipoId } from '../../asyncmock';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const { categoriaId, tipoId } = useParams();

    useEffect(() => {
        obtainProducts(categoriaId)
            .then(prods => {
                setProducts(prods);
            }).catch(error => {
                console.log(error);
            })

        if(tipoId) {
            obtainTipoId(tipoId)
                .then(prods => {
                    setProducts(prods);
                }).catch(error => {
                    console.log(error);
                })
        }
    }, [categoriaId, tipoId])

    return (
        <div className="ItemListContainer">

            <div id="carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/img/etc/banner_nike_lebron.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src="/img/etc/city.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/img/etc/banner_2.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


            {(!categoriaId && !tipoId) ? 
                <div className='Items-title'>
                    <h1 className=''>TRENDING</h1>
                </div>
                : 
                <div className='Items-title'>
                    <h1 className=''>{categoriaId} <span>{tipoId ? tipoId : null}</span></h1>
                </div>}
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;