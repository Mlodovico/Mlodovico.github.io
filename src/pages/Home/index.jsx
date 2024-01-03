import React, { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineFileText,
  AiOutlineInstagram,
  AiFillCaretUp,
} from "react-icons/ai";
import { FiAlignJustify } from "react-icons/fi";

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
import { OptionsModal } from "../../components/OptionsModal";
import { ptBR } from "../../ling/pt-br";
import { enUs } from "../../ling/en-us";
import { esES } from "../../ling/es-es";

function App() {
  const [ling, setLing] = useState(enUs);
  const [toggleModal, setToggleModal] = useState(false);

  const handleSwitchBetweenLanguages = (langSelected) => {
    setLing(langSelected);
  };

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
                <p>{ling.firtsSubtitle}</p>
                <p>{ling.yearsOld}</p>
                <p>Campinas - SP/Brasil</p>
              </div>
            </div>

            <div className="separator" />

            <h4 className="title">{ling.socialMedia}</h4>
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
                {ling.resume}
              </a>
            </div>

            <div className="separator" />

            <h4 className="title">{ling.knowledges}</h4>
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
              <p>MySQL</p>
              <p>MongoDB</p>
              <p>Jenkins</p>
              <p>MultiCloud</p>
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
            <p>{ling.firtsSubtitle}</p>
            <div>
              <a className="github-link" href="https://github.com/Mlodovico">
                <span>
                  <AiFillGithub /> Github
                </span>
              </a>
              <a
                className="linkedin-link"
                href="https://www.linkedin.com/in/murilo-lodovico-509398167/"
              >
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
          <div className="options-div">
            <button
              className="options-button"
              onClick={() => setToggleModal(!toggleModal)}
            >
              <FiAlignJustify size={30} />
            </button>
          </div>

          {toggleModal && (
            <OptionsModal language={handleSwitchBetweenLanguages} />
          )}
        </div>

        <div className="body-sector">
          <h3 className="title-body">Portfolio</h3>
          <p>{ling.secondDivFirstSubtitle}</p>
          <p>{ling.secondDivFirstParagraph}</p>

          <Player src={develop1} className="player" loop autoplay />

          <p>{ling.secondDivSecondParagraph}</p>
          <div className="profile-front-image-view">
            <img
              className="profile-image"
              src={ProfileFrontImage}
              alt="Profile_Image"
            />
          </div>

          <div className="certificacion-container">
            <p>{ling.firstScrollviewCardCardTitle}</p>
            <div className="card">
              <Card
                title="Go Barber"
                subtitle={ling.goBarberDescription}
                link="https://github.com/Mlodovico/Go-Barber"
              />
              <Card
                title="Git hunter"
                subtitle={ling.gitHunterDescription}
                link="https://github.com/Mlodovico/Git-hunter"
              />
              <Card
                title="Most Used Words"
                subtitle={ling.mostUsedWorldsDescription}
                link="https://github.com/Mlodovico/most-used-words"
              />
              <Card
                title="Habits"
                subtitle={ling.habitsDescription}
                link="https://github.com/Mlodovico/habits"
              />
            </div>
          </div>
          <div className="certificacion-container">
            <p>{ling.secondScrollviewCardTitle}</p>
            <div className="card">
              <Card
                title="Certificado UNIP"
                subtitle={ling.degreeDescription}
                link={degree}
              />
              <Card
                title="WebCourse"
                subtitle={ling.webCourseDegreeDescription}
                link={webCourseJavascript}
              />
              <Card
                title="Swift"
                subtitle={ling.swiftDegreeDescription}
                link={swiftDegree}
              />
              <Card
                title="Java Spring"
                subtitle={ling.javaSpringDegreeDescription}
                link={javaSpringDegree}
              />
              <Card
                title="IntelliJ IDEA Tricks"
                subtitle={ling.intelliJCourseDescription}
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
