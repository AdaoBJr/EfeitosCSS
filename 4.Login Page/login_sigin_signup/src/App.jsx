import React, { useState } from 'react';
import { BiLockAlt, BiUser } from 'react-icons/bi';
import { FaFacebookF, FaTwitter, FaGoogle } from 'react-icons/fa';
import imgLogin from './image/img-login.svg';

function App() {
  const [signUp, setSignUp] = useState(false);
  return (
    <div className="login">
      <div className="loginContent">
        <div className="loginImg">
          <img src={imgLogin} alt="img-login" />
        </div>

        <div className="loginForms">
          <form className={(signUp) ? 'loginRegister none' : 'loginRegister'}>
            <h1 className="loginTitle">Sign In</h1>

            <div className="loginBox">
              <BiUser className="loginIcon" />
              <input type="text" placeholder="Username" className="loginInput" />
            </div>

            <div className="loginBox">
              <BiLockAlt className="loginIcon" />
              <input type="password" placeholder="Password" className="loginInput" />
            </div>

            <a href className="loginForgot">Esqueceu sua senha?</a>

            <button
              type="button"
              className="loginButton"
            >
              Entrar
            </button>

            <div>
              <span className="loginAccount">Não tem uma conta ?</span>
              <button
                type="button"
                onClick={() => setSignUp(!signUp)}
                className="loginSignin"
              >
                Registre-se
              </button>
            </div>
          </form>

          <form className={(signUp) ? 'loginCreate' : 'loginCreate none'}>
            <h1 className="loginTitle">Crie sua conta</h1>

            <div className="loginBox">
              <BiUser className="loginIcon" />
              <input type="text" placeholder="Username" className="loginInput" />
            </div>

            <div className="loginBox">
              <BiLockAlt className="loginIcon" />
              <input type="text" placeholder="Email" className="loginInput" />
            </div>

            <div className="loginBox">
              <BiLockAlt className="loginIcon" />
              <input type="password" placeholder="Password" className="loginInput" />
            </div>

            <button
              type="button"
              className="loginButton"
              onClick={() => setSignUp(!signUp)}
            >
              Criar
            </button>

            <div>
              <span className="loginAccount">Já tem uma conta ?</span>
              <button
                type="button"
                onClick={() => setSignUp(!signUp)}
                className="loginSignup"
              >
                Acessar conta
              </button>
            </div>

            <div className="loginSocial">
              <FaFacebookF className="loginSocial-icon" />
              <FaTwitter className="loginSocial-icon" />
              <FaGoogle className="loginSocial-icon" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
