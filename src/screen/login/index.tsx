import React from "react";
import { Background } from "./style";
import { LoginContent } from "./components/loginContent/index ";
import  loginImg  from './images/peopples.svg'
import  RegisterImg  from './images/celebration.svg'
import { useNavigate } from 'react-router-dom';



export function LoginPage(){
 


const handleSignUpClick = () => {
    debugger;
    const container = document.querySelector(".container");
    container?.classList.add("sign-up-mode");
  };

  const handleSignInClick = () => {
    const container = document.querySelector(".container");
    container?.classList.remove("sign-up-mode");
  };

  const navigate = useNavigate();

  const goHome = () => {
    navigate('/home');
  };

    return(
        <body>
          <Background className="tudo">
            <div className="container">
              <div className="forms-container">
                <div className="signin-signup">
                  <form action="#" className="sign-in-form">
                    <h2 className="title">Entrar</h2>
                    <div className="input-field">
                      <i className="fas fa-user"></i>
                      <input type="text" placeholder="Username" />
                    </div>
                    <div className="input-field">
                      <i className="fas fa-lock"></i>
                      <input type="password" placeholder="Password" />
                    </div>
                    <input  type="submit" value="Entrar" className="btn solid" onClick={goHome}/>
                  </form>
                  <form action="#" className="sign-up-form">
                    <h2 className="title">Registar</h2>
                    <div className="input-field">
                      <i className="fas fa-user"></i>
                      <input type="text" placeholder="Username" />
                    </div>
                    <div className="input-field">
                      <i className="fas fa-envelope"></i>
                      <input type="email" placeholder="Email" />
                    </div>
                    <div className="input-field">
                      <i className="fas fa-lock"></i>
                      <input type="password" placeholder="Password" />
                    </div>
                    <input type="submit" className="btn" value="Registar" />
                  </form>
                </div>
              </div>
        
              <div className="panels-container">
                <div className="panel left-panel">
                  <div className="content">
                    <h3>Seja bem-vindo</h3>
                    <h3> ao <b>Voluntação</b></h3>
                    <p>
                        Faça login e acesse sua conta
                    </p>
                    <button className="btn transparent" id="sign-up-btn" onClick={handleSignUpClick}>
                      Registrar
                    </button>
                  </div>
                  <img src={loginImg} className="image" alt="" />
                </div>
                <div className="panel right-panel">
                  <div className="content">
                    <h3>Um de nós?</h3>
                    <p>
                    Ao se registrar, você terá acesso a recursos exclusivos, como a busca por oportunidades de 
                    acordo com seu perfil, a possibilidade de acompanhar seu histórico de voluntariado e outas.
                    </p>
                    <button className="btn transparent" id="sign-in-btn" onClick={handleSignInClick}>
                      Entrar
                    </button>
                  </div>
                  <img src={RegisterImg} className="image" alt="" />
                </div>
              </div>
            </div>
        
            <script src="app.js"></script>
          </Background>
          </body>
    );
}

