import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import './productos.css'
import './styles.css'
import './scripts.js'
import url from '../constantes/urlBack'

const Productos = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        leer();
    }, [])

    const leer = () => {

        fetch(`${url}/products`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setProducts(data);
            }
            ).catch((error) => {
                console.log(error);
            });

    }

    return (
        <div className="productosComponent">
            <div className="sb-nav-fixed">
                <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">

                    <a className="navbar-brand ps-3" href="index.html">TICDev's Solutions</a>

                    <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i
                        className="fas fa-bars"></i></button>

                    <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                        <div className="input-group">
                            <input className="form-control" type="text" placeholder="Buscar..." aria-label="Buscar..."
                                aria-describedby="btnNavbarSearch" />
                            <button className="btn btn-primary" id="btnNavbarSearch" type="button"><i
                                className="fas fa-search"></i></button>
                        </div>
                    </form>

                    <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#!">Settings</a></li>
                                <li><a className="dropdown-item" href="#!">Activity Log</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a className="dropdown-item" href="#!">Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div id="layoutSidenav">
                    <div id="layoutSidenav_nav">
                        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                            <div className="sb-sidenav-menu">
                                <div className="nav">

                                    <div className="sb-sidenav-menu-heading">Sistema de Ventas </div>

                                    <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages"
                                        aria-expanded="false" aria-controls="collapsePages">
                                        <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                                        Administrador
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </a>
                                    <div className="collapse" id="collapsePages" aria-labelledby="headingTwo"
                                        data-bs-parent="#sidenavAccordion">
                                        <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                            <a className="nav-link" href="#">Ventas</a>
                                            <a className="nav-link" href="productos.html">Productos</a>
                                            <a className="nav-link" href="Admin_roles.html">Usuarios</a>
                                            <a className="nav-link" href="#">Cambiar Password</a>
                                        </nav>
                                    </div>

                                    <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages"
                                        aria-expanded="false" aria-controls="collapsePages">
                                        <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                                        Vendedor
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </a>
                                    <div className="collapse" id="collapsePages" aria-labelledby="headingTwo"
                                        data-bs-parent="#sidenavAccordion">
                                        <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                            <a className="nav-link" href="#">Ventas</a>
                                            <a className="nav-link" href="#">Cambiar Password</a>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div className="sb-sidenav-footer">
                                <div className="small">Ingresar como:</div>
                                Administrador
                            </div>
                        </nav>
                    </div>
                    <div id="layoutSidenav_content">

                        <div className="container-fluid px-4">
                            <h1 className="mt-4">Productos</h1>
                            <ol className="breadcrumb mb-4">
                                <li className="breadcrumb-item"><a href="#">Administrador</a></li>
                                <li className="breadcrumb-item active">Listado de Productos</li>
                            </ol>

                        </div>
                        <div className="card mb-4">
                            <div className="card-header">
                                <i className="fas fa-table me-1"></i>
                                <b>Productos</b>
                            </div>
                            <div className="card-body">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Nombre</th>
                                            <th scope="col">Precio de compra</th>
                                            <th scope="col">Precio de venta</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {(products !== undefined && products.length > 0) ?
                                            products.map(item => {
                                                return (<tr>

                                                    <th scope="row"> {item.id}</th>
                                                    <th> {item.nombre}</th>
                                                    <th> {item.precioAd}</th>
                                                    <th> {item.precioV}</th>

                                                </tr>);
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

                                    </tbody>
                                </table>
                                <div className="container">
                                    <div className="btn-modify" align="right">

                                        <button type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false"
                                            autocomplete="off" onclick="location.href='searchProduct.html'">
                                            Buscar Producto
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <footer className="py-4 bg-light mt-auto">
                            <div className="container-fluid px-4">

                                <div className="d-flex align-items-right justify-content-between small">
                                    <div className="text-muted">Copyright &copy; </div>
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

        </div >

    )
}


export default Productos
