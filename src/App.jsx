import React from "react";

import "./App.css";
import { Player } from "@lottiefiles/react-lottie-player";
import develop1 from "./assets/develop_1.json";
import ProfileImage from "./assets/profile_image.jpeg";

function App() {
  return (
    <div className="App">
      <div className="category-sector">
        <p>Perfil</p>
        <img className="profile-image" src={ProfileImage} alt="Profile_Image" />
        <div className="separator" />
        <ul className="list">
          <li>Github</li>
          <li>Linkedin</li>
          <li>Curriculo</li>
        </ul>
      </div>
      <div className="mobile-sector-only">
        <img className="profile-image" src={ProfileImage} alt="Profile-Image" />
        <div className="profile-text">
          <p>Murilo Lodovico</p>
          <p>FullStack Developer</p>
        </div>
      </div>

      <div className="body-sector">
        <div>
          <h3>Olá, seja bem vindo ao meu portifólio!!</h3>
          <p>
            Meu nome é Murilo Lodovico, trabalho com desenvolvimento de software
            a aproximadamente 4 (quatro) anos. Formado em Ciência da Computaçāo
            pela Universade Paulista (UNIP) em 2022.
          </p>

          <Player src={develop1} className="player" loop autoplay />

          <div className="certificacion-container">
            <div className="card">
              <p>Formação academica</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
