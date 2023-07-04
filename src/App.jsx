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
            <div className="data-sector">
              <img
                className="profile-image"
                src={ProfileImage}
                alt="Profile_Image"
              />
              <p>Murilo Lodovico</p>
              <p>25 anos</p>
              <p>Campinas - SP</p>
              <p>contatomlodovico@yahoo.com</p>
            </div>
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
              <p>Javascript</p>
              <p>Typescript</p>
              <p>Node</p>
              <p>React</p>
              <p>React-Native</p>
              <p>Angular</p>
              <p>NextJs</p>
              <p>Git</p>
              <p>Docker</p>
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
          <h3 className="title-body">Portifolio</h3>
          <p>
            Olá, seja bem-vindo a uma breve introducão ao meu histórico
            profissional.
          </p>
          <p>
            Nascido em 11/02/1998, comecei a me interessar pelo mundo do
            desenvolvimento de software aos 16 (dezesseis) anos com arduino,
            HTML, JS e CSS no ensino fundamental. Ja dentro da faculdade, que
            iniciei em 2018 pude me aprofundar mais nos estudos e entender mais
            sobre os principais logicas básicas.
          </p>

          <Player src={develop1} className="player" loop autoplay />

          <p>
            Me familiarizei mais com JS e seus frameworks, mas não me afixionei
            só por isso, pude me desenvolver em outras linguagens como Java e
            Python. Trabalho com desenvolvimento de software a aproximadamente 4
            (quatro) anos, me considero um desenvolvedor Fullstack Pleno.
            Formado em Ciência da Computaçāo pela Universade Paulista (UNIP) em
            2022.
          </p>

          <div className="certificacion-container">
            <div className="card">
              <p>Projetos</p>
            </div>
          </div>
          <div className="certificacion-container">
            <div className="card">
              <p>Formaçōes e certificados</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
