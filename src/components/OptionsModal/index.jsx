import { useState } from "react";

import "./styles.css";

import { AiFillCaretUp } from "react-icons/ai";

import { ptBR } from "../../ling/pt-br";
import { enUs } from "../../ling/en-us";
import { esES } from "../../ling/es-es";

export const OptionsModal = ({ language }) => {
  const [ling, setLing] = useState(enUs);

  const handleSwitchBetweenLanguages = (langSelected) => {
    setLing(langSelected);
    language(langSelected);
  };

  return (
    <>
      <div className="toggle-modal-options">
        <AiFillCaretUp className="arrow-up" size={40} />
        <h5 className="options-title">{ling.lang}</h5>
        <div className="options-separator">
          <button
            className="options-button-select"
            onClick={() => handleSwitchBetweenLanguages(enUs)}
          >
            {ling.lang2}
          </button>
          <button
            className="options-button-select"
            onClick={() => handleSwitchBetweenLanguages(ptBR)}
          >
            {ling.lang1}
          </button>
          <button
            className="options-button-select"
            onClick={() => handleSwitchBetweenLanguages(esES)}
          >
            {ling.lang3}
          </button>
        </div>
      </div>
    </>
  );
};
