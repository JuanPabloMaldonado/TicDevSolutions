import React, { useState } from 'react'
import { useHistory } from 'react-router'
import './registroventa.css'
import './styles.css'
import './scripts.js'


const Registroventa = () => {
    const history = useHistory();
    const [formValues, setFormValues] = useState({})

    const changeField = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value

        })
    }

    const submit = (e) => {
        e.preventDefault();
        console.log('formValues', formValues);

        fetch('http://localhost:5000/api/sales', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(formValues), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }

        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
        window.alert("La venta se registro con exito");
    }

    return (
        <div className="perfilComponent">
            <div className="bg-primary">
                <div id="layoutAuthentication">
                    <div id="layoutAuthentication_content">
                        <main>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-7">
                                        <div className="card shadow-lg border-0 rounded-lg mt-5">
                                            <div className="card-header">
                                                <h2 className="text-center font-weight-light my-4">Nueva venta</h2>                                                
                                            </div>
                                            <div className="card-body">
                                                <form>
                                                    <div className="form-floating mb-3">
                                                        <input onChange={changeField} value={formValues.nitCc} name="nitCc" type="number" class="form-control" id="nitCc" placeholder="Ingrese el NIT / CC del Cliente" />
                                                        <label for="nitCc">NIT / CC Cliente</label>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <input onChange={changeField} value={formValues.nombre} name="nombre" type="text" class="form-control" id="nombre" placeholder="Ingrese el nombre del cliente" />
                                                        <label for="nombre">Nombre Cliente</label>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <input onChange={changeField} value={formValues.valor} name="valor" type="number" class="form-control" id="valor" placeholder="Valor de Factura" />
                                                        <label for="valor">Valor</label>
                                                    </div>
                                                    <div className="form-floating mb-3">                                                       
                                                        <select className="form-control" onChange={changeField} value={formValues.formaPago} name="formaPago" id="formaPago" type="text" placeholder="Ingrese su forma de pago">
                                                            <option disabled="disabled" selected="selected"></option>
                                                            <option>Efectivo</option>
                                                            <option>Transferencia</option>
                                                            <option>Tarjeta Debito</option>
                                                            <option>Tarjeta credito</option>
                                                            <option>On line</option>
                                                            <option>Cheque</option>
                                                        </select>
                                                        <label for="formaPago">Forma de Pago</label>
                                                    </div>
                                                    <div className="mt-4 mb-0">
                                                        <button type="submit" onClick={submit} class="btn btn-primary">Registrar nueva venta</button>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="card-footer text-center py-3">
                                                <div className="small"><a href="Admin_roles.html">Regresar a la página de inicio</a></div>
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
                <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
                <script src="./scripts.js"></script>
            </div>
        </div >

    )
}


export default Registroventa
