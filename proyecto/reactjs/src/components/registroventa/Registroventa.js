import React, { useState } from 'react'
import { useHistory } from 'react-router'
import './registroventa.css'
import './styles.css'
import './scripts.js'


const Registroventa = () => {


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
                                                <h2 className="text-center font-weight-light my-4">Formulario de ingreso de nueva venta</h2>
                                                <h6 className="text-center font-weight-light my-4">Por favor registre la nueva venta ingresando la información a continuación</h6>
                                            </div>
                                            <div className="card-body">
                                                <form>
                                                    <div><h6 className="font-weight-light my-4">Registrado por (Admin)</h6></div>
                                                    <div className="row mb-3">
                                                        <div className="col-md-6">
                                                            <div className="form-floating mb-3 mb-md-0">
                                                                <input className="form-control" id="inputID" type="text" placeholder="Ingrese ID de usuario" />
                                                                <label for="inputID">ID</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-floating">
                                                                <input className="form-control" id="inputUserName" type="text" placeholder="Ingrese el nombre de usuario" />
                                                                <label for="inputUserName">Nombre de usuario</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div><h6 className="font-weight-light my-4">Información del comprador</h6></div>
                                                    <div className="row mb-3">
                                                        <div className="col-md-6">
                                                            <div className="form-floating mb-3 mb-md-0">
                                                                <input className="form-control" id="inputNombreC" type="text" placeholder="Ingrese nombre comprador" />
                                                                <label for="inputNombreC">Nombre</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-floating">
                                                                <input className="form-control" id="inputApellidoC" type="text" placeholder="Ingrese apellido comprador" />
                                                                <label for="inputApellidoC">Apellidos</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <input className="form-control" id="inputEmail" type="email" placeholder="nombre@ejemplo.com" />
                                                        <label for="inputEmail">Correo electrónico</label>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <input className="form-control" id="inputCelC" type="text" placeholder="Ingrese celular comprador" />
                                                        <label for="inputCelC">Celular</label>
                                                    </div>
                                                    <div><h6 className="font-weight-light my-4">Información de entrega</h6></div>
                                                    <div className="form-floating mb-3">
                                                        <input className="form-control" id="inputDireccionC" type="text" placeholder="Ingrese dirección comprador" />
                                                        <label for="inputDireccionC">Dirección de entrega</label>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <input className="form-control" id="inputInfo" type="text" placeholder="Información adicional" />
                                                        <label for="inputInfo">Información adicional (Edificio - Apartamento)</label>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <div className="col-md-4">
                                                            <div className="form-floating mb-3 mb-md-0">
                                                                <input className="form-control" id="inputPais" type="text" placeholder="Ingrese País" />
                                                                <label for="inputPais">País</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="form-floating mb-3 mb-md-0">
                                                                <input className="form-control" id="inputDepartamento" type="text" placeholder="Ingrese Departamento" />
                                                                <label for="inputDepartamento">Departamento</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="form-floating mb-3 mb-md-0">
                                                                <input className="form-control" id="inputCiudad" type="text" placeholder="Ingrese Ciudad" />
                                                                <label for="inputCiudad">Ciudad</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <input className="form-control" id="inputPrecioE" type="text" placeholder="Precio de envío" />
                                                        <label for="inputPrecioE">Precio del envío</label>
                                                    </div>
                                                    <div><h6 className="font-weight-light my-4">Información de la venta</h6></div>
                                                    <div className="form-floating mb-3">
                                                        <input className="form-control" id="inputNombreP" type="text" placeholder="Nombre producto" />
                                                        <label for="inputNombreP">Nombre del producto</label>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <input className="form-control" id="inputUPC" type="text" placeholder="Código UPC" />
                                                        <label for="inputUPC">Código UPC</label>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <input className="form-control" id="inputVenta" name="fventa" type="text" placeholder="dd/mm/yyyy" />
                                                        <label for="inputVenta">Fecha de venta</label>
                                                    </div>
                                                   
                                                    <div className="row mb-3">
                                                        <div className="col-md-4">
                                                            <div className="form-floating mb-3 mb-md-0">
                                                                <input className="form-control" id="inputCantidad" type="text" placeholder="Ingrese la cantidad" />
                                                                <label for="inputCantidad">Cantidad</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="form-floating mb-3 mb-md-0">
                                                                <input className="form-control" id="inputPrecioP" type="text" placeholder="Precio producto" />
                                                                <label for="inputPrecioP">Precio unidad</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="form-floating mb-3 mb-md-0">
                                                                <input className="form-control" id="inputPrecioT" type="text" placeholder="Precio Total" />
                                                                <label for="inputPrecioT">Precio total</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <input className="form-control" id="inputComentarios" type="text" placeholder="Comentarios adicionales" />
                                                        <label for="inputComentarios">Comentarios adicionales</label>
                                                    </div>
                                                    <div className="mt-4 mb-0">
                                                        <div className="d-grid"><a className="btn btn-primary btn-block" onclick="sweetalertclick()" href="#">Registrar nueva venta</a></div>
                                                        
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
