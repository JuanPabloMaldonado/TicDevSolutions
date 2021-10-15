import React, { useState } from 'react'
import { useHistory } from 'react-router'
import './roles.css'
import './styles.css'
import './scripts.js'


const Roles = () => {


    return (
        <div className="rolesComponent">
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
                                User
                            </div>
                        </nav>
                    </div>
                    <div id="layoutSidenav_content">
                        <div>
                            <div class="container-fluid px-4">
                                <h1 class="mt-4">Informacion de Usuarios</h1>
                                <ol class="breadcrumb mb-4">
                                    <li class="breadcrumb-item"><a href="#">Administrador</a></li>
                                    <li class="breadcrumb-item active">Informacion de Usuarios</li>
                                </ol>

                            </div>
                            <div class="card mb-4">
                                <div class="card-header">
                                    <i class="fas fa-table me-1"></i>
                                    <b>USUARIOS</b>
                                </div>
                                <div class="card-body">
                                    <table id="datatablesSimple">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Nombre</th>
                                                <th>Rol</th>
                                                <th>Estado</th>
                                                <th>Edad</th>
                                                <th>Fecha de Registro</th>
                                                <th>Ventas realizadas/Compras realizadas</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <th>ID</th>
                                                <th>Nombre</th>
                                                <th>Rol</th>
                                                <th>Estado</th>
                                                <th>Edad</th>
                                                <th>Fecha de Registro</th>
                                                <th>Ventas realizadas/Compras realizadas</th>
                                            </tr>
                                        </tfoot>
                                        <tbody>
                                            <tr>
                                                <td>0001</td>
                                                <td>Tiger Nixon</td>
                                                <td>Vendedor</td>
                                                <td>Activo</td>
                                                <td>61</td>
                                                <td>2011/04/25</td>
                                                <td>$320,800</td>
                                            </tr>
                                            <tr>
                                                <td>0002</td>
                                                <td>Garrett Winters</td>
                                                <td>Usuario</td>
                                                <td>Activo</td>
                                                <td>63</td>
                                                <td>2011/07/25</td>
                                                <td>$170,750</td>
                                            </tr>
                                            <tr>
                                                <td>0003</td>
                                                <td>Ashton Cox</td>
                                                <td>Usuario</td>
                                                <td>Activo</td>
                                                <td>66</td>
                                                <td>2009/01/12</td>
                                                <td>$86,000</td>
                                            </tr>
                                            <tr>
                                                <td>0004</td>
                                                <td>Cedric Kelly</td>
                                                <td>Vendedor</td>
                                                <td>Activo</td>
                                                <td>22</td>
                                                <td>2012/03/29</td>
                                                <td>$433,060</td>
                                            </tr>
                                            <tr>
                                                <td>0005</td>
                                                <td>Airi Satou</td>
                                                <td>Usuario</td>
                                                <td>Activo</td>
                                                <td>33</td>
                                                <td>2008/11/28</td>
                                                <td>$162,700</td>
                                            </tr>
                                            <tr>
                                                <td>0006</td>
                                                <td>Brielle Williamson</td>
                                                <td>Usuario</td>
                                                <td>Activo</td>
                                                <td>61</td>
                                                <td>2012/12/02</td>
                                                <td>$372,000</td>
                                            </tr>
                                            <tr>
                                                <td>0007</td>
                                                <td>Herrod Chandler</td>
                                                <td>Vendedor</td>
                                                <td>Inactivo</td>
                                                <td>59</td>
                                                <td>2012/08/06</td>
                                                <td>$137,500</td>
                                            </tr>
                                            <tr>
                                                <td>0008</td>
                                                <td>Rhona Davidson</td>
                                                <td>Usuario</td>
                                                <td>Activo</td>
                                                <td>55</td>
                                                <td>2010/10/14</td>
                                                <td>$327,900</td>
                                            </tr>
                                            <tr>
                                                <td>0009</td>
                                                <td>Colleen Hurst</td>
                                                <td>Administrador</td>
                                                <td>Activo</td>
                                                <td>39</td>
                                                <td>2009/09/15</td>
                                                <td>N/A</td>
                                            </tr>
                                            <tr>
                                                <td>0010</td>
                                                <td>Sonya Frost</td>
                                                <td>Vendedor</td>
                                                <td>Inactivo</td>
                                                <td>23</td>
                                                <td>2008/12/13</td>
                                                <td>$103,600</td>
                                            </tr>
                                            <tr>
                                                <td>0011</td>
                                                <td>Jena Gaines</td>
                                                <td>Vendedor</td>
                                                <td>Inactivo</td>
                                                <td>30</td>
                                                <td>2008/12/19</td>
                                                <td>$90,560</td>
                                            </tr>
                                            <tr>
                                                <td>0012</td>
                                                <td>Quinn Flynn</td>
                                                <td>Usuario</td>
                                                <td>Activo</td>
                                                <td>22</td>
                                                <td>2013/03/03</td>
                                                <td>$342,000</td>
                                            </tr>
                                            <tr>
                                                <td>0013</td>
                                                <td>Charde Marshall</td>
                                                <td>Usuario</td>
                                                <td>Activo</td>
                                                <td>36</td>
                                                <td>2008/10/16</td>
                                                <td>$470,600</td>
                                            </tr>
                                            <tr>
                                                <td>0014</td>
                                                <td>Haley Kennedy</td>
                                                <td>Administrador</td>
                                                <td>Activo</td>
                                                <td>43</td>
                                                <td>2012/12/18</td>
                                                <td>N/A</td>
                                            </tr>
                                            <tr>
                                                <td>0015</td>
                                                <td>Tatyana Fitzpatrick</td>
                                                <td>Usuario</td>
                                                <td>Inactivo</td>
                                                <td>19</td>
                                                <td>2010/03/17</td>
                                                <td>$385,750</td>
                                            </tr>
                                            <tr>
                                                <td>0016</td>
                                                <td>Michael Silva</td>
                                                <td>Vendedor</td>
                                                <td>Activo</td>
                                                <td>66</td>
                                                <td>2012/11/27</td>
                                                <td>$198,500</td>
                                            </tr>
                                            <tr>
                                                <td>0017</td>
                                                <td>Paul Byrd</td>
                                                <td>Usuario</td>
                                                <td>Inactivo</td>
                                                <td>64</td>
                                                <td>2010/06/09</td>
                                                <td>$725,000</td>
                                            </tr>
                                            <tr>
                                                <td>0018</td>
                                                <td>Gloria Little</td>
                                                <td>Usuario</td>
                                                <td>Inactivo</td>
                                                <td>59</td>
                                                <td>2009/04/10</td>
                                                <td>$237,500</td>
                                            </tr>
                                            <tr>
                                                <td>0019</td>
                                                <td>Bradley Greer</td>
                                                <td>Vendedor</td>
                                                <td>Activo</td>
                                                <td>41</td>
                                                <td>2012/10/13</td>
                                                <td>$132,000</td>
                                            </tr>
                                            <tr>
                                                <td>0020</td>
                                                <td>Dai Rios</td>
                                                <td>Usuario</td>
                                                <td>Activo</td>
                                                <td>35</td>
                                                <td>2012/09/26</td>
                                                <td>$217,500</td>
                                            </tr>
                                            <tr>
                                                <td>0021</td>
                                                <td>Jenette Caldwell</td>
                                                <td>Usuario</td>
                                                <td>Inactivo</td>
                                                <td>30</td>
                                                <td>2011/09/03</td>
                                                <td>$345,000</td>
                                            </tr>
                                            <tr>
                                                <td>0022</td>
                                                <td>Yuri Berry</td>
                                                <td>Vendedor</td>
                                                <td>Activo</td>
                                                <td>40</td>
                                                <td>2009/06/25</td>
                                                <td>$675,000</td>
                                            </tr>
                                            <tr>
                                                <td>0023</td>
                                                <td>Caesar Vance</td>
                                                <td>Vendedor</td>
                                                <td>Activo</td>
                                                <td>21</td>
                                                <td>2011/12/12</td>
                                                <td>$106,450</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                    <div class="container" >
                                        <div class="btn-modify" align="right">

                                            <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off" onclick="location.href='editprofile.html'">
                                                Editar Usuario
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <footer class="py-4 bg-light mt-auto">
                                <div class="container-fluid px-4">
                                    
                                    <div class ="d-flex align-items-right justify-content-between small">
                                    <div class ="text-muted">Copyright &copy; </div>
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
            </div>

        </div >

    )
}


export default Roles