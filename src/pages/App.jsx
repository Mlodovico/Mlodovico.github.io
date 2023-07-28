import React from "react";

import "./App.css";

import { Player } from "@lottiefiles/react-lottie-player";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineFileText,
} from "react-icons/ai";

import develop1 from "../assets/develop_1.json";
import ProfileImage from "../assets/back-profile-image.jpeg";
import ProfileFrontImage from "../assets/front-profile-image.jpeg";

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
              <div>
                <p>Murilo Lodovico</p>
                <p>Desenvolvedor Fullstack</p>
                <p>25 anos</p>
                <p>Campinas - SP/Brasil</p>
              </div>
            </div>

            <span className="separator" />

            <h4 className="title">Redes</h4>
            <div className="list">
              <a href="https://github.com/Mlodovico">
                <AiFillGithub
                  style={{ marginRight: 5, verticalAlign: "middle" }}
                />
                Github
              </a>
              <a href="https://www.linkedin.com/in/murilo-lodovico-509398167/">
                <AiFillLinkedin
                  style={{ marginRight: 5, verticalAlign: "middle" }}
                />
                Linkedin
              </a>
              <a href="">
                <AiOutlineFileText
                  style={{ marginRight: 5, verticalAlign: "middle" }}
                />
                Curriculo
              </a>
            </div>

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
            <div>
              <a className="github-link" href="https://github.com/Mlodovico">
                <span>
                  <AiFillGithub />
                  Github
                </span>
              </a>
              <a className="linkedin-link" href="https://github.com/Mlodovico">
                <span>
                  <AiFillLinkedin />
                  Linkedin
                </span>
              </a>
              <a
                className="instagram-link"
                href="https://instagram.com/mlodovico?igshid=OGQ5ZDc2ODk2ZA=="
              >
                <AiFillGithub />
                Instagram
              </a>
            </div>
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
          <div className="profile-front-image-view">
            <img
              className="profile-image"
              src={ProfileFrontImage}
              alt="Profile_Image"
            />
          </div>

          <div className="certificacion-container">
            <p>Projetos</p>
            <div className="card">
              <div className="card-box">
                <p>Go barber</p>
              </div>
              <div className="card-box">
                <p>Go-barber</p>
              </div>
              <div className="card-box">
                <p>Go-barber</p>
              </div>
            </div>
          </div>
          <div className="certificacion-container">
            <p>Formaçōes e certificados</p>
            <div className="card">
              <div className="card-box">
                <p>Certificado</p>
              </div>
              <div className="card-box">
                <p>VSCode Produtividade Absoluta</p>
              </div>
              <div className="card-box">
                <p>IntelliJ IDEA Tricks to Boost Productivity for Java Devs</p>
              </div>
              <div className="card-box">
                <p>Java Spring Tutorial Masterclass</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
