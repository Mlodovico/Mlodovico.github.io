import React from "react";

import "./App.css";

import { Player } from "@lottiefiles/react-lottie-player";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineFileText,
} from "react-icons/ai";

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

            <h4 className="title">Redes</h4>

            <ul className="list">
              <li>
                <a href="https://github.com/Mlodovico">
                  <AiFillGithub />
                  Github
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/murilo-lodovico-509398167/">
                  <AiFillLinkedin />
                  Linkedin
                </a>
              </li>
              <li>
                <a href="">
                  <AiOutlineFileText />
                  Currculo
                </a>
              </li>
            </ul>

            <div className="separator" />

            <h4 className="title">Conhecimentos</h4>
            <div className="knowledge">
              <p>React</p>
              <p>React-Native</p>
              <p>Node</p>
              <p>Javascript</p>
              <p>Typescript</p>
              <p>Angular</p>
              <p>Svelte</p>
              <p>Nextjs</p>
              <p>CSS</p>
              <p>Boostrap</p>
              <p>Tailwind</p>
              <p>Java</p>
              <p>Python</p>
              <p>MongoDB</p>
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
            <h3 className="title-body">Portifolio</h3>
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
