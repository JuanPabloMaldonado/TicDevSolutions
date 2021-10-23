import React, { useState } from 'react'
import { useHistory } from 'react-router'
import './actualizarproducto.css'
import './styles.css'
import './scripts.js'
import url from '../constantes/urlBack'


const Actualizarproducto = () => {

    const history = useHistory();
    const [formValues, setFormValues] = useState({})
    const [formTd, setFormId] = useState(0);

    const changeField = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value        
         
        })
    }

     const submit = (e) => {
        e.preventDefault();
        console.log('formValues', formValues);

        fetch(`${url}/products/${formTd}`, {
            method: 'PATCH', // or 'PUT'
            body: JSON.stringify(formValues), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
            
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
            window.alert("El producto se actualizo con exito");
    }

    return (
        <div className="actualizarproductoComponent">
            <div className="bg-primary">
                <div id="layoutAuthentication">
                    <div id="layoutAuthentication_content">
                        <main>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-7">
                                        <div className="card shadow-lg border-0 rounded-lg mt-4">
                                            <div className="card-header">
                                                <h2 className="text-center font-weight-light my-4">Actualizar Producto</h2>
                                            </div>
                                            <div className="card-body">
                                                <form>
                                                    <div className="form-floating mb-3">
                                                        <input onChange={(e) => {setFormId(e.target.value);}} name="id" type="text" class="form-control" id="id" placeholder="Ingrese el ID del producto" />
                                                        <label for="id">ID</label>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <input onChange={changeField} value={formValues.nombre} name="nombre" type="text" class="form-control" id="nombre" placeholder="Ingrese el producto" />
                                                        <label for="nombre">Nombre</label>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <input onChange={changeField} value={formValues.precioAd} name="precioAd" type="number" class="form-control" id="PrecioAd" placeholder="Precio de Adquisición" />
                                                        <label for="PrecioAd">Precio de Adquisición</label>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <input onChange={changeField} value={formValues.precioV} name="precioV" type="number" class="form-control" id="PrecioV" placeholder="Precio de Venta" />
                                                        <label for="PrecioV">Precio de venta</label>
                                                    </div>
                                                    <div className="mt-4 mb-0">
                                                        <button type="submit" onClick={submit} class="btn btn-primary">Actualizar producto</button>

                                                    </div>
                                                </form>
                                            </div>
                                            <div className="card-footer text-center py-3">
                                                <div className="small"><a href="productos.html">Regresar a la página de productos</a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                    <div id="layoutAuthentication_footer">
                        <footer className="py-4 bg-light mt-auto">
                            <div className="container-fluid px-4">
                                <div className="d-flex align-items-center justify-content-between small">
                                    <div className="text-muted">Copyright &copy; TICDev's Solutions 2021 - Misión TIC 2022</div>
                                    <div>
                                        <a href="#">Política de privacidad</a>
                                        &middot;
                                        <a href="#">Términos &amp; Condiciones</a>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
                    crossorigin="anonymous"></script>
                <script src="./scripts.js"></script>
            </div>
        </div >

    )
}


export default Actualizarproducto
