import React, { useState } from 'react'
import { useHistory } from 'react-router'
import './perfil.css'
import './styles.css'
import './scripts.js'
import url from '../constantes/urlBack'


const Perfil = () => {

    const history = useHistory();
    const [formValues, setFormValues] = useState({})
    const [formTd, setFormId] = useState(0);

    const changeField = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value        
         
        })
    }

     const submit = (e) => {
        e.preventDefault();
        console.log('formValues', formValues);

        fetch(`${url}/users/${formTd}`, {
            method: 'PATCH', // or 'PUT'
            body: JSON.stringify(formValues), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
            
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
            window.alert("El usuario se actualizo con exito");
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

                                        <div className="card shadow-lg border-0 rounded-lg mt-4">
                                            <div className="card-header"><h3 className="text-center font-weight-light my-4">Actualizacion de Usuarios</h3></div>
                                            <div className="card-body">
                                                <form>

                                                    <div className="form-floating mb-3">                                                      
                                                        <input onChange={(e) => {setFormId(e.target.value);}} name="id" type="text" class="form-control" id="id" placeholder="Ingrese el ID del usuario" />
                                                        <label for="id">ID</label>                                                       
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <label for="rol">Rol</label>
                                                        <select className="text-center form-control" onChange={changeField} value={formValues.rol} name="rol" id="id" type="text" placeholder="Ingrese su rol">
                                                            <option disabled="disabled" selected="selected"></option>
                                                            <option>Administrador</option>
                                                            <option>Vendedor</option>
                                                            <option>Usuario</option>
                                                            <option>Proveedor</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <label for="estado">Estado</label>
                                                        <select className="text-center form-control" onChange={changeField} value={formValues.estado} name="estado" id="estado" type="text" placeholder="Estado">
                                                            <option disabled="disabled" selected="selected"></option>
                                                            <option>Activo</option>
                                                            <option>Inactivo</option>
                                                        </select>
                                                    </div>
                                                    <div className="mt-4 mb-0">                                        
                                                        <button type="submit" onClick={submit} class="btn btn-primary">Actualizar Usuario</button>
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
                <script src="/TICDevSolutions/Sprints/2/Main/sweetalert.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
                <script src="./scripts.js"></script>
            </div>
        </div >

    )
}


export default Perfil
