import React, { useState } from 'react'
import { useHistory } from 'react-router'
import './ventas.css'
import './styles.css'
import './scripts.js'


const Ventas = () => {


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
                                            <a class="nav-link" href="productos.html">Productos</a>
                                            <a class="nav-link" href="Admin_roles.html">Usuarios</a>
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
                                Administrador
                            </div>
                        </nav>
                    </div>
                    <div id="layoutSidenav_content">
                        <div>
                            <div class="container-fluid px-4">
                                <h1 class="mt-4">Ventas</h1>
                                <ol class="breadcrumb mb-4">
                                    <li class="breadcrumb-item"><a href="#">Administrador</a></li>
                                    <li class="breadcrumb-item active">Listado de Ventas</li>
                                </ol>

                            </div>
                            <div class="card mb-4">
                                <div class="card-header">
                                    <i class="fas fa-table me-1"></i>
                                    <b>Ventas</b>
                                </div>
                                <div class="card-body">
                                    <table id="datatablesSimple">
                                        <thead>
                                            <tr>
                                                <th># Factura</th>
                                                <th>Fecha</th>
                                                <th>NIT / CC Cliente</th>
                                                <th>Nombre Cliente</th>
                                                <th>Valor</th>
                                                <th>Forma de pago</th>


                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <th># Factura</th>
                                                <th>Fecha</th>
                                                <th>NIT / CC Cliente</th>
                                                <th>Nombre Cliente</th>
                                                <th>Valor</th>
                                                <th>Forma de pago</th>
                                            </tr>
                                        </tfoot>
                                        <tbody>
                                            <tr>
                                                <td>0001</td>
                                                <td>2011/04/25</td>
                                                <td>901124445</td>
                                                <td> Radamel Falcao</td>
                                                <td>$320,800</td>
                                                <td>Efectivo</td>

                                            </tr>
                                            <tr>
                                                <td>0002</td>
                                                <td>2011/07/25</td>
                                                <td>900457654</td>
                                                <td>Leo Messi</td>
                                                <td>$170,750</td>
                                                <td>Tarjeta</td>
                                            </tr>
                                            <tr>
                                                <td>0003</td>
                                                <td>2009/01/12</td>
                                                <td>79554874</td>
                                                <td>Kyliam Mbappe</td>
                                                <td>$86,000</td>
                                                <td>On line</td>


                                            </tr>

                                        </tbody>
                                    </table>
                                    <div class="container">
                                        <div align="right" class="btn-modify">

                                            <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false"
                                                autocomplete="off" onclick="location.href='searchVenta.html'">
                                                Buscar
                                            </button> <button type="button" class="btn btn-primary" data-toggle="button"
                                                aria-pressed="false" autocomplete="off"
                                                onclick="location.href='searchVenta.html'">
                                                Editar Venta
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <footer class="py-4 bg-light mt-auto">
                                <div class="container-fluid px-4">

                                    <div class="d-flex align-items-right justify-content-between small">
                                        <div class="text-muted">Copyright &copy; </div>
                                    </div>
                                    <div>
                                        <a href="#">Politicas de Privacidad</a>
                                        &middot;
                                        <a href="#">Terminos &amp; Condiciones</a>
                                    </div>
                                </div>
                            </footer>

                        </div>

                    </div>

                </div>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
                    crossorigin="anonymous"></script>
                <script src="./scripts.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/simple-datatables@latest" crossorigin="anonymous"></script>
                <script src="js/datatables-simple-demo.js"></script>
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
                    integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
                    crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
                    integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
                    crossorigin="anonymous"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
                    integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
                    crossorigin="anonymous"></script>
            </div>
        </div>


    )
}


export default Ventas
