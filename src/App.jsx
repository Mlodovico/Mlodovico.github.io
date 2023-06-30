import React from "react";

import "./App.css";

import { Player } from "@lottiefiles/react-lottie-player";

import develop1 from "./assets/develop_1.json";
import ProfileImage from "./assets/profile_image.jpeg";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="category-sector">
          <div>
            <img
              className="profile-image"
              src={ProfileImage}
              alt="Profile_Image"
            />

            <div className="separator" />

            <ul className="list">
              <li>Github</li>
              <li>Linkedin</li>
              <li>Curriculo</li>
            </ul>

            <div className="separator" />

            <div className="knowledge">
              <p>React</p>
              <p>React-Native</p>
              <p>Node</p>
              <p>Javascript</p>
              <p>Typescript</p>
              <p>Angular</p>
              <p>Svelte</p>
            </div>
          </div>
        </div>
        <div className="mobile-sector-only">
          <img
            className="profile-image"
            src={ProfileImage}
            alt="Profile-Image"
          />
          <div className="profile-text">
            <h4>Murilo Lodovico</h4>
            <p>Desenvolvedor Full-Stack</p>
          </div>
        </div>

        <div className="body-sector">
          <div>
            <p className="title-body">Portifolio</p>
            <p>
              Olá, seja bem-vindo a uma breve introducão da minha vida
              profissional.
            </p>

            <Player src={develop1} className="player" loop autoplay />

            <p>
              Trabalho com desenvolvimento de software a aproximadamente 4
              (quatro) anos. Formado em Ciência da Computaçāo pela Universade
              Paulista (UNIP) em 2022.
            </p>

            <div className="certificacion-container">
              <div className="card">
                <p>Formação academica</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
