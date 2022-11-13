import React from "react";
import inicio from "../assets/inicio.png";
import letras from "../assets/instaletras.jpg";
import play from "../assets/play.jpg";
import mStore from "../assets/mstore.jpg";

export const Login = () => {
  return (
    <main className="container">
      <div className="row">
        <div>
          <img src={inicio} alt="" width={450} />
        </div>
        <div className="colum">
          <div className="container__form">
            <img src={letras} alt="" width={200} />
            <form action="" className="form">
              <input
                type="text"
                placeholder="Teléfono, usuario o correo electrónico"
              />
              <input type="text" placeholder="Contraseña" />
              <button className="button primary ">Iniciar sesión</button>
              <hr />
            </form>
            <div className="facebook">
              <box-icon
                type="logo"
                name="facebook-square"
                color="#2c2092"
                size="1rem"
              ></box-icon>
              &nbsp;
              <a href="#">Iniciar sesión con Facebook</a>
            </div>
            <a href="##">¿Olvidaste tu contraseña?</a>
          </div>
          <div className="registro">
            <span>
              ¿No tienes una cuenta?&nbsp;
              <a href="">Regístrate</a>
            </span>
          </div>
          <div className="aplicacion">
            <h5>Descarga la aplicación</h5>
            <div className="botonesApp">
              <button id="playStore">
                <img src={play} alt="" />
              </button>
              <button id="mStore">
                <img src={mStore} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
