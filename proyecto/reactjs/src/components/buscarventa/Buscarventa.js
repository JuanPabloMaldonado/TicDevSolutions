import React, { useState } from 'react'
import { useHistory } from 'react-router'
import './buscarventa.css'
import './styles.css'
import './scripts.js'

 
const Buscarventa = () => {

    const [sales, setSales] = useState([])
    const [formId, setFormId] = useState(0);

    const submit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:5000/api/sales/${formId}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setSales(data);

            }
            ).catch((error) => {
                console.log(error);
            });

        {
            (sales !== undefined && sales.length > 0) ?
            sales.map(item => {
                return (<tr>

                    <th scope="row"> {item.id}</th>
                    <th> {item.nombre}</th>
                    <th> {item.nitCc}</th>
                    <th> {item.valor}</th>
                    <th> {item.formaPago}</th>
                    <th> {item.createdAt}</th>

                </tr>);
            }) :
            sales !== undefined ?
                <div>
                    Ningun producto coincide con la busqueda
                </div>
                :
                <div>
                    Error en la conexión, intenta mas tarde
                </div>
        }
    }


    return (
        <div className="buscarventaComponent">
            <div className="sb-nav-fixed" className="bg-primary">


                <div id="layoutAuthentication">
                    <div id="layoutAuthentication_content">
                        <main>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-5">
                                        <div className="card shadow-lg border-0 rounded-lg mt-5">
                                            <div className="card-header">
                                                <h3 className="text-center font-weight-light my-4">Buscar Venta</h3>
                                            </div>
                                            <div className="card-body">
                                                <form>
                                                <div className="form-floating mb-3">
                                                        <input onChange={(e) => { setFormId(e.target.value); }} name="id" type="text" class="form-control" id="id" placeholder="Ingrese el ID del producto" />
                                                        <label for="id">ID</label>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <input value={sales.nitCc} name="nitCc" type="number" class="form-control" id="nitCc" placeholder="Ingrese el NIT / CC del Cliente" />
                                                        <label for="nitCc">NIT / CC Cliente</label>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <input  value={sales.nombre} name="nombre" type="text" class="form-control" id="nombre" placeholder="Ingrese el nombre del cliente" />
                                                        <label for="nombre">Nombre Cliente</label>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <input  value={sales.valor} name="valor" type="number" class="form-control" id="valor" placeholder="Valor de Factura" />
                                                        <label for="valor">Valor</label>
                                                    </div>     
                                                    <div className="form-floating mb-3">
                                                        <input  value={sales.formaPago} name="formaPago" type="text" class="form-control" id="formaPago" placeholder="Ingrese su forma de pago"/>
                                                        <label for="formaPago">Forma de pago</label>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <input  value={sales.createdAt} name="createdAt" type="text" class="form-control" id="createdAt" placeholder="Fecha de Factura" />
                                                        <label for="createdAt">Fecha de Factura</label>
                                                    </div>
                                                    <div className="mt-4 mb-0">
                                                        <button type="submit" onClick={submit} class="btn btn-primary">Buscar Venta</button>
                                                    </div>
                                                </form>
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
                                    <div className="text-muted">Copyright &copy; Your Website 2021</div>
                                    <div>
                                        <a href="#">Privacy Policy</a>
                                        &middot;
                                        <a href="#">Terms &amp; Conditions</a>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>

            </div>
        </div >

    )
}


export default Buscarventa
