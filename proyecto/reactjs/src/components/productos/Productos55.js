import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import './productos.css'
import './styles.css'
import './scripts.js'


const Productos = () => {
    const [products, setProducts] = useState([])

    fetch('http://localhost:5000/api/products')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setProducts(data);
        }
        ).catch((error) => {
            console.log(error);
        });


    return (
        <div className="productosComponent">
            {(products !== undefined && products.length > 0) ?
                products.map(item => {
                    return (<div className="itemProduct">
                        <div><strong>Nombre:</strong> {item.nombre}</div>
                        <div><strong>Precio Adquisición:</strong> {item.precioAd}</div>
                        <div><strong>Precio Venta:</strong> {item.precioV}</div>
                    </div>);
                }) :
                products !== undefined ?
                    <div>
                        Ningun producto coincide con la busqueda
                    </div>
                    :
                    <div>
                        Error en la conexión, intenta mas tarde
                    </div>
            }

        </div >

    )
}


export default Productos
