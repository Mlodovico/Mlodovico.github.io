import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineFileText,
  AiOutlineInstagram,
} from "react-icons/ai";

import "./styles.css";

import develop1 from "../../assets/develop_1.json";
import ProfileImage from "../../assets/back-profile-image.jpeg";
import ProfileFrontImage from "../../assets/front-profile-image.jpeg";
import degree from "../../assets/degree.pdf";
import webCourseJavascript from "../../assets/webcourse-javascript.jpg";
import javaSpringDegree from "../../assets/java-spring-degree.pdf";
import swiftDegree from "../../assets/swift-degree.pdf";
import CurriculumPdf from "../../assets/curriculum.pdf";
import { Card } from "../../components/Card";

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

            <div className="separator" />

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
              <a href={CurriculumPdf}>
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
              <p>VueJs</p>
              <p>Java SpringBoot</p>
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
                  <AiFillGithub /> Github
                </span>
              </a>
              <a className="linkedin-link" href="https://github.com/Mlodovico">
                <span>
                  <AiFillLinkedin /> Linkedin
                </span>
              </a>
              <a
                className="instagram-link"
                href="https://instagram.com/mlodovico?igshid=OGQ5ZDc2ODk2ZA=="
              >
                <AiOutlineInstagram /> Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="body-sector">
          <h3 className="title-body">Portfolio</h3>
          <p>
            Olá, seja bem-vindo a uma breve introducão ao meu histórico
            profissional.
          </p>
          <p>
            Iniciei minha jornada na área de programação aos 16 anos, explorando
            Arduino, C e HTML. Posteriormente, em 2018, ingressei na faculdade
            de Ciência da Computação, concluindo-a em 2021. Durante esse
            período, tive a oportunidade de trabalhar e estudar as linguagens de
            programação mais utilizadas, bem como os frameworks, incluindo Java,
            Python, React, Angular, Node, Swift, entre outros. Essa experiência
            me permitiu adquirir conhecimento em diversas áreas, compreendendo
            os ciclos e estágios dos projetos.
          </p>

          <Player src={develop1} className="player" loop autoplay />

          <p>
            Especializei-me em frameworks desenvolvidos em JavaScript, como
            Angular, React, React Native, Node, entre outros. No entanto, isso
            não me impediu de expandir meus conhecimentos em outras áreas,
            especialmente em backend. Sempre reconheci que o constante
            aprendizado e atualização são fundamentais na área que escolhi, e
            tenho uma paixão por explorar novas tecnologias, testá-las e
            continuar aprendendo.
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
              <Card
                title="Go Barber"
                subtitle="Projeto de um sistema de barbearia, utilizando React, React Native e Node"
                link="https://github.com/Mlodovico/Go-Barber"
              />
              <Card
                title="Git hunter"
                subtitle="Um sistema capaz de procurar contas no github pelo id, utilizando React"
                link="https://github.com/Mlodovico/Git-hunter"
              />
              <Card
                title="Most Used Words"
                subtitle="Projeto feito com VueJs, capaz de calcular a quantidade de palavras de um devido texto"
                link="https://github.com/Mlodovico/most-used-words"
              />
              <Card
                title="Habits"
                subtitle="Marcador de complomissos e habitos feito em React"
                link="https://github.com/Mlodovico/habits"
              />
            </div>
          </div>
          <div className="certificacion-container">
            <p>Formaçōes e certificados</p>
            <div className="card">
              <Card
                title="Certificado UNIP"
                subtitle="Certificado de formação acadêmica em Ciência da Computação"
                link={degree}
              />
              <Card
                title="Swift"
                subtitle="Certificado de finalização do curso completo de Swift"
                link={swiftDegree}
              />
              <Card
                title="Java Spring"
                subtitle="Curso Udemy para entender e aplicar Java SpringBoot"
                link={javaSpringDegree}
              />
              <Card
                title="WebCourse"
                subtitle="Curso Udemy, desenvolvendo e aprendendo a utilizar JavaScript e seus frameworks"
                link={webCourseJavascript}
              />
              <Card
                title="IntelliJ IDEA Tricks"
                subtitle="Curso Udemy para otimizacao de usabilidade do IntelliJ"
                link={degree}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
