import React, { useState } from 'react'
import { useHistory } from 'react-router'
import './AuthGoogle.css'
import './styles.css'
import GoogleLogin from 'react-google-login';



const AuthGoogle = () => {




  const responseGoogle = (response) => {
    console.log(response);

  }

    return (
      <div className="authGoogleComponent">
        <div className="loginBox">
          <br /><br />

          <GoogleLogin
            clientId="191945881559-gcets8fjg3hhf3fu4g75n5tnscmqfo3e.apps.googleusercontent.com"
            buttonText="Ingresar"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />

        </div>
      </div>
    )

  
}


export default AuthGoogle
