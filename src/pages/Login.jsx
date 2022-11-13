import React from 'react';
import inicio from '../assets/inicio.png';

export const Login = () => {
  return (
    <main className='container'>
      <div className='row'>
        <div >
          <img src={inicio} alt="" width={400}/>
        </div>
        <div className='container__form colum '>
          <h1>INSTAGRAM</h1>
            <form action="" className='form'>
              <input type="text" placeholder='Teléfono, usuario o correo electrónico'/>
              <input type="text" placeholder='Contraseña'/>
              <button className='button primary '>Iniciar sesión</button>
            </form>
            <hr />
            <a href="">Iniciar sesión con Facebook</a>
            <a href="">¿Olvidaste tu contraseña?</a>
        </div>
      </div>
    </main>
  )
}
