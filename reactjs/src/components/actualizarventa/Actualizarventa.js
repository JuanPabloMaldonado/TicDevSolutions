import React, { useState } from 'react'
import { useHistory } from 'react-router'
import './actualizarventa.css'
import './styles.css'
import './scripts.js'


const Actualizarventa = () => {


    return (
        <div className="perfilComponent">
            <div class="sb-nav-fixed">
                <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">

                    <a class="navbar-brand ps-3" href="index.html">TICDev's Solutions</a>

                    <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i
                        class="fas fa-bars"></i></button>

                    <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                        <div class="input-group">
                            <input class="form-control" type="text" placeholder="Buscar..." aria-label="Buscar..."
                                aria-describedby="btnNavbarSearch" />
                            <button class="btn btn-primary" id="btnNavbarSearch" type="button"><i
                                class="fas fa-search"></i></button>
                        </div>
                    </form>

                    <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#!">Settings</a></li>
                                <li><a class="dropdown-item" href="#!">Activity Log</a></li>
                                <li>
                                    <hr class="dropdown-divider" />
                                </li>
                                <li><a class="dropdown-item" href="#!">Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div id="layoutSidenav">
                    <div id="layoutSidenav_nav">
                        <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                            <div class="sb-sidenav-menu">
                                <div class="nav">

                                    <div class="sb-sidenav-menu-heading">Sistema de Ventas </div>

                                    <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages"
                                        aria-expanded="false" aria-controls="collapsePages">
                                        <div class="sb-nav-link-icon"><i class="fas fa-book-open"></i></div>
                                        Administrador
                                        <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                    </a>
                                    <div class="collapse" id="collapsePages" aria-labelledby="headingTwo"
                                        data-bs-parent="#sidenavAccordion">
                                        <nav class="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                            <a class="nav-link" href="#">Ventas</a>
                                            <a class="nav-link" href="#">Productos</a>
                                            <a class="nav-link" href="#">Usuarios</a>
                                            <a class="nav-link" href="#">Cambiar Password</a>
                                        </nav>
                                    </div>

                                    <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages"
                                        aria-expanded="false" aria-controls="collapsePages">
                                        <div class="sb-nav-link-icon"><i class="fas fa-book-open"></i></div>
                                        Vendedor
                                        <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                    </a>
                                    <div class="collapse" id="collapsePages" aria-labelledby="headingTwo"
                                        data-bs-parent="#sidenavAccordion">
                                        <nav class="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                            <a class="nav-link" href="#">Ventas</a>
                                            <a class="nav-link" href="#">Cambiar Password</a>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div class="sb-sidenav-footer">
                                <div class="small">Ingresar como:</div>
                                User
                            </div>
                        </nav>
                    </div>
                </div>
        

                <div id="layoutAuthentication">
                    <div id="layoutAuthentication_content">
                     
                        <div class ="container">
                        <div class ="row justify-content-center">
                        <div class ="col-lg-7">
                        <div class ="card shadow-lg border-0 rounded-lg mt-4">
                        <div class ="card-header">
                        <h2 class ="text-center font-weight-light my-4">Editar Venta</h2>
                        <h6 class ="text-center font-weight-light my-4">Por favor verifique o actualice la
                        venta descrita a continuación</h6>
                        </div>
                        <div class ="card-body">
                        <form>
                        <div>
                        <h6 class ="font-weight-light my-4">Información de la venta</h6>
                        </div>
                        <div class ="form-floating mb-3">
                        <input class ="form-control" id="inputFactura" type ="text"
                        disabled="disabled" placeholder="Ingrese # de Factura" />
                        <label for="inputFactura"># Factura</label>
                        </div>
                        <div class ="form-floating mb-3">
                        <input class ="form-control" id="inputFecha" type ="date"
                        placeholder="Ingrese Fecha de la venta" />
                        <label for="inputFecha">Fecha</label>
                        </div>
                        <div class ="form-floating mb-3">
                        <input class ="form-control" id="inputIdCliente" type ="text"
                        placeholder="Ingrese el NIT / CC del Cliente" />
                        <label for="inputIdCliente">NIT / CC Cliente</label>
                        </div>
                        <div class ="form-floating mb-3">
                        <input class ="form-control" id="inputNombreCliente" type ="text"
                        placeholder="Ingrese Nombre Cliente" />
                        <label for="inputNombreCliente">Nombre Cliente</label>
                        </div>

               
                       
                        <div class ="form-floating mb-3">
                        <input class ="form-control" id="inputValor" type ="text"
                        placeholder="Ingrese el precio de venta" />
                        <label for="inputValor">Valor venta</label>
                        </div>
                        <div class ="form-floating mb-3">
                        <div class ="form-control" id="inputFormaP" type ="select"
                        placeholder="Ingrese la forma de pago" />
                        <option value="value1">Efectivo</option>
                        <option value="value2">Tarjeta Credito</option>
                        <option value="value3">On line</option>
                        </div>
                        <label for="inputFormaP">Forma de Pago</label>
                        </div>
                        <div class ="mt-4 mb-0">
                        <div class ="d-grid"><a class ="btn btn-primary btn-block"
                        href="Ventas.html">Actualizar Venta</a></div>
                        </div>
                        </form>
                        </div>
                        <div class ="card-footer text-center py-3">
                        <div class ="small"><a href="Ventas.html">Regresar a la página de inicio</a>
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
    </div >
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
        crossorigin="anonymous"></script>
    <script src="js/scripts.js"></script>




    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
        crossorigin="anonymous"></script>
    <script src="js/scripts.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/simple-datatables@latest" crossorigin="anonymous"></script>
    <script src="js/datatables-simple-demo.js"></script>
            </div >
        </div >

    )
}


export default Actualizarventa
