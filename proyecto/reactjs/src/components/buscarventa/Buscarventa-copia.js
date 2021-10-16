import React, { useState } from 'react'
import { useHistory } from 'react-router'
import './buscarventa.css'
import './styles.css'
import './scripts.js'


const Buscarventa = () => {


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
                                                        <input className="form-control" id="inputID" type="text" placeholder="0000" />
                                                        <label for="inputID"># Factura</label>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <input className="form-control" id="inputDescripcion" type="text"
                                                            placeholder="Descripción" />
                                                        <label for="inputDescripcion">NIT / CC Cliente </label>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <input className="form-control" id="inputDescripcion" type="text"
                                                            placeholder="Descripción" />
                                                        <label for="inputDescripcion">Nombre Cliente </label>
                                                    </div>

                                                    <div>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                        <a className="btn btn-primary" href="updateVenta.html">Buscar</a>
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
