import React, { useState } from 'react'
import { useHistory } from 'react-router'
import './login.css'
import './styles.css'


const Login = () => {

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

        history.push('/home')
    }

    return (
        <div className="loginComponent">
            <div className="loginBox">
                <body className="bg-primary">
                    <div id="layoutAuthentication">
                        <div id="layoutAuthentication_content">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-5">
                                        <div className="card shadow-lg border-0 rounded-lg mt-5">
                                            <div className="card-header">
                                                <h3 class="text-center font-weight-light my-4">Acceso</h3>
                                            </div>
                                            <div className="card-body">
                                                <form>
                                                    <div class="form-floating mb-3">
                                                        <input onChange={changeField} value={formValues.username} name="username" id="inputEmail" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="usuario" />
                                                        <label for="inputEmail">Correo Electronico</label>
                                                    </div>
                                                    <div class="form-floating mb-3">
                                                        <input onChange={changeField} value={formValues.password} name="password" id="inputPassword" type="password" class="form-control" id="exampleInputPassword1" placeholder="contraseña" />
                                                        <label for="inputPassword">Contraseña</label>
                                                    </div>
                                                    <div class="form-check mb-3">
                                                        <input class="form-check-input" id="inputRememberPassword" type="checkbox" value="" />
                                                        <label class="form-check-label" for="inputRememberPassword">Recordarme</label>
                                                    </div>

                                                    <div>
                                                        <a href="index.html" class="btn-google btn-user">
                                                            <i className="fab fa-google fa-fw"></i> Ingresar con Google
                                                        </a>

                                                    </div>

                                                    <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                        <a class="small" href="password.html">¿Olvidaste tu contraseña?</a>
                                                        <button type="submit" onClick={submit} class="btn btn-primary">Acceder</button>
                                                    </div>
                                                </form>
                                            </div>
                                            <div class="card-footer text-center py-3">
                                                <div class="small"><a href="register.html">¿Necesitas una cuenta? ¡Registrate!</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="layoutAuthentication_footer">
                            <footer class="py-4 bg-light mt-auto">
                                <div class="container-fluid px-4">
                                    <div class="d-flex align-items-center justify-content-between small">
                                        <div class="text-muted">Copyright &copy; Your Website 2021</div>
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
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
                    <script src="./scripts.js"></script>
                </body>
            </div>
        </div >

    )
}


export default Login
