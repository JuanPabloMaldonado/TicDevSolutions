import React, { useState } from 'react'
import { useHistory } from 'react-router'
import './actualizarventa.css'
import './styles.css'
import './scripts.js'


const Actualizarventa = () => {


    return (
        <div className="perfilComponent">
            <div class="sb-nav-fixed">
                <div id="layoutAuthentication">
                    <div id="layoutAuthentication_content">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-7">
                                    <div class="card shadow-lg border-0 rounded-lg mt-4">
                                        <div class="card-header">
                                            <h2 class="text-center font-weight-light my-4">Editar Venta</h2>
                                            <h6 class="text-center font-weight-light my-4">Por favor verifique o actualice la
                                                venta descrita a continuación</h6>
                                        </div>
                                        <div class="card-body">
                                            <form>
                                                <div>
                                                    <h6 class="font-weight-light my-4">Información de la venta</h6>
                                                </div>
                                                <div class="form-floating mb-3">
                                                    <input class="form-control" id="inputFactura" type="text"
                                                        disabled="disabled" placeholder="Ingrese # de Factura" />
                                                    <label for="inputFactura"># Factura</label>
                                                </div>
                                                <div class="form-floating mb-3">
                                                    <input class="form-control" id="inputFecha" type="date"
                                                        placeholder="Ingrese Fecha de la venta" />
                                                    <label for="inputFecha">Fecha</label>
                                                </div>
                                                <div class="form-floating mb-3">
                                                    <input class="form-control" id="inputIdCliente" type="text"
                                                        placeholder="Ingrese el NIT / CC del Cliente" />
                                                    <label for="inputIdCliente">NIT / CC Cliente</label>
                                                </div>
                                                <div class="form-floating mb-3">
                                                    <input class="form-control" id="inputNombreCliente" type="text"
                                                        placeholder="Ingrese Nombre Cliente" />
                                                    <label for="inputNombreCliente">Nombre Cliente</label>
                                                </div>
                                                <div class="form-floating mb-3">
                                                    <input class="form-control" id="inputValor" type="text"
                                                        placeholder="Ingrese el precio de venta" />
                                                    <label for="inputValor">Valor venta</label>
                                                </div>
                                                <div class="form-floating mb-3">
                                                    <input class="form-control" id="inputValor" type="text"
                                                        placeholder="Ingrese Forma de Pago" />
                                                    <label for="inputFormaP">Forma de Pago</label>
                                                </div>
                                                <div class="mt-4 mb-0">
                                                    <div class="d-grid"><a class="btn btn-primary btn-block"
                                                        href="Ventas.html">Actualizar Venta</a></div>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="card-footer text-center py-3">
                                            <div class="small"><a href="Ventas.html">Regresar a la página de inicio</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div >
                <div id="layoutAuthentication_footer">
                    <footer class="py-4 bg-light mt-auto">
                        <div class="container-fluid px-4">
                            <div class="d-flex align-items-center justify-content-between small">
                                <div class="text-muted">Copyright &copy; TICDev's Solutions 2021 - Misión TIC 2022</div>
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
            <script src="js/scripts.js"></script>




            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
                crossorigin="anonymous"></script>
            <script src="./scripts.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/simple-datatables@latest" crossorigin="anonymous"></script>
            <script src="js/datatables-simple-demo.js"></script>
        </div >



    )
}


export default Actualizarventa
