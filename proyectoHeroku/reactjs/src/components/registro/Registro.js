import React, { useState } from 'react'
import { useHistory } from 'react-router'
import './registro.css'
import './styles.css'
import url from '../constantes/urlBack'


const Registro = () => {

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

        fetch(`${url}/users`, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(formValues), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }

        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
        window.alert("Registro exitoso");
    }

    return (
        <div className="registroComponent">
            <div className="bg-primary">
                <div id="layoutAuthentication">
                    <div id="layoutAuthentication_content">
                        <main>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-7">
                                        <div className="card shadow-lg border-0 rounded-lg mt-4">
                                            <div className="card-header"><h3 className="text-center font-weight-light my-4">Crear una nueva cuenta</h3></div>
                                            <div className="card-body">
                                                <form>
                                                    <div className="form-floating mb-3">
                                                        <input onChange={changeField} value={formValues.nombre} name="nombre" id="nombre" class="form-control" type="text" placeholder="Ingrese su nombre" />
                                                        <label for="nombre">Nombre</label>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <input onChange={changeField} value={formValues.email} name="email" id="email" class="form-control" type="email" placeholder="nombre@ejemplo.com" />
                                                        <label for="email">Correo electrónico</label>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <select className=" form-control" onChange={changeField} value={formValues.rol} name="rol" id="rol" type="text" placeholder="Ingrese su rol">
                                                            <option disabled="disabled" selected="selected"></option>
                                                            <option>Administrador</option>
                                                            <option>Vendedor</option>
                                                            <option>Usuario</option>
                                                            <option>Proveedor</option>
                                                        </select>
                                                        <label for="rol">Rol</label>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <select className=" form-control" onChange={changeField} value={formValues.estado} name="estado" id="estado" type="text" placeholder="Estado">
                                                            <option disabled="disabled" selected="selected"></option>
                                                            <option>Activo</option>
                                                            <option>Inactivo</option>
                                                        </select>
                                                        <label for="estado">Estado</label>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <div className="col-md-6">
                                                            <div className="form-floating mb-3 mb-md-0">
                                                                <input onChange={changeField} value={formValues.password} name="password" id="password" class="form-control" type="password" placeholder="Cree una clave" />
                                                                <label for="password">Contraseña</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-floating mb-3 mb-md-0">
                                                                <input className="form-control" id="inputPasswordConfirm" type="password" placeholder="Confirme clave" />
                                                                <label for="inputPasswordConfirm">Confirmar contraseña</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mt-4 mb-0">
                                                        <button type="submit" onClick={submit} class="btn btn-primary">Crear nueva cuenta</button>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="card-footer text-center py-3">
                                                <div className="small"><a href="login.html">¿Ya tiene una cuenta? Ingrese aquí</a></div>
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
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
                <script src="js/scripts.js"></script>
            </div>
        </div >

    )
}


export default Registro
